function loadRegionsRecords(data, recordsContainer, recordTemplate){
    data.forEach(region => {
        const { id, name } = region;

        let newRegionRecord = document.createElement('li');
        newRegionRecord.setAttribute('class', 'region-record p-2');
        newRegionRecord.innerHTML = recordTemplate.innerHTML;

        newRegionRecord.querySelector('.region-id').innerText = id;
        newRegionRecord.querySelector('.region-name').innerText = name;

        recordsContainer.appendChild(newRegionRecord);
    });
}