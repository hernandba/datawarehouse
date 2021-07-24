function createNewUser() {
    let newUserReqBody;
    if (inputUserName.value !== '' && inputUserLastname.value !== '' && inputUserEmail.value !== '' && inputUserProfile.value !== '' && inputUserPassword.value !== '' && inputUserPasswordConfirm.value !== '') {

        if (inputUserPassword.value !== inputUserPasswordConfirm.value) {
            alert('Confirme que el password coincide')
        } else {
            newUserReqBody = {
                name: inputUserName.value,
                lastname: inputUserLastname.value,
                email: inputUserEmail.value,
                profile: inputUserProfile.value,
                password: inputUserPasswordConfirm.value
            }

            apiCall(`${baseApiUrl}/users`, 'POST', userToken, newUserReqBody).then(response => {
                if (response.message == "New User Created") {
                    alert('Nuevo usuario creado')
                    location.reload();
                }
                if (response.message == "User already exists") {
                    alert('El usuario ya existe')
                }
                //TODO: Cargar nuevamente todos los usuarios
            }).catch(error => console.error(error))
        }

    } else {
        alert('Porfavor complete los campos')
    }
}