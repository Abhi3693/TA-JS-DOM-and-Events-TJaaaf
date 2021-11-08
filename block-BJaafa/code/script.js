
let userRoot = document.querySelector(".user-icons");
let computerRoot = document.querySelector(".computer-icons");
let result = document.querySelector(".result");
let userScore = document.querySelector(".player-score");
let computerScore = document.querySelector(".computer-score");
let reset = document.querySelector(".reset");

let data = [
    {name: "rock", beats: "scissors" , beats2: "spock"},
    {name: "paper", beats: "rock", beats2: "lizard" },
    {name: "scissors", beats: "paper", beats2: "lizard"},
    {name: "lizard", beats: "spock", beats2: "paper"},
    {name: "spock", beats: "scissors", beats2: "rock"},
]

function getRandomNumber() {
    return Math.floor(Math.random() * (data.length + 1));
}

function getWinner(user, computer) {

    if(user.name === computer.name) {
        result.innerText = "Its a tie";
        result.style.color = "navy";
    } else if (user.beats === computer.name || user.beats2 === computer.name) {
        result.innerText = "You Won";
        result.style.color = "green";
        userScore.innerText =  Number(userScore.innerText) + 1;
    } else {
        result.innerText = "You Lost";
        result.style.color = "red";
        computerScore.innerText = Number(computerScore.innerText) + 1;
    }
}


let userSelected = {}, computerSelected = {};

function createUserIcon () {
    userRoot.innerHTML = "";
    
    data.forEach((icon) => {
        let li = document.createElement("li");
        let i = document.createElement("i");
        i.className = `far fa-hand-${icon.name}`;

        if (userSelected.name === icon.name) {
            li.classList.add("selected-user");
        }

        li.addEventListener("click", () => {
            userSelected = icon;

            computerSelected = data[getRandomNumber()];
            createUserIcon();
            createComputerIcon();
            getWinner(userSelected, computerSelected);
        });

        li.append(i);
        userRoot.append(li);
    })
}

createUserIcon();


function createComputerIcon () {
    computerRoot.innerHTML = "";

    data.forEach((icon) => {
        let li = document.createElement("li");
        let i = document.createElement("i");
        i.className = `far fa-hand-${icon.name}`;
        
        if (computerSelected.name === icon.name) {
            li.classList.add("selected-computer");
        }

        li.append(i);

        computerRoot.append(li);
    })
}

createComputerIcon();

reset.addEventListener("click", () =>{
    userSelected = "";
    computerSelected = "";
    createComputerIcon();
    createUserIcon();
    userScore.innerText = "";
    computerScore.innerText = "";
    result.innerText = "";
})


