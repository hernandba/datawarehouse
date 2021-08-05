const sequelize = require('../connection');

async function getAllFromSection(section, parent_id){
    // let query = Object.keys(parent_id).length === 0 ? `SELECT * FROM ${section}` : `SELECT * FROM ${section} WHERE ${Object.keys(parent_id)[0]} = ${Object.values(parent_id)[0]}`
    if(Object.keys(parent_id).length === 0){
        query = `SELECT * FROM ${section}`;
    }else{
        query = `SELECT * FROM ${section} WHERE ${Object.keys(parent_id)[0]} = ${Object.values(parent_id)[0]}`;
    }
    try {
        let result = await sequelize.query(
            query,
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