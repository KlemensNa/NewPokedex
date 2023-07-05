async function buildShowcard(i) {
    try{
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
    }catch{
        alert('Pokemon gibt es nicht!');    
    }
    renderFlavorText(i);
}


function searchShowroom(){
    let search = document.getElementById('showroomSearchField').value.toLowerCase();
    buildShowcard(search); 
}


function activateTab(i){
    let clearTabs = document.getElementsByClassName('navbarBtn');
    for (let i = 0; i < clearTabs.length; i++) {
        const element = clearTabs[i];
        element.classList.remove('activatedTab');
        element.classList.add('clearTab')
    }

    let activateTab = document.getElementById(`${i}`);
    activateTab.classList.add('activatedTab');
    activateTab.classList.remove('clearTab');    
}


async function renderFlavorText(id){
    let url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();

    let text = responseAsJson['flavor_text_entries'][1]['flavor_text'].replace('\f', ' ');
    document.getElementById('contentPokecardBottom').innerHTML = /*html*/`
        <div id="flavorText">${text}</div>
    `
    activateTab('aboutBtn');
}


function renderStatContainer(){
    document.getElementById('contentPokecardBottom').innerHTML = /*html*/`
            <div id="stats"></div>
            <div id="chartContainer"><canvas id="myChart"></canvas></div> 
        `
    renderStats();
    activateTab('statsBtn');
}


function renderStats(){
    let Json = JSON.parse(localStorage.getItem('pokemonData'));    
    let stats = Json['stats'];   

    renderStatsList(stats);
}


function renderStatsList(stats){
    let statName = [];
    let statValue = [];
    for (let s = 0; s < stats.length; s++) {
        const element = stats[s];
        statValue.push(element['base_stat']);
        statName.push(element['stat']['name']);    
        
        document.getElementById('stats').innerHTML += /*html*/`
        <div class="statList">
            <div id=statName${s}>${element['stat']['name']}</div>
            <div id=statValue${s}>${element['base_stat']}</div>
        </div>
        `;
    }
    renderStatsChart(statValue, statName);
}


function renderStatsChart(statValue, statName){
    const ctx = document.getElementById('myChart'); 

    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: statName,
        datasets: [{          
          data: statValue,
          borderWidth: 1,
          backgroundColor: 'rgba(0,0,0,0.2)',
        }]
      },
      options: {
        scales: {
          r: {
            beginAtZero: true,
            max: 160,
            ticks:{
                display: false
            }
          },
        },
        plugins: {
            legend: {
              display: false
            },
        },
        elements:{
            point:{
                pointStyle: false
            }
          }
      }
    });
}


function searchForPokemon(){
    let searchPokemon = document.getElementById('searchPokemon').value; 
    let pokenames = document.getElementById('homescreenList');
    let divs = pokenames.getElementsByTagName('div');

    for (let i = 0; i < divs.length; i++) {
        const result = divs[i].textContent;
        const resultID = divs[i-1].textContent;
        if (searchPokemon == result){
            newResult = document.getElementById(`${result}`);
            newResult.scrollIntoView();
            colorSelection(newResult);
            return   
        }     
    }
}


function renderShowcardName(JSON){
    let nameContainer = document.getElementById('showcardTopRightName');
    let name = JSON['name'];
    name = name.charAt(0).toUpperCase() + name.slice(1);
    nameContainer.innerHTML = name;
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
        <div class="type"><b>Type:</b> ${typeOne}</div>
    `
    if (typeTwo != undefined) {
        document.getElementById('showcardTopRightTypes').innerHTML += /*html*/`
        <div class="type" id="typeTwo"><b>Type 2:</b> ${typeTwo}</div>
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
