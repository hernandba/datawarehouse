const sequelize = require('../connection');

async function deleteCompany(name){
    try {
        let result = await sequelize.query(
            `DELETE FROM Companies WHERE name = '${name}'`,
            {
                type: sequelize.QueryTypes.DELETE
            }
        )
        //INSERT UPDATErna un arreglo con los id's de los registros creados
        return result;
    } catch (error) {
        console.error('Error deleteCompany: \n', error)
    }
}

module.exports = deleteCompany;