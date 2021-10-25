let form = document.querySelector("form");
let result = document.querySelector(".result");
let close = document.querySelector(".close");

let userInfo = [];

let ul = document.createElement("ul");

function model(){
    
    userInfo.forEach((obj) => {
        let li = document.createElement("li");
     
        li.innerText = `${obj.key} : ${obj.value}`;
        ul.append(li);
    })
    result.append(ul);
    result.style.display = "inline-block";
}

function handleSubmit(event){
    event.preventDefault();

    userInfo.push({ key: "Hello", value: form.elements.text.value });
    userInfo.push({ key: "Email", value: form.elements.email[0].value });
    userInfo.push({ key: "You Love", value: form.elements.gender.value });
    userInfo.push({ key: "Color", value: form.elements.color.value });
    userInfo.push({ key: "Rating", value: form.elements.range.value });
    userInfo.push({ key: "Book Genre", value: form.elements.drone.value });

    if(form.elements.terms.checked === true){
        userInfo.push({ key: "Terms", value: "You agree to terms and condition" });
    } else {
        userInfo.push({ key: "Terms", value: "You do not agree to terms and condition" });
    }
    model();
}

form.addEventListener("submit", handleSubmit);

function removewindow(){
    result.style.display = "none";
}
close.addEventListener("click", removewindow);
