const sequelize = require('../connection');

async function updateContactChannelById(contact_channel_id, data){
    try {
        let dataToArray = Object.entries(data);//Convierto objeto a arreglo [...[key,value]]
        let filteredData = dataToArray.filter(element => element[1] !== '') //Elimino del arreglo quienes tengan value = ''
        let mappedData = filteredData.map(element => {
            let value = typeof element[1] !== 'number' ? "'"+element[1]+"'" : element[1];
            return element[0] + ' = ' + value
        })
        let finalData = mappedData.toString() //Convierto todo lo anterior en un string separado por comas

        let result = await sequelize.query(
            `UPDATE Contacts_Channels SET ${finalData} WHERE id = '${contact_channel_id}'`,
            {
                type: sequelize.QueryTypes.UPDATE
            }
        )

        return result;
    } catch (error) {
        console.error('Error updateContactChannelById: \n', error)
    }
}

module.exports = updateContactChannelById;