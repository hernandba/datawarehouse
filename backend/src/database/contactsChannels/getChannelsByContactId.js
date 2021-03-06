const sequelize = require('../connection');

//Credential data: {username: "username", email:"email"}
async function getChannelsByContactId(id){
    try {
        let result = await sequelize.query(
            'SELECT cc.id, c.id channel_id, c.name channel, cc.username, p.id preference_id, p.preference FROM Contacts_Channels cc JOIN Channels c ON cc.channel_id = c.id JOIN Preferences p ON cc.preference_id = p.id WHERE contact_id = :id',
            {
                replacements: { id: id },
                type: sequelize.QueryTypes.SELECT
            }
        )
        //El resultado de SELECT es un arreglo
        //Se retorna el primer elemento
        return result;
    } catch (error) {
        console.error('Error getChannelsByContactId: \n', error)
    }
}

module.exports = getChannelsByContactId;