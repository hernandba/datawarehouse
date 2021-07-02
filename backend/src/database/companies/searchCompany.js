const sequelize = require('../connection');

async function searchCompany(companyData){
    try {
        let result = await sequelize.query(
            'SELECT * FROM Companies WHERE id = :id OR name = :name OR email = :email',
            {
                replacements: companyData,
                type: sequelize.QueryTypes.SELECT
            }
        )
        //El resultado de SELECT es un arreglo
        //Se retorna el primer elemento
        return result[0];
    } catch (error) {
        console.error('Error searchCompany: \n', error)
    }
}

module.exports = searchCompany;