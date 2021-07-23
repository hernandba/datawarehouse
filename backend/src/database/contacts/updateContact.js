const sequelize = require('../connection');

async function updateContact(id, data){
    try {
        let dataToArray = Object.entries(data);//Convierto objeto a arreglo [...[key,value]]
        let filteredData = dataToArray.filter(element => element[1] !== '') //Elimino del arreglo quienes tengan value = ''
        let mappedData = filteredData.map(element => {
            let value = typeof element[1] !== 'number' ? "'"+element[1]+"'" : element[1];
            return element[0] + ' = ' + value //Retorno pares de la forma key = 'value' ó key = value 
        })
        let finalData = mappedData.toString() //Convierto todo lo anterior en un string separado por comas

        let result = await sequelize.query(
            `UPDATE Contacts SET ${finalData} WHERE id = ${id}`,
            {
                type: sequelize.QueryTypes.UPDATE
            }
        )

        return result;
    } catch (error) {
        console.error('Error updateContact: \n', error)
    }
}

module.exports = updateContact;