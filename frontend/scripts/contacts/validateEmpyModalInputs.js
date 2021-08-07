function validateEmptyModalInputs(modal) {
    if (modal.querySelector('#inputName').value != '' &&
        modal.querySelector('#inputLastname').value != '' &&
        modal.querySelector('#inputRole').value != '' &&
        modal.querySelector('#inputEmail').value != '' &&
        modal.querySelector('#inputAddress').value != '' &&
        modal.querySelector('#inputCompany').value != '0' &&
        modal.querySelector('#inputRegion').value != '0' &&
        modal.querySelector('#inputPais').value != '0' &&
        modal.querySelector('#inputCity').value != '0') {

        let contactChannelsToCreate = Array.from(modal.querySelectorAll('.contact-channel'));
        contactChannelsToCreate.splice(1,1);
        console.log(contactChannelsToCreate);
        let counter = 0;
        let flag = true;
        let found = false;
        while (flag) {
            if (contactChannelsToCreate[counter].querySelector('#inputChannel').value !== '' &&
                contactChannelsToCreate[counter].querySelector('#inputUserChannel').value !== '0' &&
                contactChannelsToCreate[counter].querySelector('#inputChannelPreference').value !== '0') {
                counter++;
                if(counter == contactChannelsToCreate.length){
                    flag = false;
                }
            } else {
                alert(`Complete los campos para el canal ${counter+1}`)
                flag = false;
                found = true;
            }
        }

        return !found ? true : false;

    } else {
        alert('Porfavor complete todos los campos de informacion del contacto')
        return false;
    }
}