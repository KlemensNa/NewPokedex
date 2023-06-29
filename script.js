async function loadPokemon(){
    
    for (let i = 1; i <= 1010; i++) {
        
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        let responseAsJson = await response.json();
        buildCard(responseAsJson);
        activateFirstGen();
        buildLoadingDisplay(i);
        
    }

    // createloadFiftyMoreBtn(loadedAmount);
    // createloadHundredBtn(loadedAmount);
    // createloadTwoHundredBtn(loadedAmount);
}

function loadGenButton(i){
    let GenButtonContainer = document.getElementById('genButtonContainer');
    if(i === 252){
        GenButtonContainer.innerHTML += /*html*/`
            <button onclick="activateChoosenGen(152, 251)">Gen2</button>
        `
    }
    if(i === 386){
        GenButtonContainer.innerHTML += /*html*/`
            <button onclick="activateChoosenGen(252, 386)">Gen3</button>
        `
    }
    if(i === 493){
        GenButtonContainer.innerHTML += /*html*/`
            <button onclick="activateChoosenGen(387, 493)">Gen4</button>
        `
    }
    if(i === 649){
        GenButtonContainer.innerHTML += /*html*/`
            <button onclick="activateChoosenGen(494, 649)">Gen5</button>
        `
    }
    if(i === 721){
        GenButtonContainer.innerHTML += /*html*/`
            <button onclick="activateChoosenGen(650, 721)">Gen6</button>
        `
    }
    if(i === 809){
        GenButtonContainer.innerHTML += /*html*/`
            <button onclick="activateChoosenGen(722, 809)">Gen7</button>
        `
    }
    if(i === 905){
        GenButtonContainer.innerHTML += /*html*/`
            <button onclick="activateChoosenGen(810, 905)">Gen8</button>
        `
    }
    if(i === 1010){
        GenButtonContainer.innerHTML += /*html*/`
            <button onclick="activateChoosenGen(906, 1010)">Gen9</button>
        `
    }
}


function buildCard(JSON){
    let name = JSON['name'];
    let id = JSON['id'];
    let picture = JSON['sprites']['front_default'];

    let pokemonCards = document.getElementById('pokemonCards');
    pokemonCards.innerHTML +=/*html*/`
    <div id=${name} class="pokemonCard">
        <div id="name${name}" class="pokemonName">${name}</div>
        <div id="${id}">#${id}</div>
        <div id="picture${name}"><img src="${picture}"></div>
    </div>
    `
    activateFirstGen(id, name);
}


function activateFirstGen(id, name){

    let pokemon = document.getElementById(`${name}`);
    if(id <=151){
        pokemon.classList.add('d-flex');
    }
}


function activateChoosenGen(i, j){  

    deletePokemonCardsOver(j);
    deletePokemonCardsUnder(i); 
    for (i; i <= j; i++) {
        const id = i;
        let idPokemon = document.getElementById(`${id}`);
        let parent = idPokemon.parentElement;
        console.log(parent);
        if(i <= id && id <= j){
            parent.classList.remove('d-none');
            parent.classList.add('d-flex');
        }        
    } 
}


function deletePokemonCardsOver(j){
    let jdruber = j + (1010-j);

    for (jdruber; jdruber < 1010 ; jdruber++) {
        const idEraseToo = jdruber;
        let idPokemon = document.getElementById(`${idEraseToo}`);
        let parento = idPokemon.parentElement;
        console.log(parent);
            parento.classList.remove('d-flex');
            parento.classList.add('d-none');    
    }
}

function deletePokemonCardsUnder(i){

    let idrunter = i -(i-1);

    for (idrunter; idrunter < i; idrunter++) {
        const idErase = idrunter;
        let idPokemon = document.getElementById(`${idErase}`);
        let parent = idPokemon.parentElement;

        parent.classList.remove('d-flex');
        parent.classList.add('d-none');
    }
}


function buildLoadingDisplay(i){
    ;
    document.getElementById('loading').innerHTML =/*html*/`
        ${i} pokemon of 1010 loaded
    `
    loadGenButton(i);
}



function createloadFiftyMoreBtn(loadedAmount){
    let loadMoreBtn = document.getElementById('loadFiftyMore');
    loadMoreBtn.innerHTML = /*html*/`
        <div class="pokemonCard" onclick="loadPokemon(${loadedAmount}, 50)">load 50 More</div>
    `
}


function createloadHundredBtn(loadedAmount){
    let loadMoreBtn = document.getElementById('loadHundredMore');
    loadMoreBtn.innerHTML = /*html*/`
        <div class="pokemonCard" onclick="loadPokemon(${loadedAmount}, 100)">load 100 More</div>
    `
}


function createloadTwoHundredBtn(loadedAmount){
    let loadMoreBtn = document.getElementById('loadTwoHundredMore');
    loadMoreBtn.innerHTML = /*html*/`
        <div class="pokemonCard" onclick="loadPokemon(${loadedAmount}, 200)">load 200 More</div>
    `
}

function searchPokemon(){
    let searchedPokemon = document.getElementById('searchText').value.toUpperCase();
    let searchingArea = document.getElementById("pokemonCards");
    let searchingElements = searchingArea.getElementsByClassName('pokemonName');

    for (let p = 0; p < searchingElements.length; p++) {
        let pokemon = searchingElements[p];
        searchValue = pokemon.textContent || pokemon.innerText;
        if (searchValue.toUpperCase().indexOf(searchedPokemon) > -1){
            searchingElements[p].parentElement.style = "display:flex";
        }else{
            searchingElements[p].parentElement.style = "display:none";
        }
    }
}



