async function loadPokemon(j, k){
    let loadedAmount = j+k;
    for (let i = j; i < loadedAmount; i++) {
        
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        let responseAsJson = await response.json();
        buildCard(responseAsJson);
    }

    createloadFiftyMoreBtn(loadedAmount);
    createloadHundredBtn(loadedAmount);
    createloadTwoHundredBtn(loadedAmount);
}

function buildCard(JSON){
    let name = JSON['name'];
    let id = JSON['id'];
    let picture = JSON['sprites']['front_default'];

    let pokemonCards = document.getElementById('pokemonCards');
    pokemonCards.innerHTML +=/*html*/`
    <div id=${name} class="pokemonCard">
        <div id="name${name}" class="pokemonName">${name}</div>
        <div id="id${name}">#${id}</div>
        <div id="picture${name}"><img src="${picture}"></div>
    </div>
    `    
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



