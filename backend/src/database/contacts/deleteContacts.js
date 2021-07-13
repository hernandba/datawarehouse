const sequelize = require('../connection');

async function deleteContacts(ids){
    try {
        let result = await sequelize.query(
            `DELETE FROM Contacts WHERE id in (${ids})`,
            {   
                type: sequelize.QueryTypes.DELETE
            }
        )
        //INSERT UPDATErna un arreglo con los id's de los registros creados
        return result;
    } catch (error) {
        console.error('Error deleteContacts: \n', error)
    }
}

module.exports = deleteContacts;