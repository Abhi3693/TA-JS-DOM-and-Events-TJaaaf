let userIcons = document.querySelector(".user-icons");
let computerIcons = document.querySelector(".computer-icons");

let userScore = document.querySelector(".user-Score");
let computerScore = document.querySelector(".computer-score");
let display = document.querySelector(".display");
let reset = document.querySelector(".reset"); 

let dataset = [
    {
        name: "rock",
        Description: "Rock crushes Scissors"
    },
    {
        name: "paper",
        Description: "Paper covers Rock"
    },
    {
        name: "scissors",
        Description: "Scissors cuts Paper"
    }
]

function createUserIcon(){
    dataset.forEach((item) => {
        let li = document.createElement("li");
        let i = document.createElement("i");
        i.className = (`fa fa-hand-${item.name}-o`)
        li.append(i);
        userIcons.append(li);
    })
}
createUserIcon();

function createComputerIcon(){
    dataset.forEach((item) => {
        let li = document.createElement("li");
        let i = document.createElement("i");
        i.className = (`fa fa-hand-${item.name}-o`);
        li.append(i);
        computerIcons.append(li);
    })
}
createComputerIcon();

function getRandomNumber(){
    return Math.floor(Math.random() * 3)
}

let userSelect = userIcons.querySelectorAll("i")
let computerSelect = computerIcons.querySelectorAll("i")

function blackIcons(){
    userSelect.forEach((icon) =>{
        icon.style.color = "black";
    })
    computerSelect.forEach((icon) =>{
        icon.style.color = "black";
    })
}

userSelect.forEach((icon) => {

    function handleClick(event) {
        
        blackIcons();
        event.target.style.color = "blue";

        let user = event.srcElement.classList[1];
    
        let computerOptionIndex = getRandomNumber();

        let computer = computerSelect[computerOptionIndex].classList[1];

        computerSelect[computerOptionIndex].style.color = "red";

        if(user === computer) {
            display.style.color = "grey";
            display.innerText = "It's a tie";

        } else if(user === "fa-hand-paper-o" && computer === "fa-hand-rock-o" || user === "fa-hand-rock-o" && computer === "fa-hand-scissors-o"){
            display.style.color = "green";
            display.innerText = "You Win!!!";
            userScore.innerText =  +(userScore.innerText) + 1;
        } else {
            display.style.color = "red";
            display.innerText = "Computer Win";
            computerScore.innerText =  +(computerScore.innerText) + 1;
        }
    }
    icon.addEventListener("click", handleClick);
})

reset.addEventListener("click", function(){
    userScore.innerText = 0;
    computerScore.innerText = 0;
    display.innerText = "";
    blackIcons();
})

computerScore.style.color = "red";
userScore.style.color = "green";