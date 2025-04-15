let textDubai = document.getElementById('dubaitext');
let burjkalifa = document.getElementById('burjkhalifa');
let stars = document.getElementById('stars');


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    textDubai.style.left = value * -2 + 'px';
    burjkalifa.style.top = value * 1 + 'px';
    stars.style.top = value * 1 + 'px';
})