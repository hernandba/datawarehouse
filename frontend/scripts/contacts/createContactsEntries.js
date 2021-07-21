function createContactsEntries(data, entriesContainer, entryTemplate){
    data.forEach(contact => {
        let { id, name, lastname, email, city, country, region, company, role, interested } = contact;

        let newContactEntry = document.createElement('tr');
        newContactEntry.setAttribute('class', 'contact-entry');
        newContactEntry.innerHTML = entryTemplate.innerHTML;

        newContactEntry.querySelector('.contact-fullname').innerText = name+' '+lastname;
        newContactEntry.querySelector('.contact-email').innerText = email;
        newContactEntry.querySelector('.contact-country').innerText = country;
        newContactEntry.querySelector('.contact-region').innerText = region;
        newContactEntry.querySelector('.contact-company').innerText = company;
        newContactEntry.querySelector('.contact-role').innerText = role;
        newContactEntry.querySelector('.contact-interest-number').innerText = interested+'%';

        let fieldActionsDisplayBtn = newContactEntry.querySelector('.field-actions-display')
        let fieldActionsBtns = newContactEntry.querySelector('.field-actions-buttons')

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

        entriesContainer.appendChild(newContactEntry)

    });
}