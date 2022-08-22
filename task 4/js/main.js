const form = document.getElementById('form');
const userNameInput = document.getElementById('username');
const userPassword = document.getElementById('password');
const submit = document.getElementById('submit');
let nameValue;
let password;

form.addEventListener('submit', (e) => {
    e.preventDefault()
    alert(userNameInput.value + '  '+userPassword.value)
})
const accessLog = () => {
    password = userPassword.value
    nameValue = userNameInput.value
    if(nameValue.length > 5 && password.length > 5){
        submit.disabled = false
    } else {
        submit.disabled = true
    }
}
userPassword.addEventListener('keyup', accessLog)
userNameInput.addEventListener('keyup', accessLog)




