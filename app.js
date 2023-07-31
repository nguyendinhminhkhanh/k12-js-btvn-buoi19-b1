var input = document.querySelectorAll('input')[0];
var input1 = document.querySelectorAll('input')[1];

var  logIn = document.querySelectorAll('button')[0];
var email = document.querySelectorAll('.email')[0];
var password = document.querySelectorAll('.password')[0];
var minPassword = document.querySelectorAll('.minPassword')[0];
logIn.addEventListener('click',()=>{
    var count = input1.value.length;
    if(input.value == ''){
        input.classList.add('border');
        email.classList.remove('none');
    }
    else if(input.value != ''){
        input.classList.remove('border');
        email.classList.add('none');

    }
    if(input1.value == ''){
        input1.classList.add('border')
        password.classList.remove('none');
    }
    else if(input1.value != ''){
        input1.classList.remove('border');
        password.classList.add('none');
        if(count < 8){
            minPassword.classList.remove('none');
            console.log(input1.value.length);
        }
        else{
            minPassword.classList.add('none');
            alert('Đăng nhập thành công!');
        }
    }
})