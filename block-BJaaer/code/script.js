let form = document.querySelector("form");
let model = document.querySelector(".model_overlay");
let model_close = document.querySelector(".model_close");
let modelInfo = document.querySelector(".model_info")
let userData = {};

function handleSubmit(event){
    event.preventDefault();
    
    let element = event.target.elements;

    userData.name = element.name.value;
    userData.email = element.email.value;
    userData.choice = element.choice.value;
    userData.color = element.color.value;
    userData.range = element.range.value;
    userData.book = element.drone.value;
    userData.terms = element.terms.checked;
    
    model.classList.add("open");

    let close = document.querySelector(".model_close");
        close.addEventListener("click", () =>{
        model.classList.remove("open")
    })
    displayInfo(userData)
}
form.addEventListener("submit", handleSubmit);


function displayInfo(){
    modelInfo.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.innerText = `Hello ${userData.name}`;
    let email = document.createElement("p");
    email.innerText = `Email : ${userData.email}`;
    let choice = document.createElement("p");
    choice.innerText = `Choice : ${userData.choice}`;
    let color = document.createElement("p");
    color.innerText = `Color : ${userData.color}`;
    let range = document.createElement("p");
    range.innerText = `Range : ${userData.range}`;
    let book = document.createElement("p");
    book.innerText = `Book : ${userData.book}`;
    let terms = document.createElement("p");
    terms.innerText = `${
        userData.terms
            ? "You have accepted the terms and condition"
            : "You have not accepted the terms and condition" 
    }`;

    modelInfo.append(h1,email,choice,color,range,book,terms);
    model.append(modelInfo);
}