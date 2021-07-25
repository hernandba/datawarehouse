function createNewCompany() {
    let newCompanyReqBody;
    if (inputCompanyName.value !== '' && inputCompanyAddress.value !== '' && inputCompanyEmail.value !== '' && inputCompanyPhone.value !== '' && inputCompanyCity.value !== '') {
        newCompanyReqBody = {
            name: inputCompanyName.value,
            address: inputCompanyAddress.value,
            email: inputCompanyEmail.value,
            phone: inputCompanyPhone.value,
            city: inputCompanyCity.value
        }

        apiCall(`${baseApiUrl}/companies`, 'POST', userToken, newCompanyReqBody).then(response => {
            if (response.message == "New Company Created") {
                alert('Nueva Compañia Creada')
                location.reload();
            }
            if (response.message == "Company already exists") {
                alert('La compañia ya existe')
            }
        }).catch(error => console.error(error))

    } else {
        alert('Porfavor complete los campos')
    }
}