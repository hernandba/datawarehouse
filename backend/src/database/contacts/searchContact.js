const sequelize = require('../connection');

async function searchContact(contactData){
    try {
        let result = await sequelize.query(
            'SELECT * FROM Contacts WHERE id = :id OR email = :email',
            {
                replacements: contactData,
                type: sequelize.QueryTypes.SELECT
            }
        )
        //El resultado de SELECT es un arreglo
        //Se retorna el primer elemento
        return result[0];
    } catch (error) {
        console.error('Error searchContact: \n', error)
    }
}

module.exports = searchContact;