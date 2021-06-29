const sequelize = require('../connection');

//Credential data: {username: "username", email:"email"}
async function searchUser(credentialData){
    try {
        let result = await sequelize.query(
            'SELECT u.id, u.name, u.lastname, u.email, p.profile, u.password FROM Users u JOIN Profiles p ON u.profile_id = p.id WHERE u.email = :email OR u.id = :id',
            {
                replacements: credentialData,
                type: sequelize.QueryTypes.SELECT
            }
        )
        //El resultado de SELECT es un arreglo
        //Se retorna el primer elemento
        return result[0];
    } catch (error) {
        console.error('Error searchUser: \n', error)
    }
}

module.exports = searchUser;