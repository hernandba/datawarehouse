const sessionCredentials = JSON.parse(sessionStorage.getItem('sessionCredentials'));
let userProfile, userToken;

const navUsersLink = document.querySelector('#nav-users');

let contactEntry = document.querySelector('.contact-entry');
let contactsEntriesContainer = document.querySelector('#contacts-entries-container');

if(validateCredential()){
    userProfile = sessionCredentials.profile;
    userToken = sessionCredentials.token;
    
    /* ---------------------------- Link de usuarios ---------------------------- */
    if(userProfile !== 'admin'){
        navUsersLink.classList.add('d-none')
    }

    /* ------------------------------ read contacts ----------------------------- */
    apiCall(`${baseApiUrl}/contacts`, 'GET', userToken).then(response => {
        createContactsEntries(response.data, contactsEntriesContainer, contactEntry)

    }).catch(error => console.error(error))
}

