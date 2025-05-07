//elementos do formulário de pesquisa
const formSearch = document.querySelector('.form-search');
const iconSearch = document.querySelector('.icon-search');

//elementos de menu lateral
const menuIcon = document.querySelector('.menu-icon');
const navbarAside = document.querySelector('aside');
const content = document.querySelector('.content');
const asideBtn = document.querySelector('.aside-btn-task');
const caretDropdown = document.querySelector('.caret');
const menuDropdown = document.querySelector('.dropdown .menu');
const selectDropdow = document.querySelector('.dropdown .select');
const optionsDropdown = document.querySelectorAll('.dropdown .menu li');

//elementos do formulário de criação de tarefas
const formCreate = document.querySelector('.form-create-task');
const inputBox = document.querySelector('.form-create-task .input-box');
const inputTask = document.querySelector('.form-create-task .input-box input');
const textAreaBox = document.querySelector('.form-create-task .textarea-box div');
const textAreaTask = document.querySelector('.form-create-task .textarea-box div textarea');
const selectBox = document.querySelector('.form-create-task .select-box select')
const iconClose = document.querySelector('.icon-close');
const btnSubmitTask = document.querySelector('.form-create-task .form-create .btn-task .btn');
const leavingFormTask = document.querySelector('.leaving-container');
const btnLeavingKeep = document.querySelector('.btn-leaving .keep');
const btnLeavingLeave = document.querySelector('.btn-leaving .leave');

//elementos do formulário de criação de cartegory
const formCreateCategory = document.querySelector('.form-create-category')
const asideBtnCategory = document.querySelector('.aside-btn-category');
const inputCategory = document.querySelector('.form-create-category input');
const inputBoxCategory = document.querySelector('.form-create-category .input-box');    
const btnCancelCategory = document.querySelector('.form-create-category .btn .cancel');
const btnSubmitCategory = document.querySelector('.form-create-category .btn .submit');
const messageCategory = document.querySelector('.message-category');
//colocando a visibilidade do formulário de tarefas
asideBtn.addEventListener('click', () => {
    formCreate.classList.add('active-form');
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

inputTask.addEventListener('input', ()=> {
    if(inputTask.value.length > 0)
        btnSubmitTask.classList.add('active');
    else
        btnSubmitTask.classList.remove('active');
});

//tirando a visibidade do formulário de criação de tarefas
iconClose.addEventListener('click', () => {
    if(inputTask.value.length > 0)
    leavingFormTask.classList.add('active');
    else 
    formCreate.classList.remove('active-form');
});

btnLeavingKeep.addEventListener('click', () => {
    leavingFormTask.classList.remove('active');
});

btnLeavingLeave.addEventListener('click', () => {
    leavingFormTask.classList.remove('active');
    inputTask.value = '';
    textAreaTask.value = '';
    formCreate.classList.remove('active-form');
})

selectDropdow.addEventListener('click', () => {
    caretDropdown.classList.toggle('rotate');
    menuDropdown.classList.toggle('active');
})

optionsDropdown.forEach( option => {
    option.addEventListener('click', () => {
        option.classList.toggle('check');
    });
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
    inputCategory.value = '';
    messageCategory.classList.remove('active');
    formCreateCategory.classList.remove('active');
    btnSubmitCategory.classList.remove('active');
});

inputCategory.addEventListener('focus', () => {
    inputBoxCategory.classList.add('active');
});

inputCategory.addEventListener('blur', () => {  
    inputBoxCategory.classList.remove('active');
});

inputCategory.addEventListener('input', () => {

    if(inputCategory.value.length > 0){
        messageCategory.classList.remove('active');
        btnSubmitCategory.classList.add('active');
    }else {
        messageCategory.classList.add('active');
        btnSubmitCategory.classList.remove('active');      
    }  
});


