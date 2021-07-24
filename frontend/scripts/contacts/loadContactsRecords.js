function loadContactsRecords(data, entriesContainer, recordTemplate){
    data.forEach(contact => {
        let { id, name, lastname, email, city, country, region, company, role, interested } = contact;

        let newContactRecord = document.createElement('tr');
        newContactRecord.setAttribute('class', 'contact-record');
        newContactRecord.innerHTML = recordTemplate.innerHTML;

        newContactRecord.querySelector('.contact-fullname').innerText = name+' '+lastname;
        newContactRecord.querySelector('.contact-email').innerText = email;
        newContactRecord.querySelector('.contact-country').innerText = country;
        newContactRecord.querySelector('.contact-region').innerText = region;
        newContactRecord.querySelector('.contact-company').innerText = company;
        newContactRecord.querySelector('.contact-role').innerText = role;
        newContactRecord.querySelector('.contact-interest-number').innerText = interested+'%';

        let fieldActionsDisplayBtn = newContactRecord.querySelector('.field-actions-display')
        let fieldActionsBtns = newContactRecord.querySelector('.field-actions-buttons')

        fieldActionsDisplayBtn.addEventListener('click', event => {
            fieldActionsDisplayBtn.classList.toggle('d-none');
            fieldActionsBtns.classList.toggle('d-none')
            event.stopPropagation();
        })

        fieldActionsBtns.addEventListener('mouseout', event => {
            fieldActionsDisplayBtn.classList.toggle('d-none');
            fieldActionsBtns.classList.toggle('d-none')
            event.stopPropagation();
        })

        entriesContainer.appendChild(newContactRecord)

    });
}