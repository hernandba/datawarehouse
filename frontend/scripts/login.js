let userInput = document.querySelector('#user-input');
let passInput = document.querySelector('#pass-input');
let btnLogin = document.querySelector('#btn-login');

btnLogin.addEventListener('click', (event) => {
    let reqBody;
    if(userInput.value !== '' && passInput.value !== '' ){
        reqBody = {
            credential: userInput.value,
            password: passInput.value
        }
        // console.log(reqBody);
        apiCall(`${baseApiUrl}/login`, 'POST', reqBody).then(response => {
            // console.log(response)
            if(response.status !== 'OK'){
                alert('Usuario o contraseña incorrectos')
            }else{
                sessionStorage.setItem('sessionCredentials', JSON.stringify(response.data))
                location.href = "./contacts.html"
            }
        }).catch(error => console.error(error))
    }else{
        alert('Porfavor complete los campos')
    }

    event.preventDefault();
    event.stopPropagation();
})