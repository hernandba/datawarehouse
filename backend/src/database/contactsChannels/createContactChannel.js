const sequelize = require('../connection');

async function createContactChannel(contact_id, newChannelData){
    try {
        let result = await sequelize.query(
            'INSERT INTO Contacts_Channels VALUES (NULL, :contact_id, :channel_id, :username, :preference_id)',
            {
                replacements: {contact_id: contact_id, ...newChannelData},
                type: sequelize.QueryTypes.INSERT
            }
        )
        //INSERT retorna un arreglo con los id's de los registros creados
        return result;
    } catch (error) {
        console.error('Error createContactChannel: \n', error)
    }
}

module.exports = createContactChannel;