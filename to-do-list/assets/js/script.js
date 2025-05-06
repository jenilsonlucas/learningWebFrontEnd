//elementos do formulário de pesquisa
const formSearch = document.querySelector('.form-search');
const iconSearch = document.querySelector('.icon-search');

//elementos de menu lateral
const menuIcon = document.querySelector('.menu-icon');
const navbarAside = document.querySelector('aside');
const content = document.querySelector('.content');
const asideBtn = document.querySelector('.aside-btn-task');

//elementos do formulário de criação de tarefas
const formCreate = document.querySelector('.form-create-task');
const inputBox = document.querySelector('.form-create-task .input-box');
const inputTask = document.querySelector('.form-create-task .input-box input');
const textAreaBox = document.querySelector('.form-create-task .textarea-box div');
const textAreaTask = document.querySelector('.form-create-task .textarea-box div textarea');
const selectBox = document.querySelector('.form-create-task .select-box select')
const iconClose = document.querySelector('.icon-close');

//elementos do formulário de criação de cartegory
const formCreateCategory = document.querySelector('.form-create-category')
const asideBtnCategory = document.querySelector('.aside-btn-category');
const inputCategory = document.querySelector('.form-create-category input');
const btnCancelCategory = document.querySelector('.form-create-category .btn .cancel');
const btnSubmitCategory = document.querySelector('.form-create-category .btn .submit');

//colocando a visibilidade do formulário de tarefas
asideBtn.addEventListener('click', () => {
    formCreate.classList.add('active-form');
});

//tirando a visibidade do formulário de criação de tarefas
iconClose.addEventListener('click', () => {
    inputTask.value = '';
    textAreaTask.value = '';
    formCreate.classList.remove('active-form');
});

//colocando efeito nos elementos do formulário de criação de tarefa
inputTask.addEventListener('focus', () => {
    inputBox.classList.add('active');
});

inputTask.addEventListener('blur', () => {
    inputBox.classList.remove('active');
});

textAreaTask.addEventListener('focus', () => {
    textAreaBox.classList.add('active');
});

textAreaTask.addEventListener('blur', () => {
    textAreaBox.classList.remove('active')
});

selectBox.addEventListener('focus', () => {
    selectBox.classList.add('active');
});

selectBox.addEventListener('blur', () => {
    selectBox.classList.remove('active');
});


/*
 * quando icon do menu lateral é clicado:
 * Alterna a visibilidade do menu lateral com a class active-aside
 * alterna o estado do conteudo principal com a classe active    
*/
menuIcon.addEventListener('click', () => {
   navbarAside.classList.toggle('active-aside');
   content.classList.toggle('active');
});

/*
 * Quando o icon de pesquisa é clicado:
 * Altera a visibilidade do formulário de pesquisa
*/
iconSearch.addEventListener('click', () => {
    formSearch.classList.add('active-search');
});

asideBtnCategory.addEventListener('click', () => {
    formCreateCategory.classList.add('active');
});

btnCancelCategory.addEventListener('click', () => {
    formCreateCategory.classList.remove('active');
});

