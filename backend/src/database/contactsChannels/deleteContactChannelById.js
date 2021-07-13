const sequelize = require('../connection');

async function deleteContactChannelById(contact_channel_id){
    try {
        let result = await sequelize.query(
            `DELETE FROM Contacts_Channels WHERE id = '${contact_channel_id}'`,
            {
                type: sequelize.QueryTypes.DELETE
            }
        )
        //INSERT UPDATErna un arreglo con los id's de los registros creados
        return result;
    } catch (error) {
        console.error('Error deleteContactChannelById: \n', error)
    }
}

module.exports = deleteContactChannelById;