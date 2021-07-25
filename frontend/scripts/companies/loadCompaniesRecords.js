function loadCompaniesRecords(data, container, template) {
    data.forEach(company => {
        const {
            id,
            name,
            city,
            country,
            region,
            address,
            email,
            phone
        } = company;
        let newCompanyRecord = document.createElement('tr');
        newCompanyRecord.setAttribute('class', 'company-record');
        newCompanyRecord.innerHTML = template.innerHTML;

        newCompanyRecord.querySelector('.company-name').innerText = name;
        newCompanyRecord.querySelector('.company-address').innerText = address;
        newCompanyRecord.querySelector('.company-email').innerText = email;
        newCompanyRecord.querySelector('.company-phone').innerText = phone;
        newCompanyRecord.querySelector('.company-city').innerText = city;

        let fieldActionsDisplayBtn = newCompanyRecord.querySelector('.field-actions-display')
        let fieldActionsBtns = newCompanyRecord.querySelector('.field-actions-buttons')

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
        let updateBtn = newCompanyRecord.querySelector('.field-edit');
        updateBtn.addEventListener('click', event => {
            modalTitle.innerText = 'Actualizar Compañía';
            updateCompanyBtn.classList.remove('d-none')
            saveNewCompanyBtn.classList.add('d-none')

            inputCompanyName.value = name;
            inputCompanyAddress.value = address;
            inputCompanyEmail.value = email;
            inputCompanyPhone.value = phone;
            inputCompanyCity.value = city;

            event.preventDefault();
        })

        /* ------------------------------- DELETE user ------------------------------- */
        let eraseBtn = newCompanyRecord.querySelector('.field-erase');
        eraseBtn.addEventListener('click', event => {
            let eraseConfirm = confirm('Está seguro de que desea eliminar esta compañía?')
            if (eraseConfirm) {
                apiCall(`${baseApiUrl}/companies?companyName=${name}`, 'DELETE', userToken).then(response => {
                    location.reload();
                })
            }
            event.stopPropagation();
        })

        container.appendChild(newCompanyRecord);
    });
}