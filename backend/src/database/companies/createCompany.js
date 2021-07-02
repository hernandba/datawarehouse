const sequelize = require('../connection');

async function createCompany(newCompanyData){
    try {
        let result = await sequelize.query(
            'INSERT INTO Companies VALUES (NULL, :name, :address, :email, :phone, (SELECT id FROM Cities WHERE name = :city))',
            {
                replacements: newCompanyData,
                type: sequelize.QueryTypes.INSERT
            }
        )
        //INSERT retorna un arreglo con los id's de los registros creados
        return result[0];
    } catch (error) {
        console.error('Error createCompany: \n', error)
    }
}

module.exports = createCompany;