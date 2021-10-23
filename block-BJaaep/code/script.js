let root = document.querySelector(".wrapper");
let ul = document.createElement("ul");
ul.classList.add("boxes");

root.append(ul);

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12];


function getRandomNumber(){
    return Math.floor(Math.random() * 12)
}


numbers.forEach((number) => {
     // Create 12 boxes
    let li = document.createElement("li");
    li.classList.add("box");

    // On event get number on box

    function handleClick(){
        li.innerText = getRandomNumber();

        // Remove the content after 5 seconds
        setTimeout(() => {
            li.innerText = "";
        }, 5000);
    }

    li.addEventListener("click", handleClick)

    ul.append(li);
})

ul = document.createElement("ul");
ul.classList.add("boxes");

root.append(ul);




//// Event with deligation




function handleClick(event){
    event.target.innerText = getRandomNumber();

   // Remove the content after 5 seconds
    setTimeout(() => {
        event.target.innerText = "";
    }, 5000);
}

numbers.forEach((number) => {
    // Create 12 boxes
    let li = document.createElement("li");
    li.classList.add("box");
    li.setAttribute("data-class", number)
    ul.append(li);   
})


// On click get Number on box
ul.addEventListener("click", handleClick);


