function createContactChannel(modal, editBtnShow, data, user_id) {



    let contactChannelAdd = modal.querySelector('.contact-channel-add')
    let newContactChannel = document.createElement('form');
    newContactChannel.setAttribute('class', 'contact-channel contact-channel-add');
    newContactChannel.innerHTML = contactChannelAdd.innerHTML;

    if (data) {
        const {
            id,
            channel_id,
            preference_id,
            username
        } = data;
        newContactChannel.querySelector('.contactChannelId').innerText = id;
        newContactChannel.querySelector('#inputChannel').value = channel_id;
        newContactChannel.querySelector('#inputUserChannel').value = username;
        newContactChannel.querySelector('#inputChannelPreference').value = preference_id;
    }

    //ERASE CHANNEL Btn
    newContactChannel.querySelector('.erase-channel-btn').addEventListener('click', event => {
        let eraseConfirm = confirm('Seguro de que desea eliminar este canal de contacto?')
        if (eraseConfirm) {
            if (data) {
                //TODO Call api to erase contact channel with user_id and contact_channel_id
            }
            newContactChannel.parentNode.removeChild(newContactChannel);
        }
    })

    //EDIT CHANNEL BTN
    if (!editBtnShow) {
        newContactChannel.querySelector('.edit-channel-btn').classList.add('d-none')
    }

    return newContactChannel;
}