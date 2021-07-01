const sequelize = require('../connection');

async function createUser(newUserData){
    try {
        let result = await sequelize.query(
            'INSERT INTO Users VALUES (NULL, :name, :lastname, :email, :profile_id, :password)',
            {
                replacements: newUserData,
                type: sequelize.QueryTypes.INSERT
            }
        )
        //INSERT retorna un arreglo con los id's de los registros creados
        return result[0];
    } catch (error) {
        console.error('Error createUser: \n', error)
    }
}

module.exports = createUser;