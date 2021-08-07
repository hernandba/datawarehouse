function loadContactsRecords(data, entriesContainer, recordTemplate, modal){
    data.forEach(contact => {
        let { id, name, lastname, email, city_id, city, country_id, country, region_id, region, company_id, company, role, interested, address } = contact;
        
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
        //DISPLAY of buttons
        let fieldActionsDisplayBtn = newContactRecord.querySelector('.field-actions-display')
        let fieldActionsBtns = newContactRecord.querySelector('.field-actions-buttons')
        //SHOW: Click on 3 points
        fieldActionsDisplayBtn.addEventListener('click', event => {
            fieldActionsDisplayBtn.classList.toggle('d-none');
            fieldActionsBtns.classList.toggle('d-none')
            event.stopPropagation();
        })
        //HIDE: Mouse out
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

        /* ------------------------------- EDIT BUTTON ------------------------------ */
        let editBtn = newContactRecord.querySelector('.field-edit');
        editBtn.addEventListener('click', event => {
            //LOAD ACTUAL CONTACT DATA TO MODAL
            //Load basic info
            modal.querySelector('#inputName').value = name;
            modal.querySelector('#inputLastname').value = lastname;
            modal.querySelector('#inputRole').value = role;
            modal.querySelector('#inputEmail').value = email;
            modal.querySelector('#inputCompany').value = company_id;

            //Load location info
            //1.Load region
            modal.querySelector('#inputRegion').value = region_id;
            //2.Load country
            apiCall(`${baseApiUrl}/locations/countries?region_id=${region_id}`, 'GET', userToken).then(response => {
                loadDataToInput(response.data, modal.querySelector('#inputPais'))
                modal.querySelector('#inputPais').value = country_id;
                //3.Load city
                apiCall(`${baseApiUrl}/locations/cities?country_id=${country_id}`, 'GET', userToken).then(response => {
                    loadDataToInput(response.data, modal.querySelector('#inputCity'))
                    modal.querySelector('#inputCity').value = city_id;
                }).catch(error => console.error(error))
            }).catch(error => console.error(error))

            //Load interest
            modal.querySelector('#inputInterest').value = interested;
            modal.querySelector('#inputInterestRange').value = interested;
            
            //Load address
            modal.querySelector('#inputAddress').value = address;

            //LOAD ACTUAL CONTACT CHANNELS
            let tempContactChannel = modal.querySelector('.contact-channel-add')
            modal.querySelector('#contact-channels-container').innerHTML = '';
            modal.querySelector('#contact-channels-container').appendChild(tempContactChannel)

            apiCall(`${baseApiUrl}/contactsChannels?contact_id=${id}`, 'GET', userToken).then(response => {
                response.data.channels.forEach(actualContactChannel => {
                    console.log(actualContactChannel)
                    let contactChannel = createContactChannel(modal, true, actualContactChannel);
                    // contactChannel.querySelector('.contactChannelId').innerText = actualContactChannel.id;
                    // contactChannel.querySelector('#inputChannel').value = actualContactChannel.channel_id;
                    // contactChannel.querySelector('#inputUserChannel').value = actualContactChannel.username;
                    // contactChannel.querySelector('#inputChannelPreference').value = actualContactChannel.preference_id;

                    modal.querySelector('#contact-channels-container').appendChild(contactChannel);
                });
            }).catch(error => console.error(error))
        })

        entriesContainer.appendChild(newContactRecord)

    });
}