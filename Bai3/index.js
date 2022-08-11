
/** 
 *  Biến const
 */

const username = 'admin';
const password = 'admin';

/**
 * Gọi đến những phần tử trong DOM
 * 
 * 
 */

let buttonOpenForm = document.querySelector('.button_Login button');
let closeIcon = document.querySelector('.form_Login__icon i');
let loginForm = document.querySelector('.wrapper');
let loading = document.querySelector('.form_Login__loading');
let buttonLogin = document.querySelector('.form_Login__button');


let textUser = document.getElementById('username');
let textPassword = document.getElementById('password');

let toogleLogin = () => {
    loading.classList.toggle('hide');
    buttonLogin.classList.toggle('hide');
}


let toogleForm = () => {
    loginForm.classList.toggle('hide');
}

buttonOpenForm.addEventListener('click', toogleForm);
closeIcon.addEventListener('click', toogleForm);
buttonLogin.addEventListener('click', toogleLogin);
loading.addEventListener('click', toogleLogin);




if (username !== textUser && password !== textPassword) {

}