function updateCompany() {
    //TODO: Name change
    let companyUpdateReqBody = {
        name: inputCompanyName.value,
        address: inputCompanyAddress.value,
        email: inputCompanyEmail.value,
        phone: inputCompanyPhone.value,
        city_id: inputCompanyCity.value
    }

    apiCall(`${baseApiUrl}/companies?companyName=${inputCompanyName.value}`, 'PUT', userToken, companyUpdateReqBody).then(response => {
        if (response.message == "Company Updated") {
            alert('Compañia actualizada')
            location.reload();
        }
    }).catch(error => console.error(error))

}