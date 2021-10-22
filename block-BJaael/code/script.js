function generateRandomNumber(max){
    return Math.floor(Math.random() * max)
}

function generateRandomColor(){
    let hexChar = ["1","2","3","4","5","6","7","8","9","0","A","B","C","D","E","F"];

    let color = "#";
    for(let i = 0; i < 6; i++){
        let randomNumber = generateRandomNumber(16);
        color = color + hexChar[randomNumber];
    }
    return color;
}

let parentBox = document.querySelector(".container");

for (let i = 0; i < 500; i++){
    let div = document.createElement("div");
    div.classList.add("box")
    let h3 = document.createElement("h3");
    h3.innerText = generateRandomNumber(500);

    div.append(h3);
    parentBox.append(div);
}

let allBoxes = parentBox.querySelectorAll(".box");

function handleMouseMove(){
    allBoxes.forEach((box) => {
        box.querySelector("h3").innerText = generateRandomNumber(500);
        box.style.backgroundColor = generateRandomColor()
    })
}

parentBox.addEventListener("mousemove", handleMouseMove)