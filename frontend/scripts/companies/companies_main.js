const sessionCredentials = JSON.parse(sessionStorage.getItem('sessionCredentials'));
let userProfile, userToken;

let companiesRecordsContainer = document.querySelector('#companies-records-container');
let companyRecord = document.querySelector('.company-record');

let modal = document.querySelector('.modal')
let modalTitle = modal.querySelector('.modal-title')

let inputCompanyName = modal.querySelector('#inputCompanyName')
let inputCompanyAddress = modal.querySelector('#inputCompanyAddress')
let inputCompanyEmail = modal.querySelector('#inputCompanyEmail')
let inputCompanyPhone = modal.querySelector('#inputCompanyPhone')
let inputCompanyCity = modal.querySelector('#inputCompanyCity')

let saveNewCompanyBtn = modal.querySelector('#saveNewCompanyBtn')
let updateCompanyBtn = modal.querySelector('#updateCompanyBtn')

let AddCompanyBtn = document.querySelector('#addCompanyBtn')

if (validateCredential()) {
    userProfile = sessionCredentials.profile;
    userToken = sessionCredentials.token;

    //Load cities to input in modal
    apiCall(`${baseApiUrl}/locations/cities`, 'GET', userToken).then(response => {
        loadCitiesToModal(response.data, inputCompanyCity)
    }).catch(error => console.error(error))

    /* ------------------------------ CREATE company ------------------------------ */
    addCompanyBtn.addEventListener('click', event => {
        modalTitle.innerText = 'Nueva Compañia';
        cleanCompanyModal()
        updateCompanyBtn.classList.add('d-none')
        saveNewCompanyBtn.classList.remove('d-none')
    })

    saveNewCompanyBtn.addEventListener('click', event => {
        createNewCompany();
        event.preventDefault();
        event.stopPropagation();
    })

    /* ----------------------------- READ companies ----------------------------- */
    //LOAD companies to table
    apiCall(`${baseApiUrl}/companies`, 'GET', userToken).then(response => {
        loadCompaniesRecords(response.data, companiesRecordsContainer, companyRecord)
    }).catch(error => console.error(error))

    /* ------------------------------- UPDATE company ------------------------------ */
    updateCompanyBtn.addEventListener('click', event => {
        updateCompany();
        event.stopPropagation();
        event.preventDefault();
    })


}