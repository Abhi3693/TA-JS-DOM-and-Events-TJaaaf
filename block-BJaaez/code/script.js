let rootElm = document.querySelector(".list-holder");
let searchBox = document.querySelector("input");
let tally = document.querySelector(".todo-tally");


let todoList = JSON.parse(localStorage.getItem("todo")) || [];


function upDateTodoList (item) {
    todoList = localStorage.setItem("todo", JSON.stringify(item));
    todoList = item;
    renderTodoList();
}

const handleInput = (event) => {
   
    let value = event.target.value;

    if(event.keyCode === 13 && value !== "" && value !== todoList.forEach(todo => todo.name)) {
        todoList.push({name: value, isDone: false});
        event.target.value = ""
        upDateTodoList(todoList);
    }
    
}



function handleDelete(event) {
    let id = event.target.dataset.id;

    todoList.splice([id],1);
    upDateTodoList(todoList)
}

function handleChange(event) {
    let id = event.target.id;

    todoList[id].isDone = !todoList[id].isDone;
    upDateTodoList(todoList);
}



function renderTodoList(item = todoList) {

    rootElm.innerHTML = "";

    item.forEach((todo, index) => {

        let li = document.createElement("li");
        let input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.classList.add("checkbox");
        input.id = index;
        input.checked = todo.isDone;

        let label = document.createElement("label");
        label.for = index;
        label.classList.add("todoLabel")
        label.innerText = todo.name;

        let small = document.createElement("small");
        small.innerText = "X";
        small.setAttribute("data-id", index);
        small.classList.add("close");

        li.append(input,label,small);


        input.addEventListener("change", handleChange)
        small.addEventListener("click", handleDelete);

        rootElm.append(li);
        
    })
        renderFilters();
}

searchBox.addEventListener("keyup", handleInput);




function filterActive() {
   let activeTodo = todoList.filter((todo) => !todo.isDone);
   renderTodoList(activeTodo);
}

function handleAll() {
    renderTodoList();
}

function filterCompleted() {
    let completedTodo = todoList.filter((todo) => todo.isDone);
    renderTodoList(completedTodo);
}

function filtedClearCompleted() {
    let completedTodo = todoList.filter((todo) => !todo.isDone);
    upDateTodoList(completedTodo)
    renderTodoList();
}



function renderFilters() {
    tally.innerHTML = "";

    let p = document.createElement("p");
    p.classList.add("item-remained");
    p.innerText = " Item remained";
    
    let getActiveTodo = todoList.filter((todo) => !todo.isDone);
    let itemRemained = document.createElement("p");
    itemRemained.classList.add("item-count");
    itemRemained.innerText = getActiveTodo.length;


    let all = document.createElement("p");
    all.innerText = "All"

    let active = document.createElement("p");
    active.innerText = "Active";

    let completed = document.createElement("p");
    completed.innerText = "Completed";

    let clearCompleted = document.createElement("p");
    clearCompleted.innerText = "Clear Completed"

    active.addEventListener("click", filterActive);
    all.addEventListener("click", handleAll);
    completed.addEventListener("click", filterCompleted);
    clearCompleted.addEventListener("click", filtedClearCompleted);

    p.prepend(itemRemained);

    tally.append(p,all,active,completed,clearCompleted);

}

renderTodoList();