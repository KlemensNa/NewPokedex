function loadPokedex(){
    let pokedex = document.getElementById('pokedex');
    pokedex.innerHTML = /*html*/`
        <h1>Pokedex</h1>
        <div id="loading"></div>
        <div id="genButtonContainer">
            <button onclick="activateChoosenGen(1, 151)" id="btnGenOne" class="genButton">Gen1</button>
            <button onclick="activateChoosenGen(152, 251)" id="btnGenTwo" class="genButton d-hidden">Gen2</button>
            <button onclick="activateChoosenGen(252, 386)" id="btnGenThree" class="genButton d-hidden">Gen3</button>
            <button onclick="activateChoosenGen(387, 493)" id="btnGenFour" class="genButton d-hidden">Gen4</button>
            <button onclick="activateChoosenGen(494, 649)" id="btnGenFive" class="genButton d-hidden">Gen5</button>
            <button onclick="activateChoosenGen(650, 721)" id="btnGenSix" class="genButton d-hidden">Gen6</button>
            <button onclick="activateChoosenGen(722, 809)" id="btnGenSeven" class="genButton d-hidden">Gen7</button>
            <button onclick="activateChoosenGen(810, 905)" id="btnGenEight" class="genButton d-hidden">Gen8</button>
            <button onclick="activateChoosenGen(906, 1010)" id="btnGenNine" class="genButton d-hidden">Gen9</button>
            <button onclick="activateChoosenGen(1, 1010)" id="btnAll" class="genButton d-hidden">All</button>
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

