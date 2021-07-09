const sequelize = require('../connection');

async function deleteSection(section, name){
    try {
        let result = await sequelize.query(
            `DELETE FROM ${section} WHERE name = '${name}'`,
            {
                type: sequelize.QueryTypes.DELETE
            }
        )
        //INSERT UPDATErna un arreglo con los id's de los registros creados
        return result;
    } catch (error) {
        console.error('Error deleteSection: \n', error)
    }
}

module.exports = deleteSection;