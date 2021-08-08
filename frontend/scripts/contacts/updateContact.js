function updateContact(modal){
    let contact_id = modal.querySelector('.contactId').innerText
    let reqBodyUpdateContact = {
        name: modal.querySelector('#inputName').value,
        lastname: modal.querySelector('#inputLastname').value,
        role: modal.querySelector('#inputRole').value,
        email: modal.querySelector('#inputEmail').value,
        company_id: modal.querySelector('#inputCompany').value,
        city_id: modal.querySelector('#inputCity').value,
        address: modal.querySelector('#inputAddress').value,
        interested: modal.querySelector('#inputInterest').value
    }

    let updateConfirm = confirm('Desea actualizar los datos para el contacto seleccionado?')
    if(updateConfirm){
        console.log(contact_id, reqBodyUpdateContact)
        apiCall(`${baseApiUrl}/contacts?id=${contact_id}`, 'PUT', userToken, reqBodyUpdateContact).then(response => {
            alert('Contacto Actualizado')
            location.reload();
        }).catch(error => console.error(error))
    }
}