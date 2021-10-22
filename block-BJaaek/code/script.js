
let first = document.querySelector(".first");

let second = document.querySelector(".second");

let colors = ["lightgreen","red","green","blue","yellow","perple","orange","navy","corel","skyblue","gray","violet","pink","black","lightblue","lightgray","aqua","aquamarine","antiqewhite"];


let colorIndex = 0;


first.addEventListener("click", function() {
    first.style.backgroundColor = colors[colorIndex];
    if(colorIndex > colors.length - 1) {
        colorIndex = 0;
    }
    colorIndex++;
})


second.addEventListener("mousemove", function(){
    let color = colors[Math.floor(Math.random()*colors.length)];
    second.style.backgroundColor = color;
})






