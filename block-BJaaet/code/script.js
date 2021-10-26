let form = document.querySelector("form");

function handleSubmit(event){

    event.preventDefault();
    let elm = event.target.elements.movie;
    let checkBox = document.createElement('input')
    let btn = document.createElement("button");
    let ul = document.querySelector(".movie-holder");
    let li = document.createElement("li");
    let label = document.createElement("lable");

    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", `${elm.value}`);
    checkBox.classList.add("checkbox");
    
    btn.setAttribute("type", "submit");
    btn.classList.add("btn");
    btn.innerText = "Close";
    
    ul.style.display = "inline-block";
    label.setAttribute("for", `${elm.value}`);

    label.innerText = elm.value;
    li.append(checkBox, label, btn);
    ul.append(li);

    btn.addEventListener("click", function(){
        let parent = btn.parentElement;
        parent.remove();
    })
}
form.addEventListener("submit", handleSubmit)