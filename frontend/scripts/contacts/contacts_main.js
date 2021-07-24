const sessionCredentials = JSON.parse(sessionStorage.getItem('sessionCredentials'));
let userProfile, userToken;

const navUsersLink = document.querySelector('#nav-users');

let contactRecord = document.querySelector('.contact-record');
let contactsRecordsContainer = document.querySelector('#contacts-records-container');

if(validateCredential()){
    userProfile = sessionCredentials.profile;
    userToken = sessionCredentials.token;
    
    /* ---------------------------- Link de usuarios ---------------------------- */
    if(userProfile !== 'admin'){
        navUsersLink.classList.add('d-none')
    }

    /* ----------------------------- CREATE contacts ---------------------------- */


    /* ------------------------------ READ contacts ----------------------------- */
    //LOAD contacts to table
    apiCall(`${baseApiUrl}/contacts`, 'GET', userToken).then(response => {
        loadContactsRecords(response.data, contactsRecordsContainer, contactRecord)

    }).catch(error => console.error(error))
}

