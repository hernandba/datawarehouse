function createNewContact(modal) {
    if (validateEmptyModalInputs(modal)) {
        //Create new object with new contact parameters
        let reqBodyNewContact = {
            name: modal.querySelector('#inputName').value,
            lastname: modal.querySelector('#inputLastname').value,
            role: modal.querySelector('#inputRole').value,
            email: modal.querySelector('#inputEmail').value,
            company_id: modal.querySelector('#inputCompany').value,
            city_id: modal.querySelector('#inputCity').value,
            address: modal.querySelector('#inputAddress').value,
            interested: modal.querySelector('#inputInterest').value
        }
        console.log(reqBodyNewContact)
        //Gets contact channels created from modal and converts them to array
        let contactChannelsToCreate = Array.from(modal.querySelectorAll('.contact-channel'));
        //Deletes second contact from array, wich is empty because it's a template
        contactChannelsToCreate.splice(1,1);
        //Creates a new array of objects  
        let reqBodyNewContactChannels = contactChannelsToCreate.map(element => {
            return {
                channel_id: element.querySelector('#inputChannel').value,
                username: element.querySelector('#inputUserChannel').value,
                preference_id: element.querySelector('#inputChannelPreference').value
            }
        })
        console.log(reqBodyNewContactChannels)

        //Creates new contact
        apiCall(`${baseApiUrl}/contacts`, 'POST', userToken, reqBodyNewContact).then(response => {
            if (response.status == 'OK') {
                //If new contact created, contact id is saved
                let newContactId = response.data.id;
                console.log(newContactId)

                //Creates new contact channels with contact id and channels from array
                reqBodyNewContactChannels.forEach(newContactChannel => {
                    apiCall(`${baseApiUrl}/contactsChannels?contact_id=${newContactId}`, 'POST', userToken, newContactChannel).then(response => {

                    }).catch(error => console.error(error))
                })
                alert('Contacto Creado')
                location.reload();
            } else {
                alert('Ya hay un usuario registrado con el mismo email')
            }
        }).catch(error => console.error(error))
    }
}