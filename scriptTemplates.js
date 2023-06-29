function loadPokedex(){
    let pokedex = document.getElementById('pokedex');
    pokedex.innerHTML = /*html*/`
        <h1>Pokedex</h1>
        <div id="loading"></div>
        <div id="genButtonContainer">
            <button onclick="activateChoosenGen(1, 151)" class="genButton">Gen1</button>
            <button onclick="activateChoosenGen(152, 251)" class="genButton">Gen2</button>
            <button onclick="activateChoosenGen(252, 386)" class="genButton">Gen3</button>
            <button onclick="activateChoosenGen(387, 493)" class="genButton">Gen4</button>
            <button onclick="activateChoosenGen(494, 649)" class="genButton">Gen5</button>
            <button onclick="activateChoosenGen(650, 721)" class="genButton">Gen6</button>
            <button onclick="activateChoosenGen(722, 809)" class="genButton">Gen7</button>
            <button onclick="activateChoosenGen(810, 905)" class="genButton">Gen8</button>
            <button onclick="activateChoosenGen(906, 1010)" class="genButton">Gen9</button>
            <button onclick="activateChoosenGen(1, 1010)" class="genButton">All</button>
        </div>
        <div id="searchPokemon">
            <input id="searchText" type="text" onkeyup="searchPokemon()" placeholder="Search Pokemon">
        </div>
        <div id="pokemonCards"></div>
        <div id="loadMoreBtn">
            <div id="loadFiftyMore"></div>
            <div id="loadHundredMore"></div>
            <div id="loadTwoHundredMore"></div>
        </div>
    `
    loadPokemon();
}

