const sessionCredentials = JSON.parse(sessionStorage.getItem('sessionCredentials'));
let userProfile, userToken;
const navUsersLink = document.querySelector('#nav-users');
    //CHECK: Habilitar seccion usuarios si es admin
    //TODO: cargar todos los contactos
    //TODO:Acciones contactos:
    //- Crear contacto:
    //-- Ingresar informacion
    //-- Guardarlo
    //-- Cargar nuevamente todos (que incluira el nuevo)
    //- Desplegar informacion de contacto en modal
    //- Buscar cualquiera, buscar con filtro
    //- 

if(validateCredential()){
    userProfile = sessionCredentials.profile;
    if(userProfile !== 'admin'){
        navUsersLink.classList.add('d-none')
    }
}

