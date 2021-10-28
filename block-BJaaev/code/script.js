let input = document.querySelector("input");
let rootElm = document.querySelector("ul");
let tallyElm = document.querySelector(".tally-todo")

let todoList = JSON.parse(localStorage.getItem("todo")) || [];

const updateTodoList = items => {
    localStorage.setItem("todo", JSON.stringify(items));
    todoList = items;
    renderTodoList(todoList);
}

const handleCreateNewTodo = (event) => {
    let value = event.target.value;

    if (event.keyCode === 13 && value !== "") {  
        todoList.push({ name: value, isDone: false });
        event.target.value = "";
        updateTodoList(todoList);
    }
}

input.addEventListener("keyup", handleCreateNewTodo);

const handleDeleteItem = event => {
    let itemIndex = event.target.dataset.id;
    todoList.splice(itemIndex, 1);
    updateTodoList(todoList);
}

const handleChangeItemState = event => {
    let id = event.target.id;
    todoList[id].isDone = !todoList[id].isDone;
    updateTodoList(todoList);
}

function renderTodoList(items) {
    rootElm.innerHTML = "";

    items.forEach((todo, index) => {
        let li = document.createElement("li");
        let input = document.createElement("input");
        input.classList.add("todoCheckbox");
        input.type = "checkbox";
        input.id = index;
        input.checked = todo.isDone;
        let label = document.createElement("label");
        label.classList.add("todoLabel");
        label.for = index;
        label.innerText = todo.name;
        let small = document.createElement("small");
        small.innerText = "X";
        small.setAttribute("data-id", index);
        small.classList.add("close")

        small.addEventListener("click", handleDeleteItem);
        input.addEventListener("change", handleChangeItemState)
        li.append(input, label, small);

        rootElm.append(li);
    });
}

// Event's

let activeButton = "all";

const handleActiveFilterClick = () => {
    renderTodoList(todoList.filter(item => !item.isDone));

    activeButton = "active";
    updateActiveButton();
}

const handleAllFilterClick = () => {
    renderTodoList(todoList);

    activeButton = "all";
    updateActiveButton();
}

const handleCompletedFilterClick = () => {
    renderTodoList(todoList.filter(item => item.isDone));

    activeButton = "completed";
    updateActiveButton();
}

const handleClearCompletedFilter = () => {
    updateTodoList(todoList.filter(item => !item.isDone));

    activeButton = "clear";
    updateActiveButton();
}




let all = document.querySelector(".all");
let activeTodos = document.querySelector(".active");
let completedTodos = document.querySelector(".completed");
let clear = document.querySelector(".clear");

    all.addEventListener("click", handleAllFilterClick);

    activeTodos.addEventListener("click", handleActiveFilterClick);

    completedTodos.addEventListener("click", handleCompletedFilterClick);

    clear.addEventListener("click", handleClearCompletedFilter);



const updateActiveButton = (btn = activeButton) => {

    all.classList.remove("selected");
    activeTodos.classList.remove("selected");
    completedTodos.classList.remove("selected");
    clear.classList.remove("selected");

    if(btn === "all") {
        all.classList.add("selected");
    }
    if(btn === "active") {
        activeTodos.classList.add("selected");
    }
    if(btn === "completed") {
        completedTodos.classList.add("selected");
    }
    if(btn === "clear") {
        clear.classList.add("selected");
    }
}
updateActiveButton();
renderTodoList(todoList);

