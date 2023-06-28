function loadPokedex(){
    let pokedex = document.getElementById('pokedex');
    pokedex.innerHTML = /*html*/`
        <h1>Pokedex</h1>
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
    loadPokemon(1, 100);
}

