let form = document.querySelector("form");

let userError = ""; 

function handleSubmit(event){
    event.preventDefault();

    let final = true;

    let userNameElm = event.target.elements.name;

    if(userNameElm.value.length < 4 ){
        userError = "Name can't be less than 4 characters";
        userNameElm.classList.add("fail");
        final = false;
    } else if(userNameElm.value.split("").some((e)=> Number(e)) ){
        userError = "You can't use number in the name field";
        userNameElm.classList.add("fail");
        final = false;
    } else {
        userError= "";
        userNameElm.classList.add("success")
        userNameElm.classList.remove("fail")
    } 
    userNameElm.nextElementSibling.innerText = userError;
    

    let userEmailElm = event.target.elements.email;

    if(userEmailElm.value.length < 6 ){
        userError = "Email can't be less than 6 characters  Not a valid email";
        userEmailElm.classList.add("fail");
        final = false;
    } else if(!userEmailElm.value.split("").some((e)=> e === "@") ){
        userError = "Email must contain the symbol @  Not a valid email";
        userEmailElm.classList.add("fail");
        final = false;
    } else {
        userError= "";
        userEmailElm.classList.add("success");
        userEmailElm.classList.remove("fail");
    } 
    userEmailElm.nextElementSibling.innerText = userError;

    
    let userPhoneElm = event.target.elements.phone;

    if(!userPhoneElm.value.split("").every((e)=> Number(e))){
        userError = "Phone number can only contain numbers";
        userPhoneElm.classList.add("fail");
        final = false;
    } else if(userPhoneElm.value.length < 7 ){
        userError = "Phone number can't be less than 7 characters";
        userPhoneElm.classList.add("fail");
        final = false;
    } else {
        userError= "";
        userPhoneElm.classList.add("success");
        userPhoneElm.classList.remove("fail");
    } 
    userPhoneElm.nextElementSibling.innerText = userError;
    
    let userPasswordElm = event.target.elements.password;
 
    let userConformPasswordElm = event.target.elements.conform;
 
    if(userPasswordElm.value !== userConformPasswordElm.value){
        userError = "Password and confirm password must be same."
        userPasswordElm.classList.add("fail");
        userConformPasswordElm.classList.add("fail");
        final = false;
    } else {
        userPasswordElm.classList.add("success");
        userConformPasswordElm.classList.add("success");
        userPasswordElm.classList.remove("fail");
        userConformPasswordElm.classList.remove("fail");
    }
    userPasswordElm.nextElementSibling.innerText = userError;
    userConformPasswordElm.nextElementSibling.innerText = userError;

    if(final !== true){
        console.log("you are wrong")
    } else {
        alert("User Added Successfully!")
    }
}

form.addEventListener("submit", handleSubmit);