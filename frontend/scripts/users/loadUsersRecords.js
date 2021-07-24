function loadUsersRecords(data, recordsContainer, recordTemplate){
    data.forEach(user => {
        let { id, name, lastname, email, profile} = user;
        let actualId;

        let newUserRecord = document.createElement('tr');
        newUserRecord.setAttribute('class', 'user-record');
        newUserRecord.innerHTML = recordTemplate.innerHTML;

        newUserRecord.querySelector('.user-fullname').innerText = name+' '+lastname;
        newUserRecord.querySelector('.user-email').innerText = email;
        newUserRecord.querySelector('.user-profile').innerText = profile;

        let fieldActionsDisplayBtn = newUserRecord.querySelector('.field-actions-display')
        let fieldActionsBtns = newUserRecord.querySelector('.field-actions-buttons')

        fieldActionsDisplayBtn.addEventListener('click', event => {
            fieldActionsDisplayBtn.classList.toggle('d-none');
            fieldActionsBtns.classList.toggle('d-none')
            event.stopPropagation();
        })

        fieldActionsBtns.addEventListener('mouseout', event => {
            fieldActionsDisplayBtn.classList.toggle('d-none');
            fieldActionsBtns.classList.toggle('d-none')
            event.stopPropagation();
        })

        /* ------------------------------- UPDATE user ------------------------------ */
        let updateBtn = newUserRecord.querySelector('.field-edit');
        updateBtn.addEventListener('click', event => {
            modalTitle.innerText = 'Actualizar usuario';
            updateUserBtn.classList.remove('d-none')
            saveNewuserBtn.classList.add('d-none')

            inputUserId.value = id;
            inputUserName.value = name;
            inputUserLastname.value = lastname;
            inputUserEmail.value = email;
            inputUserProfile.value = profile;

            event.preventDefault();
        })

        /* ------------------------------- DELETE user ------------------------------- */
        let eraseBtn = newUserRecord.querySelector('.field-erase');
        eraseBtn.addEventListener('click', event => {
            console.log(id)
            let eraseConfirm = confirm('Está seguro de que desea eliminar este usuario?')
            if(eraseConfirm){
                apiCall(`${baseApiUrl}/users?ids=${id}`, 'DELETE', userToken).then(response => {
                    location.reload();
                })
            }
            event.stopPropagation();
        })

        recordsContainer.appendChild(newUserRecord)
    });
}