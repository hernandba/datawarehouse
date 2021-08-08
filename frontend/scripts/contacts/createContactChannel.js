function createContactChannel(modal, editBtnShow, data, contact_id) {
    let contactChannelAdd = modal.querySelector('.contact-channel-add')
    let newContactChannel = document.createElement('form');
    newContactChannel.setAttribute('class', 'contact-channel contact-channel-add');
    newContactChannel.innerHTML = contactChannelAdd.innerHTML;

    if (data) {
        const { id, channel_id, preference_id, username } = data;
        newContactChannel.querySelector('.contactChannelId').innerText = id;
        newContactChannel.querySelector('#inputChannel').value = channel_id;
        newContactChannel.querySelector('#inputUserChannel').value = username;
        newContactChannel.querySelector('#inputChannelPreference').value = preference_id;
    }

    //ERASE CHANNEL Btn
    newContactChannel.querySelector('.erase-channel-btn').addEventListener('click', event => {
        let eraseConfirm = confirm('Seguro de que desea eliminar este canal de contacto?')
        if (eraseConfirm) {
            if (data && contact_id) {
                const { id } = data;
                apiCall(`${baseApiUrl}/contactsChannels?contact_channel_id=${id}`, 'DELETE', userToken).then(response => {
                    alert('Canal de contacto eliminado');
                    // location.reload();
                }).catch(error => console.error(error))
            }
            newContactChannel.parentNode.removeChild(newContactChannel);
        }
    })

    //EDIT CHANNEL BTN
    if (!editBtnShow) {
        newContactChannel.querySelector('.edit-channel-btn').classList.add('d-none')
    }else{
        newContactChannel.querySelector('.edit-channel-btn').addEventListener('click', event => {
            let updateConfirm = confirm('Seguro de que desea editar este canal de contacto?')
            if(updateConfirm){
                const { id } = data;
                let reqBodyUpdateContactChannel = {
                    channel_id: newContactChannel.querySelector('#inputChannel').value,
                    username: newContactChannel.querySelector('#inputUserChannel').value,
                    preference_id: newContactChannel.querySelector('#inputChannelPreference').value
                }
                // console.log(id, reqBodyUpdateContactChannel)
                apiCall(`${baseApiUrl}/contactsChannels?contact_channel_id=${id}`, 'PUT', userToken, reqBodyUpdateContactChannel).then(response => {
                    alert('Canal de contacto editado');
                    // location.reload();
                }).catch(error => console.error(error))
            }
        })
    }

    return newContactChannel;
}