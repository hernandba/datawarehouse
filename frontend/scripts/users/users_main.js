const sessionCredentials = JSON.parse(sessionStorage.getItem('sessionCredentials'));
let userProfile, userToken;

let usersRecordsContainer = document.querySelector('#users-records-container');
let userRecord = document.querySelector('.user-record');

let modal = document.querySelector('.modal')
let modalTitle = modal.querySelector('.modal-title')

let inputUserId = modal.querySelector('#inputUserId')
let inputUserName = modal.querySelector('#inputUserName')
let inputUserLastname = modal.querySelector('#inputUserLastname')
let inputUserEmail = modal.querySelector('#inputUserEmail')
let inputUserProfile = modal.querySelector('#inputUserProfile')
let inputUserPassword = modal.querySelector('#inputUserPassword')
let inputUserPasswordConfirm = modal.querySelector('#inputUserPasswordConfirm')

let closeUserModalBtn = modal.querySelector('#closeUserModalBtn')
let cancelNewuserBtn = modal.querySelector('#cancel-newuser-btn')

let saveNewuserBtn = modal.querySelector('#save-newuser-btn')
let updateUserBtn = modal.querySelector('#update-user-btn')

let addUserBtn = document.querySelector('#add-user-btn')

if(validateCredential()){
    userProfile = sessionCredentials.profile;
    userToken = sessionCredentials.token;

    /* ------------------------------ CREATE users ------------------------------ */
    addUserBtn.addEventListener('click', event => {
        modalTitle.innerText = 'Nuevo usuario';
        cleanUserModal()
        updateUserBtn.classList.add('d-none')
        saveNewuserBtn.classList.remove('d-none')
    })

    saveNewuserBtn.addEventListener('click', event => {
        createNewUser();
        event.preventDefault();
        event.stopPropagation();
    })

    /* ------------------------------- READ users ------------------------------- */
    //LOAD users to table
    apiCall(`${baseApiUrl}/users`, 'GET', userToken).then(response => {
        loadUsersRecords(response.data, usersRecordsContainer, userRecord)
    }).catch(error => console.error(error))

    /* ------------------------------- UPDATE user ------------------------------ */
    updateUserBtn.addEventListener('click', event => {
        updateUser();
        event.stopPropagation();
        event.preventDefault();
    })
    
}