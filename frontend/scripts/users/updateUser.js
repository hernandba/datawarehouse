function updateUser() {
    let userUpdateReqBody;
    let profile_id = inputUserProfile.value == 'basic' ? 2 : 1;

    if (inputUserPassword.value !== '' || inputUserPasswordConfirm.value !== '') {
        if (inputUserPassword.value !== inputUserPasswordConfirm.value) {
            alert('Confirme que el password coincide')
        } else {
            userUpdateReqBody = {
                name: inputUserName.value,
                lastname: inputUserLastname.value,
                email: inputUserEmail.value,
                profile_id: profile_id,
                password: inputUserPasswordConfirm.value
            }

            apiCall(`${baseApiUrl}/users?id=${inputUserId.value}`, 'PUT', userToken, userUpdateReqBody).then(response => {
                if (response.message == "User Updated") {
                    alert('Usuario actualizado')
                    location.reload();
                }
            }).catch(error => console.error(error))
        }
    } else {
        userUpdateReqBody = {
            name: inputUserName.value,
            lastname: inputUserLastname.value,
            email: inputUserEmail.value,
            profile_id: profile_id,
            password: inputUserPasswordConfirm.value
        }

        apiCall(`${baseApiUrl}/users?id=${inputUserId.value}`, 'PUT', userToken, userUpdateReqBody).then(response => {
            if (response.message == "User Updated") {
                alert('Usuario actualizado')
                location.reload();
            }
        }).catch(error => console.error(error))
    }
}