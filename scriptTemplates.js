function loadPokedex(){
    let pokedex = document.getElementById('pokedex');
    pokedex.innerHTML = /*html*/`
        <header>
            <div id="footerLogo">
                <img src="img/headerLogo.png">
            </div>
            <!-- <div id="pokedexImg">
                <img src="img/pokedex.png" alt="">
            </div> -->
            <div id="searchPokemon">
                <input id="searchText" type="text" onkeyup="searchPokemon()" placeholder="Search Pokemon">
            </div>
        </header>
        <div id="loading"></div>
        <div id="genButtonContainer">
            <button onclick="activateChoosenGen(1, 151)" id="btnGenOne" class="genButton" style="background-color: ${typeColors[0]}">Gen1</button>
            <button onclick="activateChoosenGen(152, 251)" id="btnGenTwo" class="genButton d-hidden">Gen2</button>
            <button onclick="activateChoosenGen(252, 386)" id="btnGenThree" class="genButton d-hidden">Gen3</button>
            <button onclick="activateChoosenGen(387, 493)" id="btnGenFour" class="genButton d-hidden">Gen4</button>
            <button onclick="activateChoosenGen(494, 649)" id="btnGenFive" class="genButton d-hidden">Gen5</button>
            <button onclick="activateChoosenGen(650, 721)" id="btnGenSix" class="genButton d-hidden">Gen6</button>
            <button onclick="activateChoosenGen(722, 809)" id="btnGenSeven" class="genButton d-hidden">Gen7</button>
            <button onclick="activateChoosenGen(810, 905)" id="btnGenEight" class="genButton d-hidden">Gen8</button>
            <button onclick="activateChoosenGen(906, 1010)" id="btnGenNine" class="genButton d-hidden">Gen9</button>
            <div id="allButton" class="genButton"></div>
        </div>
        <div id="pokemonCards"></div>
        <div id="showcard" class="d-none"></div>
    `
    loadPokemon();
}


function templatesCard(name, identnr, picture, bgColor){
    let pokemonCards = document.getElementById('pokemonCards');
    pokemonCards.innerHTML +=/*html*/`
    <div id=${name} class="pokemonCard" onclick="buildShowcard(${identnr})" style="background-color: ${bgColor}">
        <div id="${identnr}" class="pokemonId">#${identnr}</div>            
        <div id="picture${name}" class="pokeCardImg"><img src="${picture}"></div>
        <div id="name${name}" class="pokemonName">${name}</div> 
    </div>
    `
}


function renderShowcardTemplate(Json){
    let id = Json['id']
    let showcard = document.getElementById('showcard');
    localStorage.setItem('pokemonData', JSON.stringify(Json));

    showcard.innerHTML = /*html*/ `
            <div id="showroomSearch">
                <input id="showroomSearchField" placeholder="Search Pokemon">
                <button id="showroomSearchBtn" onclick="searchShowroom()">Search</button>
            </div>
            <div id="pokecard${id}" class="pokemonShowroom">                         
                    <div id="pokecardTop">
                        <div id="showcardTopLeft">
                            <div id="showcardTopLeftImg"><img id="showcardImg"></div>
                            <div id="showcardTopLeftId"></div>                            
                        </div>
                        <div id="showcardTopRight">
                            <div id="showcardTopRightName"></div>
                            <div id="showcardTopRightTypes"></div>
                            <div id="showcardTopRightHeight"><b>Height:</b><div id="height"></div></div>
                            <div id="showcardTopRightWeight"><b>Weight:</b><div id="weight"></div></div>
                        </div>                    
                    </div>
                    <div id="pokecardBottom">
                        <div id="navbarPokecardBottom">
                            <button id="aboutBtn" class="navbarBtn activatedTab" onclick="renderFlavorText(${id})">About</button>
                            <button id="statsBtn" class="navbarBtn activatedTab" onclick ="renderStatContainer()">Stats</button>
                        </div>
                        <div id="contentPokecardBottom">                            
                        </div>         
                    </div>
                    <div id="showcardButtonsBottom" class="d-none">
                        <button id="lastPokemonBtnIn" onclick="lastPokemonShowroom(${id})"><img src="img/last.svg" alt=""></button>  
                        <button id="closeShowroomBtnIn" onclick="closeShowroom()"><img src="img/shutdown.svg" alt=""></button>
                        <button id="nextPokemonBtnIn" onclick="nextPokemonShowroom(${id})"><img src="img/next.svg" alt=""></button>                  
                    </div>                           
            </div>
            <div id="blueDot"><div id="innerDot"></div></div>
            <button id="lastPokemonBtn" class="freeButtons" onclick="lastPokemonShowroom(${id})"><img src="img/last.svg" alt=""></button> 
            <button id="nextPokemonBtn" class="freeButtons" onclick="nextPokemonShowroom(${id})"><img src="img/next.svg" alt=""></button> 
            <button id="closeShowroomBtn" class="freeButtons" onclick="closeShowroom()"><img src="img/shutdown.svg" alt=""></button>                     
        `
    changeShowroomButtons()
    showcard.classList.remove('d-none');
    showcard.classList.add('d-flex');
}

