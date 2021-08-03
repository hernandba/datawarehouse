function createRegion(data, template, modal) {
    const { id, name } = data;

    let newRecord = document.createElement('li');
    newRecord.setAttribute('class', 'region-record p-2');
    newRecord.innerHTML = template.innerHTML;

    newRecord.querySelector('.region-id').innerText = id;
    newRecord.querySelector('.region-name').innerText = name;

    /* ------------------------ ADD NEW COUNTRY TO REGION ----------------------- */
    let addNewCountryBtn = newRecord.querySelector('.addNewCountryBtn')
    addNewCountryBtn.addEventListener('click', event => {
        modal.querySelector('.modal-title').innerText = 'Nuevo Pais'//Change Title
        modal.querySelector('#inputLocationName').value = '';//Clean Input
        modal.querySelector('#locationName').value = name;//Save Location parent name on modal
        //Show / Hide Buttons
        modal.querySelector('#saveNewCountryBtn').classList.remove('d-none')
        modal.querySelector('#saveNewRegionBtn').classList.add('d-none')
        modal.querySelector('#saveNewCityBtn').classList.add('d-none')
        event.preventDefault();
    })

    return newRecord;
}