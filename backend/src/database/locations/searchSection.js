const sequelize = require('../connection');

async function searchSection(section, name){
    try {
        let result = await sequelize.query(
            `SELECT * FROM ${section} WHERE name = '${name}'`,
            {
                type: sequelize.QueryTypes.SELECT
            }
        )
        //INSERT retorna un arreglo con los id's de los registros creados
        return result[0];
    } catch (error) {
        console.error('Error searchSection: \n', error)
    }
}

module.exports = searchSection;