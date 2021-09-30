const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit',(e) =>{
    e.preventDefault();

    checkInputs();
})

//get the value from the input
function checkInputs(){
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const phonevalue = phone.value.trim();
    const passwordvalue = password.value.trim();
    const cpasswordvalue = password.value.trim();

    if (usernamevalue === '') {
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be blanck');
    }
    else if (usernamevalue.length <= 4) {
        setErrorFor(username, 'Enter more than 4 characters');
    }
    else{
        //add success class
        setSuccessFor(username);
    }
    //email varification:
    if (emailvalue === '') {
        setErrorFor(email, 'Email cannot be empty');
    }
    else if(!isEmail(emailvalue)) {
        setErrorFor(email, 'Email is not valid');
    }
     else{
        setSuccessFor(email)
    }

    //phone varification
    if (phonevalue === '') {
        setErrorFor(phone, 'Phone cannot be empty');
    }
    else if (phonevalue.length != 10) {
        setErrorFor(phone, 'Number length should be 10');
    }
    else{
        setSuccessFor(phone);
    }

    //password verification
    if (passwordvalue === '') {
        setErrorFor(password, 'Password cannot be empty');
    }
    else if(passwordvalue.length < 8) {
        setErrorFor(password, 'password should be more than 8 characters');
    }
    else{
        setSuccessFor(password);
    }
    //re-enter password
    if (cpasswordvalue === '') {
        setErrorFor(cpassword, 'Password cannot be empty');
    }
    else if (cpasswordvalue !== passwordvalue) {
        setErrorFor(cpassword, 'Password is not matching');
    }
    else{
        setSuccessFor(cpassword);
    }
    
}

function setErrorFor(input, message) {
    const formcontrol = input.parentElement;//form-control
    const small = formcontrol.querySelector('small');

    //add error message
    small.innerText = message;
    //add error class
    formcontrol.className = 'form-control error';
}
function setSuccessFor(input){
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success'
}

//extra validation of email for spacial charaters:
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}