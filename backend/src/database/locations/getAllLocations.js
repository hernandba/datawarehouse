const sequelize = require('../connection');

async function getAllLocations(){
    try {
        let result = await sequelize.query(
            'SELECT cit.id, cit.name city, cou.name country, reg.name region FROM Cities cit JOIN Countries cou ON cit.country_id = cou.id JOIN Regions reg ON cou.region_id = reg.id',
            {
                type: sequelize.QueryTypes.SELECT
            }
        )
        //El resultado de SELECT es un arreglo
        return result;
    } catch (error) {
        console.error('Error getAllLocations: \n', error)
    }
}

module.exports = getAllLocations;