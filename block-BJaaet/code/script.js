let input = document.querySelector(`input[type="text"]`);
let rootElm = document.querySelector(".movie-list");

let allMovies = [];

input.addEventListener("keyup", (event) => {
    
    if(event.keyCode === 13){
        allMovies.push({name:event.target.value, watched: false});
        event.target.value = "";
    }
    createMoviesUI();
})

function deleteMovie(event){
    let id = event.target.dataset.id;
    allMovies.splice(id, 1);
    createMoviesUI();
}

function handleChange(event){
    let id = event.target.id;
    allMovies[id].watched = !allMovies[id].watched;
}

function createMoviesUI(){
    rootElm.innerHTML = "";

    allMovies.forEach((movie, i) => {

        let li = document.createElement("li");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.classList.add("styled-checkbox");
        input.id = i;
        input.checked = movie.watched;
        let label = document.createElement("label");
        label.for = i;
        label.innerText = movie.name;
        let span = document.createElement("span");
        span.innerText = "X";
        span.setAttribute("data-id", i);

        span.addEventListener("click", deleteMovie);

        input.addEventListener("change", handleChange);

        li.append(input,label,span);

        rootElm.append(li);
    })
}

