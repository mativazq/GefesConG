let adquirirBtn = document.getElementById('adquirirBtn');

adquirirBtn.addEventListener('click', function () {
    window.location.href = '../Pages/contacto.html';
});

let adquirirBtn2 = document.getElementById('adquirirBtn2');

adquirirBtn2.addEventListener('click', function () {
    window.location.href = '../Pages/contacto.html';
});

let adquirirBtn3 = document.getElementById('adquirirBtn3');

adquirirBtn3.addEventListener('click', function () {
    window.location.href = '../Pages/contacto.html';
});

let adquirirBtn4 = document.getElementById('adquirirBtn4');

adquirirBtn4.addEventListener('click', function () {
    window.location.href = '../Pages/contacto.html';
});

let adquirirBtn5 = document.getElementById('adquirirBtn5');

adquirirBtn5.addEventListener('click', function () {
    window.location.href = '../Pages/contacto.html';
});

let adquirirBtn6 = document.getElementById('adquirirBtn6');

adquirirBtn6.addEventListener('click', function () {
    window.location.href = '../Pages/contacto.html';
});

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}