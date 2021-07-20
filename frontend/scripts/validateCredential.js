function validateCredential(){
    if(!sessionStorage.getItem('sessionCredentials')){
        document.querySelector('.spacer').classList.add('d-none')
        alert('Porfavor inicie sesión')
        return false;
    }else{
        return true;
    }
}