function createCountry(data, template, modal) {
    const {
        id,
        name,
        region_id
    } = data;

    let newRecord = document.createElement('li');
    newRecord.setAttribute('class', 'country-record p-2');
    newRecord.innerHTML = template.innerHTML;

    newRecord.querySelector('.country-id').innerText = id;
    newRecord.querySelector('.parent-id').innerText = region_id;
    newRecord.querySelector('.country-name').innerText = name;

    /* ------------------------- ADD NEW CITY TO COUNTRY ------------------------- */
    let addNewCityBtn = newRecord.querySelector('.addNewCityBtn')
    addNewCityBtn.addEventListener('click', event => {
        modal.querySelector('.modal-title').innerText = 'Nueva Ciudad' //Change Title
        modal.querySelector('#inputLocationName').value = ''; //Clean Input
        modal.querySelector('#locationName').value = name; //Save Location parent name on modal
        //Show / Hide Buttons
        modal.querySelector('#saveNewCountryBtn').classList.add('d-none')
        modal.querySelector('#saveNewRegionBtn').classList.add('d-none')
        modal.querySelector('#updateCountryBtn').classList.add('d-none')
        modal.querySelector('#updateCityBtn').classList.add('d-none')
        modal.querySelector('#saveNewCityBtn').classList.remove('d-none')

        event.preventDefault();
    })

    /* ----------------------------- UPDATE COUNTRY ----------------------------- */
    let updateBtn = newRecord.querySelector('.field-edit');
    updateBtn.addEventListener('click', event => {
        modal.querySelector('.modal-title').innerText = 'Actualizar Pais' //Change Title
        modal.querySelector('#locationName').value = id; //Save Location parent name on modal
        modal.querySelector('#inputLocationName').value = name; //Clean Input

        modal.querySelector('#saveNewCountryBtn').classList.add('d-none')
        modal.querySelector('#saveNewRegionBtn').classList.add('d-none')
        modal.querySelector('#saveNewCityBtn').classList.add('d-none')
        modal.querySelector('#updateCountryBtn').classList.remove('d-none')

        event.preventDefault();
    })

    /* ----------------------------- DELETE COUNTRY ----------------------------- */
    let eraseBtn = newRecord.querySelector('.field-erase');
    eraseBtn.addEventListener('click', event => {
        console.log(name)
        let eraseConfirm = confirm('Está seguro de que desea eliminar este pais?')
        
        if (eraseConfirm) {
            apiCall(`${baseApiUrl}/locations/countries?name=${name}`, 'DELETE', userToken).then(response => {
                console.log(response)
                location.reload();
            })
        }
        event.stopPropagation();
    })
    
    return newRecord;
}