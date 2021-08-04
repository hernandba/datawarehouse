function loadContactsRecords(data, entriesContainer, recordTemplate){
    data.forEach(contact => {
        let { id, name, lastname, email, city, country, region, company, role, interested } = contact;

        let newContactRecord = document.createElement('tr');
        newContactRecord.setAttribute('class', 'contact-record');
        newContactRecord.innerHTML = recordTemplate.innerHTML;

        newContactRecord.querySelector('.contact-check').value = id;
        newContactRecord.querySelector('.contact-fullname').innerText = name+' '+lastname;
        newContactRecord.querySelector('.contact-email').innerText = email;
        newContactRecord.querySelector('.contact-country').innerText = country;
        newContactRecord.querySelector('.contact-region').innerText = region;
        newContactRecord.querySelector('.contact-company').innerText = company;
        newContactRecord.querySelector('.contact-role').innerText = role;

        newContactRecord.querySelector('.contact-interest-number').innerText = interested+'%';
        newContactRecord.querySelector('.contact-interest-ruler').style.width = interested+'%';
        switch (interested) {
            case '25':
                newContactRecord.querySelector('.contact-interest-ruler').classList.add('bg-danger')
                break;
            case '50':
                newContactRecord.querySelector('.contact-interest-ruler').classList.add('bg-warning')
                break;
            case '75':
                newContactRecord.querySelector('.contact-interest-ruler').classList.add('bg-info')
                break;
            case '100':
                newContactRecord.querySelector('.contact-interest-ruler').classList.add('bg-success')
                break;
        
            default:
                break;
        }

        let contactCheck = newContactRecord.querySelector('.contact-check');

        contactCheck.addEventListener('click', event => {
            if(contactCheck.checked == true){
                contactsSelected++;
                contactsToDelete.push(contactCheck.value);
                btnDeleteContactsSelected.classList.remove('d-none')
                contactsSelectedCounter.classList.remove('d-none')
                contactsSelectedCounter.innerText = contactsSelected+' seleccionados';
                // console.log('contactsToDelete: '+contactsToDelete);
                // console.log('contactsSelected: '+contactsSelected);
            }else{
                contactsSelected--;
                contactsToDelete.splice(contactsToDelete.indexOf(contactCheck.value),1)
                contactsSelectedCounter.innerText = contactsSelected+' seleccionados';
                if(contactsSelected == 0){
                    btnDeleteContactsSelected.classList.add('d-none')
                    contactsSelectedCounter.classList.add('d-none')
                }
                // console.log('contactsToDelete: '+contactsToDelete);
                // console.log('contactsSelected: '+contactsSelected);
            }
        })

        /* ------------------------------ ACTION BUTTONS ------------------------------ */
        let fieldActionsDisplayBtn = newContactRecord.querySelector('.field-actions-display')
        let fieldActionsBtns = newContactRecord.querySelector('.field-actions-buttons')
        //Click on 3 points to show
        fieldActionsDisplayBtn.addEventListener('click', event => {
            fieldActionsDisplayBtn.classList.toggle('d-none');
            fieldActionsBtns.classList.toggle('d-none')
            event.stopPropagation();
        })
        //Mouse out to hide
        fieldActionsBtns.addEventListener('mouseout', event => {
            fieldActionsDisplayBtn.classList.toggle('d-none');
            fieldActionsBtns.classList.toggle('d-none')
            event.stopPropagation();
        })

        /* ------------------------------ ERASE BUTTON ------------------------------ */
        let eraseBtn = newContactRecord.querySelector('.field-erase');
        eraseBtn.addEventListener('click', event => {
            let eraseConfirm = confirm('Está seguro de que desea eliminar este contacto?')
            if (eraseConfirm) {
                apiCall(`${baseApiUrl}/contacts?ids=${id}`, 'DELETE', userToken).then(response => {
                    alert('Contacto eliminado');
                    location.reload();
                })
            }
            event.stopPropagation();
        })

        entriesContainer.appendChild(newContactRecord)

    });
}