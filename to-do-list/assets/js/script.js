const formSearch = document.querySelector('.form-search');
const iconSearch = document.querySelector('.icon-search');
const menuIcon = document.querySelector('.menu-icon');
const navbarAside = document.querySelector('aside');
const content = document.querySelector('.content');
menuIcon.addEventListener('click', () => {
   navbarAside.classList.toggle('active-aside');
   content.classList.toggle('active');
})
iconSearch.addEventListener('click', () => {
    formSearch.classList.add('active-search');
})

document.querySelectorAll('.checkbox').forEach(checkbox => {
    checkbox.addEventListener('click', () => {
        const isChecked = checkbox.getAttribute('aria-checked') === 'true';

        checkbox.setAttribute('aria-checked', !isChecked);
    })
})