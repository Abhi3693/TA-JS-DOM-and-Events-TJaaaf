

let firstBox = document.querySelectorAll(".first li");

firstBox.forEach((box, index) =>{
    box.addEventListener("click", function(event){
        event.target.innerText = index + 1;

        setTimeout(() => {
            event.target.innerText = "";
        }, 5000);
    })
})

let secondBox = document.querySelector(".second");

secondBox.addEventListener("click", function(event){
    console.dir(event.target.dataset.text)
    let text = event.target.dataset.text;
    event.target.innerText = text

    setTimeout(() => {
        event.target.innerText = "";
    }, 5000);
})
