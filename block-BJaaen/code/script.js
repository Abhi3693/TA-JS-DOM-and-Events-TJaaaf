let userIcons = document.querySelectorAll(".user");
let computerIcons = document.querySelectorAll(".computer");
let userScore = document.querySelector(".addUserScore");
let computerScore = document.querySelector(".addcomputerScore");
let display = document.querySelector(".display");
let reset = document.querySelector(".reset"); 
 
function getRandomNumber(){
    return Math.floor(Math.random() * 3)
}

userIcons.forEach((icon) => {
    function handleClick(event) {
        
        userIcons[0].style.color = "black";
        userIcons[1].style.color = "black";
        userIcons[2].style.color = "black";

        event.target.style.color = "blue";

        let user = event.target.dataset.type;
        
        let computerOptionIndex = getRandomNumber();
        let computer = computerIcons[computerOptionIndex].dataset.type;

        computerIcons[0].style.color = "black";
        computerIcons[1].style.color = "black";
        computerIcons[2].style.color = "black";

        computerIcons[computerOptionIndex].style.color = "red";

        if(user === computer) {
            display.innerText = "It's a tie"

        } else if(user === "Paper" && computer === "Rock" || user === "Rock" && computer === "Scissors"){
            display.innerText = "You win";
            userScore.innerText =  +(userScore.innerText) + 1;
        } else {
            display.innerText = "Computer win"
            computerScore.innerText =  +(computerScore.innerText) + 1;
        }
    }
    icon.addEventListener("click", handleClick);
})

reset.addEventListener("click", function(){
    userScore.innerText = 0;
    computerScore.innerText = 0;
    display.innerText = "";
    userIcons[0].style.color = "black";
    userIcons[1].style.color = "black";
    userIcons[2].style.color = "black";
    computerIcons[0].style.color = "black";
    computerIcons[1].style.color = "black";
    computerIcons[2].style.color = "black";
})