function changeShowroomButtons() {
    let freeButtons = document.getElementsByClassName('freeButtons');
    let fixedButtons = document.getElementById('showcardButtonsBottom');
    console.log(fixedButtons);

    if (window.innerWidth <= 768) {
        for (let i = 0; i < freeButtons.length; i++) {
            const element = freeButtons[i];
            element.classList.add('d-none');
        }
        if (fixedButtons) {
            fixedButtons.classList.remove('d-none');
            fixedButtons.classList.add('d-flex');
        }
    } else {
        for (let i = 0; i < freeButtons.length; i++) {
            const element = freeButtons[i];
            element.classList.remove('d-none');
        }
        if (fixedButtons) {
            fixedButtons.classList.add('d-none');
            fixedButtons.classList.remove('d-flex');
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    changeShowroomButtons();
    window.addEventListener('resize', changeShowroomButtons);
});