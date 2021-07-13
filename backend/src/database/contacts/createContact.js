const sequelize = require('../connection');

async function createContact(newContactData){
    try {
        let result = await sequelize.query(
            'INSERT INTO Contacts VALUES (NULL, :name, :lastname, :role, :email, :company_id, :city_id, :address, :interested)',
            {
                replacements: newContactData,
                type: sequelize.QueryTypes.INSERT
            }
        )
        //INSERT retorna un arreglo con los id's de los registros creados
        return result[0];
    } catch (error) {
        console.error('Error createContact: \n', error)
    }
}

module.exports = createContact;