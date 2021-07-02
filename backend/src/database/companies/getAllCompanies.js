const sequelize = require('../connection');

async function getAllCompanies(){
    try {
        let result = await sequelize.query(
            'SELECT cp.id, cp.name, ct.name city, co.name country, r.name region, cp.address, cp.email, cp.phone FROM Companies cp JOIN Cities ct ON cp.city_id = ct.id JOIN Countries co ON ct.country_id = co.id JOIN Regions r ON co.region_id = r.id ORDER BY cp.id',
            {
                type: sequelize.QueryTypes.SELECT
            }
        )
        //El resultado de SELECT es un arreglo
        return result;
    } catch (error) {
        console.error('Error getAllCompanies: \n', error)
    }
}

module.exports = getAllCompanies;