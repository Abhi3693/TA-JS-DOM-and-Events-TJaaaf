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
    
    if (todoList.length) {
        renderFilters()
    }
}

const handleActiveFilterClick = () => {
    renderTodoList(todoList.filter(item => !item.isDone));
}

const handleAllFilterClick = () => {
    renderTodoList(todoList);
}

const handleCompletedFilterClick = () => {
    renderTodoList(todoList.filter(item => item.isDone));
}

const handleClearCompletedFilter = () => {
    updateTodoList(todoList.filter(item => !item.isDone));
}

// Event's
const clearFilters = () => {
}

const renderFilters = () => {
    tallyElm.innerHTML = "";

    let all = document.createElement("p");
    all.innerText = "All";

    let activeTodos = document.createElement("p");
    activeTodos.innerText = "Active";
    
    const activeTodoItems = todoList.filter(item => !item.isDone);
    let itemsLeft = document.createElement("p");
    itemsLeft.innerText = `${activeTodoItems.length} items left`;

    let completedTodos = document.createElement("p");
    completedTodos.innerText = "Completed";

    let clear = document.createElement("p");
    clear.innerText = "Clear completed"

    let div = document.createElement("div");
    div.classList.add("center");
    div.append(all, activeTodos, completedTodos)

    tallyElm.append(itemsLeft, div, clear);

    all.addEventListener("click", handleAllFilterClick);

    activeTodos.addEventListener("click", handleActiveFilterClick);

    completedTodos.addEventListener("click", handleCompletedFilterClick);

    clear.addEventListener("click", handleClearCompletedFilter);
}

renderTodoList(todoList);


// let input = document.querySelector("input");
// let rootElm = document.querySelector("ul");
// let tallyElm = document.querySelector(".tally-todo");


// let todoList = JSON.parse(localStorage.getItem("todo")) || []; 
// console.dir(todoList);

// const updateTodoList = (item) => {
//     localStorage.setItem("todo", JSON.stringify(item));
//     todoList = item;
//     renderList(todoList);
// }

// const handleInput = (event) => {
//     let value = event.target.value;

//     if(event.keyCode === 13) {
//         todoList.push({ name: value, isDone: false });
        
//         updateTodoList(todoList);

//         event.target.value = "";
//     }

    
//     renderList(todoList);
// }

// const handleDeleteItem = (event) => {
//     let itemIndex = event.target.dataset.id;
//     let a = todoList.splice(itemIndex, 1);
//     updateTodoList(todoList);
// }

// const handleChangeItem = (event) => {
//     let id = event.target.id;
//     todoList[id].isDone = !todoList[id].isDone;
//     updateTodoList(todoList);
// }

// const renderList = (items) => {

//     rootElm.innerHTML = "";

//     items.forEach((todo, index) => {
//         let li = document.createElement("li");
//         let input = document.createElement("input");
//             input.classList.add("todoCheckbox");
//             input.type = "checkbox";
//             input.id = index;
//             input.checked = todo.isDone;
//         let label = document.createElement("label");
//             label.classList.add("todoLabel");
//             label.for = index;
//             label.innerText = todo.name;
//         let small = document.createElement("small");
//             small.innerText = "X";
//             small.setAttribute("data-id", index);
//             small.classList.add("close")

//         small.addEventListener("click", handleDeleteItem);
//         input.addEventListener("change", handleChangeItem)
//         li.append(input, label, small);

//         rootElm.append(li);
//     })
//     renderFilters();
// }




// input.addEventListener("keyup", handleInput);


// const handleAllFilterClick = () => {
//     renderList(todoList);
// }

// const handleActiveFilterClick = () => {
//     renderList(todoList.filter((item) => !item.isDone));
    
// }

// const handleCompletedFilterClick = () => {
//     renderList(todoList.filter((item) => item.isDone));
    
// }

// const handleClearCompletedFilter = () => {
//     updateTodoList(todoList.filter((item) => !item.isDone));
// }

// const renderFilters = () => {
//     tallyElm.innerHTML = "";

//     let all = document.createElement("p");
//     all.innerText = "All";

//     let activeTodos = document.createElement("p");
//     activeTodos.innerText = "Active";
    
//     const activeTodoItems = todoList.filter(item => !item.isDone);
//     let itemsLeft = document.createElement("p");
//     itemsLeft.innerText = `${activeTodoItems.length} items left`;

//     let completedTodos = document.createElement("p");
//     completedTodos.innerText = "Completed";

//     let clear = document.createElement("p");
//     clear.innerText = "Clear completed"

//     let div = document.createElement("div");
//     div.classList.add("center");
//     div.append(all, activeTodos, completedTodos)

//     tallyElm.append(itemsLeft, div, clear);

//     all.addEventListener("click", handleAllFilterClick);

//     activeTodos.addEventListener("click", handleActiveFilterClick);

//     completedTodos.addEventListener("click", handleCompletedFilterClick);

//     clear.addEventListener("click", handleClearCompletedFilter);

// }


// renderList(todoList);