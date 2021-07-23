const sequelize = require('../connection');

async function deleteUsers(ids){
    try {
        let result = await sequelize.query(
            `DELETE FROM Users WHERE id in (${ids})`,
            {   
                type: sequelize.QueryTypes.DELETE
            }
        )
        //INSERT UPDATErna un arreglo con los id's de los registros creados
        return result;
    } catch (error) {
        console.error('Error deleteUsers: \n', error)
    }
}

module.exports = deleteUsers;