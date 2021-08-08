const sessionCredentials = JSON.parse(sessionStorage.getItem('sessionCredentials'));
let userProfile, userToken;

const navUsersLink = document.querySelector('#nav-users');

let contactRecord = document.querySelector('.contact-record');
let contactsRecordsContainer = document.querySelector('#contacts-records-container');

let inputSearch = document.querySelector('#inputSearch');
let btnSearchContact = document.querySelector('#btnSearchContact');

let btnDeleteContactsSelected = document.querySelector('#btnDeleteContactsSelected')
let checkAllContacts = document.querySelector('#checkAllContacts');

let modal = document.querySelector('.modal')
let contactChannelsContainer = modal.querySelector('#contact-channels-container');

let contactsSelected = 0;
let contactsToDelete = [];
let contactsSelectedCounter = document.querySelector('#contactsSelectedCounter');

let btnAddContact = document.querySelector('#btnAddContact')
let btnSaveNewContact = modal.querySelector('#btnSaveNewContact');
let btnUpdateContact = modal.querySelector('#btnUpdateContact');

let tempContactChannelAdd = modal.querySelector('.contact-channel-init')
let tempContactChannelInit = modal.querySelector('.contact-channel-add')

if (validateCredential()) {
    userProfile = sessionCredentials.profile;
    userToken = sessionCredentials.token;

    /* ---------------------------- Link de usuarios ---------------------------- */
    if (userProfile !== 'admin') {
        navUsersLink.classList.add('d-none')
    }

    /* ----------------------------- SEARCH CONTACTS ---------------------------- */
    //ENTER Key
    inputSearch.addEventListener('keyup', event => {
        if (event.keyCode == 13) {
            if (inputSearch.value !== '') {
                contactsRecordsContainer.innerHTML = '';
                apiCall(`${baseApiUrl}/contacts?search=${inputSearch.value}`, 'GET', userToken).then(response => {
                    loadContactsRecords(response.data, contactsRecordsContainer, contactRecord)
                }).catch(error => console.error(error))
            } else {
                contactsRecordsContainer.innerHTML = '';
                apiCall(`${baseApiUrl}/contacts`, 'GET', userToken).then(response => {
                    loadContactsRecords(response.data, contactsRecordsContainer, contactRecord)
                }).catch(error => console.error(error))
            }
            event.preventDefault();
            event.stopPropagation();
        }
    })
    //CLICK ON Button 
    btnSearchContact.addEventListener('click', event => {
        if (inputSearch.value !== '') {
            contactsRecordsContainer.innerHTML = '';
            apiCall(`${baseApiUrl}/contacts?search=${inputSearch.value}`, 'GET', userToken).then(response => {
                loadContactsRecords(response.data, contactsRecordsContainer, contactRecord)
            }).catch(error => console.error(error))
        } else {
            contactsRecordsContainer.innerHTML = '';
            apiCall(`${baseApiUrl}/contacts`, 'GET', userToken).then(response => {
                loadContactsRecords(response.data, contactsRecordsContainer, contactRecord)
            }).catch(error => console.error(error))
        }

        event.preventDefault();
        event.stopPropagation();
    })

    /* ----------------------------- MODAL FUNCTIONs ---------------------------- */
    modalController(modal);

    /* ----------------------------- CREATE contacts ---------------------------- */
    // ADD NEW CONTACT BTN
    btnAddContact.addEventListener('click', event => {
        //Show save new contact btn
        btnSaveNewContact.classList.remove('d-none')
        //Hide update contact btn
        btnUpdateContact.classList.add('d-none')
        //CLEAN INPUTS
        modal.querySelector('#inputName').value = '';
        modal.querySelector('#inputLastname').value = '';
        modal.querySelector('#inputRole').value = '';
        modal.querySelector('#inputEmail').value = '';
        modal.querySelector('#inputAddress').value = '';
        modal.querySelector('#inputCompany').value = '0';
        cleanDataInput(modal, '#inputPais', 'Seleccionar país')
        cleanDataInput(modal, '#inputCity', 'Seleccionar ciudad')
        modal.querySelector('#inputChannel').value = '0';
        modal.querySelector('#inputUserChannel').value = '';
        modal.querySelector('#inputChannelPreference').value = '0';

        modal.querySelector('#contact-channels-container').innerHTML = '';
        modal.querySelector('#contact-channels-container').appendChild(tempContactChannelAdd)
        modal.querySelector('#contact-channels-container').appendChild(tempContactChannelInit)
    })
    // SAVE NEW CONTACT BTN
    btnSaveNewContact.addEventListener('click', event => {
        createNewContact(modal);
        event.stopPropagation();
    })

    /* ----------------------------- UPDATE Contact ----------------------------- */
    //...Previous loaded data
    btnUpdateContact.addEventListener('click', event => {
        updateContact(modal);
        event.stopPropagation();
    })

    /* ----------------------------- DELETE contacts ---------------------------- */
    //CHECK (SELECT-UNSELECT) all contacts
    checkAllContacts.addEventListener('click', event => {
        if (checkAllContacts.checked == true) {
            contactsToDelete = [];
            document.querySelectorAll('.contact-check').forEach(contactCheck => {
                contactCheck.checked = true;
                contactsToDelete.push(contactCheck.value)
                contactsSelected = document.querySelectorAll('.contact-check').length;

                btnDeleteContactsSelected.classList.remove('d-none')
                contactsSelectedCounter.classList.remove('d-none')
                contactsSelectedCounter.innerText = contactsSelected + ' seleccionados';
            })
        } else {
            contactsToDelete = [];
            document.querySelectorAll('.contact-check').forEach(contactCheck => {
                contactCheck.checked = false;
                contactsSelected = 0;
                btnDeleteContactsSelected.classList.add('d-none')
                contactsSelectedCounter.classList.add('d-none')
                contactsSelectedCounter.innerText = '';
            })
        }
    })
    //DELETE CONTACTS SELECTED Button
    btnDeleteContactsSelected.addEventListener('click', event => {
        if (confirm('Esta seguro de que desea eliminar los contactos seleccionado(s)?')) {
            apiCall(`${baseApiUrl}/contacts?ids=${contactsToDelete.toString()}`, 'DELETE', userToken).then(response => {
                alert('Contactos eliminados');
                location.reload();
            }).catch(error => console.error(error))
        }
    })

    /* ------------------------------ READ contacts ----------------------------- */
    //LOAD contacts to table
    apiCall(`${baseApiUrl}/contacts`, 'GET', userToken).then(response => {
        loadContactsRecords(response.data, contactsRecordsContainer, contactRecord, modal)
    }).catch(error => console.error(error))
}