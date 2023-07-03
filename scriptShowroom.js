async function buildShowcard(i) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();

    renderShowcardTemplate(responseAsJson);
    renderShowcardName(responseAsJson);
    renderShowcardId(responseAsJson);
    renderShowcardImg(responseAsJson);
    renderShowcardTypes(responseAsJson);  
    renderShowcardHeight(responseAsJson);
    renderShowcardWeight(responseAsJson);  
}


function renderShowcardTemplate(JSON){
    let id = JSON['id']
    let showcard = document.getElementById('showcard');

    showcard.innerHTML = /*html*/ `
            <div id="pokecard${id}" class="pokemonShowroom">
                         
                    <div id="pokecardTop">
                        <div id="showcardTopLeft">
                            <div id="showcardTopLeftImg"><img id="showcardImg"></div>
                            <div id="showcardTopLeftId"></div>                            
                        </div>
                        <div id="showcardTopRight">
                            <div id="showcardTopRightName"></div>
                            <div id="showcardTopRightTypes"></div>
                            <div id="showcardTopRightHeight">Height:<div id="height"></div></div>
                            <div id="showcardTopRightWeight">Weight<div id="weight"></div></div>
                        </div>                    
                    </div>
                    <div id="pokecardBottom">
                        <h2 onclick="lastPokemonShowroom(${id})">last</h2> <!--muss verschwinden, wenn id = 1 -->
                        <h2 onclick="nextPokemonShowroom(${id})">next</h2> <!--muss verschwinden, wenn id = 1010 -->
                        <h2 onclick="closeShowroom()">X</h2>
                    </div>
                              
                
            </div>
        `
    showcard.classList.remove('d-none');
    showcard.classList.add('d-flex');
}


function renderShowcardName(JSON){
    let name = document.getElementById('showcardTopRightName');
    name.innerHTML = JSON['name'];
}


function renderShowcardId(JSON) {
    let index = document.getElementById('showcardTopLeftId');
    if (JSON['id'] < 10) {
        index.innerHTML = `# 00${JSON['id']}`;
    } else if (JSON['id'] < 100) {
        index.innerHTML = `# 0${JSON['id']}`;
    } else {
        index.innerHTML = `# ${JSON['id']}`;
    }
}

function renderShowcardImg(JSON){
    let picture = document.getElementById('showcardImg');
    picture.src = JSON['sprites']['other']['official-artwork']['front_default'];
}

function renderShowcardTypes(JSON){
    let typeOne = JSON['types'][0]['type']['name'];
    let typeTwo;
    try{
         typeTwo = JSON['types'][1]['type']['name'];
    } catch{
    }  

    addTypes(typeOne, typeTwo);
    addColor(typeOne);
}


function addTypes(typeOne, typeTwo) {
    document.getElementById('showcardTopRightTypes').innerHTML = /*html*/`
        ${typeOne}
    `
    if (typeTwo != undefined) {
        document.getElementById('showcardTopRightTypes').innerHTML += /*html*/`
        ${typeTwo}
    `
    } else {
        return
    }
}


function addColor(type){
    let bgColor = pokecardBackgroundColor(type);
    document.getElementById('pokecardTop').style.backgroundColor = bgColor;
}


function renderShowcardHeight(JSON){
    let height = document.getElementById('height');

    let amountHeight = JSON['height'] /10;
    amountHeight = amountHeight + " m";
    height.innerHTML = amountHeight;
}


function renderShowcardWeight(JSON){
    let weight = document.getElementById('weight');

    let amountWeight = JSON['weight']/10;
    amountWeight = amountWeight + " kg";
    weight.innerHTML = amountWeight;
}


function lastPokemonShowroom(id) {
    let previousPokemon = id - 1;
    buildShowcard(previousPokemon);
}


function nextPokemonShowroom(id) {
    let nextPokemon = id + 1;
    buildShowcard(nextPokemon);
}


function closeShowroom() {
    document.getElementById('showcard').classList.remove('d-flex');
    document.getElementById('showcard').classList.add('d-none');
}




/**Altes  */ 


function renderInfoHeader(responseAsJson) {
    renderName(responseAsJson);
    renderIndex(responseAsJson);
    renderImg(responseAsJson);
    renderTyp(responseAsJson);
    renderHeight(responseAsJson);
    renderWeight(responseAsJson);
}


function renderImg(i) {
    
}


function renderTyp(i) {
    let typ = document.getElementById('typ');
    typ.innerHTML = i['types'][0]['type']['name'];
}


function renderHeight(i) {
    let height = document.getElementById('height');
    let convertHeight = (i['height'] / 10);
    height.innerHTML = /*html*/`
    <div>Height</div>
    <div>${convertHeight} m</div>
    ` ;
}


function renderWeight(i) {
    let weight = document.getElementById('weight');
    let convertWeight = (i['weight'] / 10);
    weight.innerHTML = /*html*/`
    <div>Weight</div>
    <div>${convertWeight} kg</div>
    ` ;
}


function renderEntryText(i) {
    let pokedexEntryText = document.getElementById('pokedexEntryText');
    // Text Pokedex
    let pokedexText = i['flavor_text_entries'][2]['flavor_text'].replace('\f', ' ');
    pokedexText = pokedexText.replace('é','e');

    pokedexEntryText.innerHTML = pokedexText;
}