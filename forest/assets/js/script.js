const slides = document.querySelectorAll('.slide');
const preBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const numberOfSlide = slides.length;
let slideNumber = 0;

nextBtn.addEventListener('click', () => {

    slides.forEach((slide) => {
        slide.classList.remove('active');
    })

    slideNumber++;

    if(slideNumber > numberOfSlide - 1){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add('active')
});


preBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })

    slideNumber--;

    if(slideNumber < 0){
        slideNumber = numberOfSlide - 1;
    }

    slides[slideNumber].classList.add('active');
})