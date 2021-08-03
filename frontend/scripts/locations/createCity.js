function createCity(data, template, modal) {
    const {
        country_id,
        id,
        name
    } = data;

    let newRecord = document.createElement('li');
    newRecord.setAttribute('class', 'city-record p-2');
    newRecord.innerHTML = template.innerHTML;

    newRecord.querySelector('.city-id').innerText = id;
    newRecord.querySelector('.parent-id').innerText = country_id;
    newRecord.querySelector('.city-name').innerText = name;



    /* ----------------------------- UPDATE CITY ----------------------------- */
    let updateBtn = newRecord.querySelector('.field-edit');
    updateBtn.addEventListener('click', event => {
        modal.querySelector('.modal-title').innerText = 'Actualizar Ciudad' //Change Title
        modal.querySelector('#locationName').value = id; //Save Location parent name on modal
        modal.querySelector('#inputLocationName').value = name; //Clean Input

        modal.querySelector('#saveNewCountryBtn').classList.add('d-none')
        modal.querySelector('#saveNewRegionBtn').classList.add('d-none')
        modal.querySelector('#saveNewCityBtn').classList.add('d-none')
        modal.querySelector('#updateCountryBtn').classList.add('d-none')
        modal.querySelector('#updateCityBtn').classList.remove('d-none')

        event.preventDefault();
    })

    /* ----------------------------- DELETE CITY ----------------------------- */
    let eraseBtn = newRecord.querySelector('.field-erase');
    eraseBtn.addEventListener('click', event => {
        console.log(name)
        let eraseConfirm = confirm('Está seguro de que desea eliminar esta ciudad?')

        if (eraseConfirm) {
            apiCall(`${baseApiUrl}/locations/cities?name=${name}`, 'DELETE', userToken).then(response => {
                console.log(response)
                location.reload();
            })
        }
        event.stopPropagation();
    })

    return newRecord;
}