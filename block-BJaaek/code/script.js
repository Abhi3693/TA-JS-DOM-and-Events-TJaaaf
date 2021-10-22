
let first = document.querySelector(".first");

let second = document.querySelector(".second");

// let colors = ["lightgreen","red","green","blue","yellow","perple","orange","navy","corel","skyblue","gray","violet","pink","black","lightblue","lightgray","aqua","aquamarine","antiqewhite"];
// let colorIndex = 0;

// first.addEventListener("click", function() {
//     first.style.backgroundColor = colors[colorIndex];
//     if(colorIndex > colors.length - 1) {
//         colorIndex = 0;
//     }
//     colorIndex++;
// })

// second.addEventListener("mousemove", function(){
//     let color = colors[Math.floor(Math.random()*colors.length)];
//     second.style.backgroundColor = color;
// })



function generateRandomColor(){
    let hexColor = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
    ]

    let color = "#";

    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * 16)
        color = color + hexColor[randomNumber]
    }
    return color;
}


function handleclick(){
    let randomColor = generateRandomColor();
    first.style.backgroundColor = randomColor;
}


function handlemousemove(){
    let randomColor = generateRandomColor();
    second.style.backgroundColor = randomColor;
}


first.addEventListener("click", handleclick);
second.addEventListener("mousemove", handlemousemove);