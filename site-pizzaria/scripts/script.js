let menuContent = document.querySelector('.content');
let menuToggle = menuContent.querySelector('.menu-toggle');
let show = true;

menuToggle.addEventListener('click', () => {
    document.body.style.overflow = show ? 'hidden' : 'initial';
    menuContent.classList.toggle('on', show);
    show = !show;
});

function fechar(){
    document.body.style.overflow = show ? 'hidden' : 'initial';
    menuContent.classList.toggle('on', show);
    show = !show;
}

let lista = document.querySelectorAll('.list-menu li a');

for (const l of lista) {
    l.addEventListener('click',fechar);
}

async function getData() {
    const response = await fetch("https://api.zerosheets.com/v1/c0c");
    const data = await response.json();

    // will return an array of objects with the _lineNumber
    console.log(data)
}

getData();