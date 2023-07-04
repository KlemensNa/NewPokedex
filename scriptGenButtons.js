function addAllBtn(){
    let i = pokemonLoaded;
    document.getElementById('allButton').innerHTML = /*html*/`
        <button onclick="activateChoosenGen(1, ${i})" id="btnGenAll" class="genButton ">All</button>
    `;
    setTimeout(addAllBtn,1000);
}

function activateGenBtns(i){
    if(i === 251){
        hideAndRemove('btnGenTwo');
    }
    if(i === 386){
        hideAndRemove('btnGenThree');   
    }
    if(i === 493){
        hideAndRemove('btnGenFour');
    }
    if(i === 649){
        hideAndRemove('btnGenFive');
    }
    if(i === 721){
        hideAndRemove('btnGenSix');
    }
    if(i === 809){
        hideAndRemove('btnGenSeven');
    }
    if(i === 905){
        hideAndRemove('btnGenEight');
    }
    if(i === 1010){
        hideAndRemove('btnGenNine');
    }
}

function hideAndRemove(i){
    document.getElementById(`${i}`).classList.remove('d-hidden');
    document.getElementById(`${i}`).classList.add('d-flex');
}