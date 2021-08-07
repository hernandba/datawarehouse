function modalController(modal) {

    //LOAD COMPANIES TO INPUT
    apiCall(`${baseApiUrl}/companies`, 'GET', userToken).then(response => {
        loadDataToInput(response.data, modal.querySelector('#inputCompany'))
    }).catch(error => console.error(error))

    //LOAD REGIONS TO INPUT
    apiCall(`${baseApiUrl}/locations/regions`, 'GET', userToken).then(response => {
        loadDataToInput(response.data, modal.querySelector('#inputRegion'))
    }).catch(error => console.error(error))

    //LOAD COUNTRIES TO INPUT
    //1. Listens to option selected in regions
    modal.querySelector('#inputRegion').addEventListener('mouseup', event => {
        //* if the option selected is different from the holder ('Seleccionar región)
        if (modal.querySelector('#inputRegion').value !== '0') {
            let idSelected = modal.querySelector('#inputRegion').value;
            //2. Cleans preloaded countries from inputPais and Creates new option with 'Seleccionar Pais' as holder
            cleanDataInput(modal, '#inputPais', 'Seleccionar país')
            //3. Loads countries to inputPais according to region selected
            apiCall(`${baseApiUrl}/locations/countries?region_id=${idSelected}`, 'GET', userToken).then(response => {
                loadDataToInput(response.data, modal.querySelector('#inputPais'))
            }).catch(error => console.error(error))
        }else{
            cleanDataInput(modal, '#inputPais', 'Seleccionar país')
        }
    })

    //LOAD CITIES TO INPUT
    //1. Listens to option selected in countries
    modal.querySelector('#inputPais').addEventListener('mouseup', event => {
        //* if the option selected is different from the holder ('Seleccionar pais')
        if (modal.querySelector('#inputPais').value !== '0') {
            let idSelected = modal.querySelector('#inputPais').value;
            //2. Cleans preloaded cities from inputCity and Creates new option with 'Seleccionar ciudad' as holder
            cleanDataInput(modal, '#inputCity', 'Seleccionar ciudad')
            //3. Loads cities to inputCity according to country selected
            apiCall(`${baseApiUrl}/locations/cities?country_id=${idSelected}`, 'GET', userToken).then(response => {
                loadDataToInput(response.data, modal.querySelector('#inputCity'))
            }).catch(error => console.error(error))
        }else{
            cleanDataInput(modal, '#inputCity', 'Seleccionar ciudad')
        }
    })

    //INTEREST % Range and Input equality functions
    modal.querySelector('#inputInterestRange').addEventListener('mouseup', event => {
        modal.querySelector('#inputInterest').value = modal.querySelector('#inputInterestRange').value
    })
    modal.querySelector('#inputInterest').addEventListener('mouseup', event => {
        modal.querySelector('#inputInterestRange').value = modal.querySelector('#inputInterest').value
    })

    //ADD CHANNEL Btn
    let btnAddChannel = modal.querySelector('#btnAddChannel')
    btnAddChannel.addEventListener('click', event => {
        contactChannelsContainer.appendChild(createContactChannel(modal, false))
    })
}

function loadDataToInput(data, container) {
    data.forEach(element => {
        const {id,name} = element;
        let newOption = document.createElement('option')
        newOption.innerText = name;
        newOption.setAttribute('value', id)

        container.appendChild(newOption)
    })
}

function cleanDataInput(modal, input, textHolder){
    modal.querySelector(input).innerHTML = '';
    let optionHolder = document.createElement('option')
    optionHolder.setAttribute('value', '0')
    optionHolder.innerText = textHolder;
    modal.querySelector(input).appendChild(optionHolder)
}