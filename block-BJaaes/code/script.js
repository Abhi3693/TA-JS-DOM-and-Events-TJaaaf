let form = document.querySelector("form");

let errorMessage = {};

function displayError(name){
    let elm = form.elements[name];
    elm.nextElementSibling.innerText = errorMessage[name];
    elm.classList.add("fail");
    elm.classList.remove("success");
}

function displaySuccess(name){
    let elm = form.elements[name];

    elm.nextElementSibling.innerText = "";
    errorMessage[name] = "";
    elm.classList.remove("fail");
    elm.classList.add("success");
}

function handleSubmit(event){
    event.preventDefault();

    let final = true;

    let elements = event.target.elements;
    const username = elements.username.value;
    const email = elements.email.value;
    const phone = elements.phone.value;
    const password = elements.password.value;
    const checkPassword = elements.checkPassword.value;
    event.preventDefault();

    if(username.length < 4) {
        errorMessage.username = "Username can't be less than 4 charachter";
        displayError("username");
        final = false;
    } else if(!isNaN(username)) {
        errorMessage.username = "Username can't be a Number";
        displayError("username");
        final = false;
    } else{
        displaySuccess("username");
    }

    if(email.length < 6) {
        errorMessage.email = "Email can't be less than 6 charachter";
        displayError("email");
        final = false;
    } else if(!email.includes("@")) {
        errorMessage.email = "Email must contain symbol @";
        displayError("email");
        final = false;
    } else {
        displaySuccess("email");
    }

    if(phone.length < 7) {
        errorMessage.phone = "Phone number can't be less than 7 charachter";
        displayError("phone");
        final = false;
    } else if(isNaN(phone)) {
        errorMessage.phone = "Phone number can only be a Number";
        displayError("phone");
        final = false;
    } else{
        displaySuccess("phone");
    }

    if(password !== checkPassword){
        errorMessage.password = "Password and Confirm password must be same.";
        displayError("password");
        errorMessage.checkPassword = "Password and Confirm password must be same.";
        displayError("checkPassword");
        final = false;
    } else {
        displaySuccess("password");
        displaySuccess("checkPassword");
    }

    if(final){
        alert("User Added Successfully!");
    }
}

form.addEventListener("submit", handleSubmit);