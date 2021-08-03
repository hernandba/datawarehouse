const sessionCredentials = JSON.parse(sessionStorage.getItem('sessionCredentials'));
let userProfile, userToken;

let modal = document.querySelector('.modal')
let addNewRegionBtn = modal.querySelector('#addNewRegionBtn')
let SaveNewRegionBtn = modal.querySelector('#saveNewRegionBtn')

let allLocationsContainer = document.querySelector('#allLocations')
let regionRecord = document.querySelector('.region-record');
let countryRecord = document.querySelector('.country-record');
let cityRecord = document.querySelector('.city-record');

if (validateCredential()) {
    userProfile = sessionCredentials.profile;
    userToken = sessionCredentials.token;

    /* ------------------------------- ADD REGION ------------------------------- */
    /* ---------------------------- Add Region Button --------------------------- */
    addNewRegionBtn.addEventListener('click', event => {
        modal.querySelector('.modal-title').innerText = 'Nueva Region'
        modal.querySelector('#saveNewRegionBtn').classList.remove('d-none')
        modal.querySelector('#saveNewCountryBtn').classList.add('d-none')
        modal.querySelector('#saveNewCityBtn').classList.add('d-none')
    })
    /* --------------------------- Save Region Button --------------------------- */
    saveNewRegionBtn.addEventListener('click', event => {
        let newRegionName = document.querySelector('#inputLocationName').value;
        if (newRegionName) {
            let newRegionBodyReq = {
                name: newRegionName
            }
            apiCall(`${baseApiUrl}/locations/regions`, 'POST', userToken, newRegionBodyReq).then(response => {
                if (response.status === 'OK') {
                    alert('Nueva region creada con exito')
                    location.reload();
                } else {
                    alert('La region ya existe')
                }
            }).catch(error => console.error(error))
        } else {
            alert('Porfavor introduzca un nombre')
        }
        event.stopPropagation();
    })

    /* ------------------------------- ADD COUNTRY ------------------------------ */
    /* --------------------------- Add Country Button --------------------------- */
    //Está para cada country record
    /* --------------------------- Save Country Button -------------------------- */
    let saveNewCountryBtn = modal.querySelector('#saveNewCountryBtn')
    saveNewCountryBtn.addEventListener('click', event => {
        let newRegionName = modal.querySelector('#inputLocationName').value;
        let name = modal.querySelector('#locationName').value;

        if (newRegionName) {
            let newRegionBodyReq = {
                name: newRegionName,
                location: name
            }

            apiCall(`${baseApiUrl}/locations/countries`, 'POST', userToken, newRegionBodyReq).then(response => {
                if (response.status === 'OK') {
                    alert('Nuevo pais creado con exito')
                    location.reload();
                } else {
                    alert('El pais ya existe')
                }
            }).catch(error => console.error(error))
        } else {
            alert('Porfavor introduzca un nombre')
        }

        event.preventDefault();
        event.stopPropagation();
    })
    /* -------------------------- Update Country Button ------------------------- */
    let updateCountryBtn = modal.querySelector('#updateCountryBtn')
    updateCountryBtn.addEventListener('click', event => {
        let newName = modal.querySelector('#inputLocationName').value;
        let id = modal.querySelector('#locationName').value;

        apiCall(`${baseApiUrl}/locations/countries?id=${id}`, 'PUT', userToken, {newName: newName}).then(response => {
            if (response.status === 'OK') {
                alert('Pais actualizado')
                location.reload();
            } else {
                alert('El pais no existe')
            }
        }).catch(error => console.error(error))

        event.preventDefault();
        event.stopPropagation();
    })

    /* -------------------------------- ADD CITY -------------------------------- */
    let saveNewCityBtn = modal.querySelector('#saveNewCityBtn')
    saveNewCityBtn.addEventListener('click', event => {
        let newRegionName = modal.querySelector('#inputLocationName').value;
        let name = modal.querySelector('#locationName').value;

        if (newRegionName !== '') {
            let newRegionBodyReq = {
                name: newRegionName,
                location: name
            }

            apiCall(`${baseApiUrl}/locations/cities`, 'POST', userToken, newRegionBodyReq).then(response => {
                if (response.status === 'OK') {
                    alert('Nueva ciudad creada con exito')
                    location.reload();
                } else {
                    alert('La ciudad ya existe')
                }
            }).catch(error => console.error(error))
        } else {
            alert('Porfavor introduzca un nombre')
        }

        event.preventDefault();
        event.stopPropagation();
    })
    /* -------------------------- Update City Button ------------------------- */
    let updateCityBtn = modal.querySelector('#updateCityBtn')
    updateCityBtn.addEventListener('click', event => {
        console.log('click')
        let newName = modal.querySelector('#inputLocationName').value;
        let id = modal.querySelector('#locationName').value;

        apiCall(`${baseApiUrl}/locations/cities?id=${id}`, 'PUT', userToken, {newName: newName}).then(response => {
            if (response.status === 'OK') {
                alert('Ciudad actualizada')
                location.reload();
            } else {
                alert('La ciudad no existe')
            }
        }).catch(error => console.error(error))

        event.preventDefault();
        event.stopPropagation();
    })

    /* ----------------------------- READ locations ----------------------------- */
    apiCall(`${baseApiUrl}/locations/regions`, 'GET', userToken).then(regionsResponse => {
        apiCall(`${baseApiUrl}/locations/countries`, 'GET', userToken).then(countriesResponse => {
            apiCall(`${baseApiUrl}/locations/cities`, 'GET', userToken).then(citiesResponse => {

                regionsResponse.data.forEach(regionData => {
                    //Creo una nueva region para cada region de data, y la agrego como hija al container
                    allLocationsContainer.appendChild(createRegion(regionData, regionRecord, modal))
                })

                let allRegionsEntries = document.querySelectorAll('.region-record');
                countriesResponse.data.forEach(countryData => {
                    for (const regionEntry of allRegionsEntries) {
                        if (countryData.region_id == regionEntry.querySelector('.region-id').innerText) {
                            regionEntry.querySelector('.nested').appendChild(createCountry(countryData, countryRecord, modal))
                        }
                    }
                })

                let allCountriesEntries = document.querySelectorAll('.country-record');
                citiesResponse.data.forEach(cityData => {
                    for(const countryEntry of allCountriesEntries){
                        if(cityData.country_id == countryEntry.querySelector('.country-id').innerText){
                            countryEntry.querySelector('.nested').appendChild(createCity(cityData, cityRecord, modal))
                        }
                    }
                })
    
                locationsTree(document.getElementsByClassName("caret"));

            }).catch(error => console.error(error))
        }).catch(error => console.error(error))
    }).catch(error => console.error(error))
}