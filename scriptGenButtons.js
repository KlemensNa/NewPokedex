function addAllBtn(){
    let i = pokemonLoaded;
    document.getElementById('allButton').innerHTML = /*html*/`
        <button onclick="activateChoosenGen(1, ${i})" id="btnGenAll" class="genButton ">All</button>
    `;
    setTimeout(addAllBtn,1000);
}

function activateGenBtns(i){
    if(i === 251){
        document.getElementById('btnGenTwo').classList.remove('d-hidden');
        document.getElementById('btnGenTwo').classList.add('d-flex');
    }
    if(i === 386){
        document.getElementById('btnGenThree').classList.remove('d-hidden');
        document.getElementById('btnGenThree').classList.add('d-flex');   
    }
    if(i === 493){
        document.getElementById('btnGenFour').classList.remove('d-hidden');
        document.getElementById('btnGenFour').classList.add('d-flex');
    }
    if(i === 649){
        document.getElementById('btnGenFive').classList.remove('d-hidden');
        document.getElementById('btnGenFive').classList.add('d-flex');
    }
    if(i === 721){
        document.getElementById('btnGenSix').classList.remove('d-hidden');
        document.getElementById('btnGenSix').classList.add('d-flex');
    }
    if(i === 809){
        document.getElementById('btnGenSeven').classList.remove('d-hidden');
        document.getElementById('btnGenSeven').classList.add('d-flex');
    }
    if(i === 905){
        document.getElementById('btnGenEight').classList.remove('d-hidden');
        document.getElementById('btnGenEight').classList.add('d-flex');
    }
    if(i === 1010){
        document.getElementById('btnGenNine').classList.remove('d-hidden');
        document.getElementById('btnGenNine').classList.add('d-flex');
    }
}