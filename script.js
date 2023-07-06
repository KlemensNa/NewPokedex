async function loadPokemon() {
    for (let i = 1; i <= 1010; i++) {
        pokemonLoaded = i;
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        let responseAsJson = await response.json();
        buildCard(responseAsJson);
        activateFirstGen();
        buildLoadingDisplay(i);
        activateGenBtns(i);
    }
}


async function buildCard(JSON) {
    let name = JSON['name'];
    name = name.charAt(0).toUpperCase() + name.slice(1);
    let identnr = JSON['id'];
    let picture = JSON['sprites']['other']['official-artwork']['front_default'];
    let type = JSON['types'][0]['type']['name'];
    let bgColor = pokecardBackgroundColor(type, name);
    
    templatesCard(name, identnr, picture, bgColor);    
    activateFirstGen(identnr, name);    
}


function activateFirstGen(id, name) {
    let pokemon = document.getElementById(`${name}`);
    if (id <= 151) {
        pokemon.classList.add('d-flex');
    }
}


function pokecardBackgroundColor(type){
    return typeColors[type];    
}


function activateChoosenGen(i, j) {
    deletePokemonCardsOver(j);
    deletePokemonCardsUnder(i);
    showChoosenPokemonCards(i, j);
}


function showChoosenPokemonCards(i, j){
    for (i; i <= j; i++) {
        const id = i;
        let idPokemon = document.getElementById(`${id}`);
        if (idPokemon == null) {
            return
        } else {
            let parent = idPokemon.parentElement;
            if (i <= id && id <= j) {
                parent.classList.remove('d-none');
                parent.classList.add('d-flex');
            }
        }

    }
}


function deletePokemonCardsOver(j) {
    let jOver = j + 1;
        for (jOver; jOver < 1011; jOver++) {
        const id = jOver;
        let idPokemon = document.getElementById(`${id}`);
        if (idPokemon == null) {
            return
        } else {
            let parent = idPokemon.parentElement;
            deleteCards(parent);
        }
    }
}

function deletePokemonCardsUnder(i) {

    let idrunter = i - (i - 1);

    for (idrunter; idrunter < i; idrunter++) {
        const idErase = idrunter;
        let idPokemon = document.getElementById(`${idErase}`);
        let parent = idPokemon.parentElement;
        deleteCards(parent);
    }
}

function deleteCards(parent){
    parent.classList.remove('d-flex');
    parent.classList.add('d-none');
}


function buildLoadingDisplay(i) {
    let percent = i / 1010 * 100;
    document.getElementById('loading').innerHTML =/*html*/`
    <div id="loadingBarEmpty" aria-valuemax="100">
        <div id="loadingBar" style="width: ${percent}%">
            <div id="loadingText">loadingPokemon</div>
            <div id="runpikachu"> 
                <img src="img/runPikachu.png" alt="">
            </div>       
        </div>
    </div>    
    `
    hideLoadingScreen(percent)
}


function hideLoadingScreen(percent){
    if (percent === 100) {
        document.getElementById('loading').classList.add('d-none');
    }
}


function searchPokemon() {
    let searchedPokemon = document.getElementById('searchText').value.toUpperCase();
    let searchingArea = document.getElementById("pokemonCards");
    let searchingElements = searchingArea.getElementsByClassName('pokemonName');

    for (let p = 0; p < searchingElements.length; p++) {
        let pokemon = searchingElements[p];
        searchValue = pokemon.textContent || pokemon.innerText;
        if (searchValue.toUpperCase().indexOf(searchedPokemon) > -1) {
            searchingElements[p].parentElement.style.display = "flex";
        } else {
            searchingElements[p].parentElement.style.display = "none";
        }
    }
}









