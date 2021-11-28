let search = document.querySelector(".searchPeople");
let rootElm = document.querySelector(".cards");
let rootTags = document.querySelector(".tagHolder");

let people = got.houses.reduce((acc, cv) => {
    acc = acc.concat(cv.people);
    return acc;
}, [])

const allTags = got.houses.map((house) => house.name);

let activeHouse = "";


const createCards = (items) => {
    rootElm.innerHTML = "";

    items.forEach((person) => {
        let li = document.createElement("li");
        li.classList.add("person");
        let img = document.createElement("image");
        img.alt = person.name;
        img.src = person.image;
        let h2 = document.createElement("h2");
        h2.innerText = person.name; 
        let p = document.createElement("p");
        p.innerText = person.description; 
        let btn = document.createElement("button");
        btn.classList.add("btn")
        let a = document.createElement("a");
        a.href = person.wikiLink;
        a.innerText = "Know More !"
    
        btn.append(a);
        li.append(img,h2,p,btn);
        rootElm.append(li);
    })
}

createCards(people);

const handleSearch = (event) => {
    let searchText = event.target.value;

    let findPeople = people.filter((person) => person.name.toLowerCase().startsWith(searchText.toLowerCase()));

    createCards(findPeople);
}

search.addEventListener("keyup", handleSearch);



const createTagsUI = (tags = []) => {
    rootTags.innerHTML = "";

    tags.forEach((tag) => {
        let li = document.createElement("li");
        li.innerText = tag;
        //console.log(li)
        if(activeHouse === tag) {
            console.log(li)
            li.classList.add("active");
        }

        li.addEventListener("click", () => {
            activeHouse = tag;
            let peopleOfTheHouse = got.houses.find((house) => house.name === tag).people || [];
            createCards(peopleOfTheHouse);
            createTagsUI(allTags);
        })

        rootTags.append(li);
    })
}

createTagsUI(allTags);





























// let searchSratks = document.querySelector(".starks");
// searchSratks.setAttribute("data-id", "Starks");

// let searchLannister = document.querySelector(".lannister");
// searchLannister.setAttribute("data-id", "Lannisters");

// let searchBaratheons = document.querySelector(".baratheons");
// searchBaratheons.setAttribute("data-id", "Baratheons");

// let searchTargaryens = document.querySelector(".targaryens");
// searchTargaryens.setAttribute("data-id", "Targaryens");

// let searchGreyjoys = document.querySelector(".greyjoys");
// searchGreyjoys.setAttribute("data-id", "Greyjoys");

// let searchTreylls = document.querySelector(".treylls");
// searchTreylls.setAttribute("data-id", "Tyrells");

// let searchTullys = document.querySelector(".tullys");
// searchTullys.setAttribute("data-id", "Tullys");

// let searchRedwyns = document.querySelector(".redwyns");
// searchRedwyns.setAttribute("data-id", "Redwyne");

// let searchFreys = document.querySelector(".freys");
// searchFreys.setAttribute("data-id", "Freys");

// let searchArryns = document.querySelector(".arryns");
// searchArryns.setAttribute("data-id", "Arryns");

// let searchdDthrakis = document.querySelector(".dothrakis");
// searchdDthrakis.setAttribute("data-id", "Dothrakis");



// const searchPeopleByHouse = (event) =>{

//     let value = event.target.dataset.id;

//     let result = got.houses.find(house => {
                
//        return  house.name === value;
//     })
//     renderPeople(result.people);
// }


// searchSratks.addEventListener("click" , searchPeopleByHouse) ;

// searchLannister.addEventListener("click" , searchPeopleByHouse) ;

// searchBaratheons.addEventListener("click" , searchPeopleByHouse) ;

// searchTargaryens.addEventListener("click" , searchPeopleByHouse) ;

// searchGreyjoys.addEventListener("click" , searchPeopleByHouse) ;

// searchTreylls.addEventListener("click" , searchPeopleByHouse) ;

// searchTullys.addEventListener("click" , searchPeopleByHouse) ;

// searchRedwyns.addEventListener("click" , searchPeopleByHouse) ;

// searchFreys.addEventListener("click" , searchPeopleByHouse) ;

// searchArryns.addEventListener("click" , searchPeopleByHouse) ;

// searchdDthrakis.addEventListener("click" , searchPeopleByHouse) ;

