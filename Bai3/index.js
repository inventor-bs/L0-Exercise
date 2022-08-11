
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
let textErrorUser = document.querySelector('.form_Login__input__errorUsername');
let textErrorPassword = document.querySelector('.form_Login__input__errorPassword');




let toogleLogin = () => {
    loading.classList.toggle('hide');
    buttonLogin.classList.toggle('hide');
    setTimeout(() => {
        buttonLogin.classList.toggle('hide');
        loading.classList.toggle('hide');
    }, 1500)
}


let toogleForm = () => {
    loginForm.classList.toggle('hide');
}

buttonOpenForm.addEventListener('click', toogleForm);
closeIcon.addEventListener('click', toogleForm);

buttonLogin.addEventListener('click', () => {
    toogleLogin();
    let textUser = document.getElementById('username').value;
    let textPassword = document.getElementById('password').value;
    textErrorUser.innerHTML = '';
    textErrorPassword.innerHTML = '';
    console.log({ textUser, textPassword });
    if (textUser === '' && textPassword === '') {
        textErrorUser.innerHTML = 'Bạn chưa nhập Username';
        textErrorPassword.innerHTML = 'Bạn chưa nhập Password';
        return;
    }
    if (textUser === '') {
        textErrorUser.innerHTML = 'Bạn chưa nhập Username';
        return;
    }
    if (textPassword === '') {
        textErrorPassword.innerHTML = 'Bạn chưa nhập Password';
        return;
    }
    if (username !== textUser && password !== textPassword) {
        textErrorPassword.innerHTML = 'Tài khoản hoặc mật khẩu không đúng';
        return;
    }
    if (username === textUser && password === textPassword) {
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        buttonOpenForm.innerHTML = 'Đăng nhập thành công';
        toogleForm();
        toogleLogin();
    }
});

// loading.addEventListener('click', () => {
//     toogleLogin();
//     textErrorUser.innerHTML = '';
//     textErrorPassword.innerHTML = '';
// });




