const sessionCredentials = JSON.parse(sessionStorage.getItem('sessionCredentials'));
let userProfile, userToken;

const navUsersLink = document.querySelector('#nav-users');

let contactRecord = document.querySelector('.contact-record');
let contactsRecordsContainer = document.querySelector('#contacts-records-container');

let inputSearch = document.querySelector('#inputSearch');
let btnSearchContact = document.querySelector('#btnSearchContact');

let btnDeleteContactsSelected = document.querySelector('#btnDeleteContactsSelected')
let checkAllContacts = document.querySelector('#checkAllContacts');

let contactsSelected = 0;
let contactsToDelete = [];

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

    /* ----------------------------- CREATE contacts ---------------------------- */

    /* ----------------------------- DELETE contacts ---------------------------- */
    //CHECK (SELECT-UNSELECT) all contacts
    checkAllContacts.addEventListener('click', event => {
        if(checkAllContacts.checked == true){
            contactsToDelete = [];
            document.querySelectorAll('.contact-check').forEach(contactCheck => {
                contactCheck.checked = true;
                contactsToDelete.push(contactCheck.value)
                contactsSelected = document.querySelectorAll('.contact-check').length;

                btnDeleteContactsSelected.classList.remove('d-none')

                console.log('contactsToDelete: '+contactsToDelete);
                console.log('contactsSelected: '+contactsSelected);
            })
        }else{
            contactsToDelete = [];
            document.querySelectorAll('.contact-check').forEach(contactCheck => {
                contactCheck.checked = false;
                contactsSelected = 0;
                console.log('contactsToDelete: '+contactsToDelete);
                console.log('contactsSelected: '+contactsSelected);

                btnDeleteContactsSelected.classList.add('d-none')
            })
        }
    })
    //DELETE CONTACTS SELECTED Button
    btnDeleteContactsSelected.addEventListener('click', event => {
        if(confirm('Esta seguro de que desea eliminar los contactos seleccionado(s)?')){
            apiCall(`${baseApiUrl}/contacts?ids=${contactsToDelete.toString()}`, 'DELETE', userToken).then(response => {
                alert('Contactos eliminados');
                location.reload();
            }).catch(error => console.error(error))
        }
    })

    /* ------------------------------ READ contacts ----------------------------- */
    //LOAD contacts to table
    apiCall(`${baseApiUrl}/contacts`, 'GET', userToken).then(response => {
        loadContactsRecords(response.data, contactsRecordsContainer, contactRecord)
    }).catch(error => console.error(error))
}