const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const firstNameError = document.getElementById('first-name-error');
const lastNameError = document.getElementById('last-name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

form.addEventListener('submit', (e)=> {

    var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(firstName.value === '' || firstName.value == null){
        e.preventDefault();
        firstNameError.innerText = 'First Name Cannot Be Empty';
        firstName.classList.add("error");
    } else{
        firstNameError.innerText = '';
        firstName.classList.remove("error");
    }

    if(lastName.value === '' || lastName.value == null){
        e.preventDefault();
        lastNameError.innerText = 'Last Name cannot be empty';
        lastName.classList.add("error");
    } else{
        lastNameError.innerText = '';
        lastName.classList.remove("error");
    }

    if(email.value === '' || email.value == null){
        e.preventDefault();
        emailError.innerText = 'Please Enter An Email';
        email.classList.add("error");
    } else if(!email.value.match(email_check)){
        e.preventDefault();
        emailError.innerText = 'Looks like this is not an email';
        email.classList.add("error");
    } else{
        emailError.innerText = '';
        email.classList.remove("error");
    }

    if(password.value === '' || password.value == null){
        e.preventDefault();
        passwordError.innerText = 'Password cannot Be empty';
        password.classList.add("error");
    } else if(password.value.length <= 5){
        e.preventDefault();
        passwordError.innerText = 'Password Must Be More Than 6 Characters';
        password.classList.add("error");
    } else{
        passwordError.innerText = '';
        password.classList.remove("error");
    }
})
