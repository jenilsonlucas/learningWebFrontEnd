const wrapper = document.querySelector('.wrapper'); 
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');    

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});


loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

