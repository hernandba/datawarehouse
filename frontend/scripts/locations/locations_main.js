const sessionCredentials = JSON.parse(sessionStorage.getItem('sessionCredentials'));
let userProfile, userToken;

let allLocationsContainer = document.querySelector('#allLocations')

let regionRecord = document.querySelector('.region-record');
let countryRecord = document.querySelector('.country-record');
let cityRecord = document.querySelector('.city-record');

if(validateCredential()){
    userProfile = sessionCredentials.profile;
    userToken = sessionCredentials.token;

    /* ----------------------------- READ locations ----------------------------- */
    //LOAD Regions
    apiCall(`${baseApiUrl}/locations/regions`, 'GET', userToken).then(response => {
        loadRegionsRecords(response.data, allLocationsContainer,regionRecord)

        
    }).catch(error => console.error(error))
    //LOAD Coutries
    //LOAD Cities

}