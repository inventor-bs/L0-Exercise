
/** 
 *  Biến user and password
 */

let username = 'admin';
let password = 'admin';
let newpassword = '';

let btnLogin = document.querySelector('.btn__Login');

let errorUser = document.getElementById('errorUsername');
let errorPassword = document.getElementById('errorPassword');


let textUser = document.getElementById('username');
let textPassword = document.getElementById('password');

const clear = () => {
    errorUser.innerHTML = '';
    errorPassword.innerHTML = '';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

const validate = () => {
    const textUser = document.getElementById('username').value;
    const textPassword = document.getElementById('password').value;
    let state = document.querySelector('#changeState').innerHTML;
    if (state === 'Forgot Password?') {
        if (textUser.trim().length === 0 && textPassword.trim().length === 0) {
            errorUser.innerHTML = `Bạn chưa nhập Username`;
            errorPassword.innerHTML = `Bạn chưa nhập Password`;
            return;
        }
        if (textUser.trim().length === 0) {
            errorUser.innerHTML = `Bạn chưa nhập Username`;
            return;
        }
        if (textPassword.trim().length === 0) {
            errorPassword.innerHTML = `Bạn chưa nhập Password`;
            return;
        }
        if (textUser !== username || textPassword !== password) {
            errorPassword.innerHTML = `Bạn nhập Username hoặc Password sai!`;
            return;
        }
        if (textUser === username || textPassword === password) {
            console.log(document.getElementById('info'));
            document.getElementById('info').innerHTML = 'Đăng nhập thành công';
            console.log(document.getElementById('info'));
            document.getElementById('closeForm').click();
            setTimeout(() => {
                document.getElementById('info').innerHTML = 'Đăng nhập hệ thống';
            }, 5100)
        }
    }
    else {
        if (textUser.trim().length === 0 && textPassword.trim().length === 0) {
            errorUser.innerHTML = `Bạn chưa nhập Old Password`;
            errorPassword.innerHTML = `Bạn chưa nhập New Password`;
            return;
        }
        if (textUser.trim().length === 0) {
            errorUser.innerHTML = `Bạn chưa nhập Old Password`;
            return;
        }
        if (textPassword.trim().length === 0) {
            errorPassword.innerHTML = `Bạn chưa nhập New Password`;
            return;
        }
        if (textUser !== password) {
            errorUser.innerHTML = `Bạn nhập sai Old Password`;
            return;
        }
        if (textUser === password) {
            newpassword = textPassword;
            password = newpassword;
            errorPassword.style.color = 'green';
            errorPassword.innerHTML = `Đổi mật khẩu thành công`;
            setTimeout(() => {
                document.querySelector('#changeState').click();
            }, 1500);
        }
    }

}

btnLogin.addEventListener('click', () => {
    btnLogin.value = `Loading...`;
    console.log(password);
    btnLogin.style.background = '#12be96'
    setTimeout(() => {
        btnLogin.value = `Login`;
        btnLogin.style.background = '#00ce81';
        clear();
    }, 1500);
    validate();
})

document.querySelector('#changeState').addEventListener('click', () => {
    let state = document.querySelector('#changeState').innerHTML;
    if (state === 'Forgot Password?') {
        clear();
        document.querySelector('#changeState').innerHTML = 'Back';
        document.querySelector('.modal-title').innerHTML = 'Forgot Password';
        textUser.placeholder = 'Old Password';
        textPassword.placeholder = 'New Password';
        btnLogin.value = 'Save';
    }
    else {
        document.querySelector('#changeState').innerHTML = 'Forgot Password?';
        clear();
        document.querySelector('#changeState').innerHTML = 'Forgot Password?';
        document.querySelector('.modal-title').innerHTML = 'Member Login';
        textUser.placeholder = 'Username';
        textPassword.placeholder = 'Password';
        btnLogin.value = 'Login';
    }
});



