function loadCitiesToModal(data, container){
    data.forEach(city => {
        let { id, name, country_id } = city;

        let newCitiyOption = document.createElement('option')
        newCitiyOption.innerText = name;

        container.appendChild(newCitiyOption)

    });
}