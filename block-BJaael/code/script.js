let div = document.querySelector(".container");

console.log(div);
console.dir(div);

for(let i = 0; i < 500; i++) {

    let box = document.createElement("div");
    box.classList.add("box");

    function generateRandomColor(){
        let hexChar = [
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
            "A",
            "B",
            "C",
            "D",
            "E",
            "F"
        ]

        let color = "#";

        for(let i = 0; i < 6; i++){
            let randomNumber = Math.floor(Math.random() * 16);
            color = color + hexChar[randomNumber];
        }
        return color;
    }


    function generate500number(){
        let randomNumber = Math.floor(Math.random() * 500)
        return randomNumber;
    }

    function handleMouseMove(){
        let randomColor = generateRandomColor();
        box.style.backgroundColor = randomColor;

        let random500 = generate500number()
        box.innerText = random500;
    }


    div.addEventListener("mousemove", handleMouseMove);
    

    div.append(box);
}