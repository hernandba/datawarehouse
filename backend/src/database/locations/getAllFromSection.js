const sequelize = require('../connection');

async function getAllFromSection(section){
    try {
        let result = await sequelize.query(
            `SELECT * FROM ${section}`,
            {   
                type: sequelize.QueryTypes.SELECT
            }
        )
        //El resultado de SELECT es un arreglo
        return result;
    } catch (error) {
        console.error('Error getAllFromSection: \n', error)
    }
}

module.exports = getAllFromSection;