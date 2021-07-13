const sequelize = require('../connection');

async function getAllContacts(){
    try {
        let result = await sequelize.query(
            'SELECT con.id, con.name, con.lastname, con.email, ci.name city, coun.name country, reg.name region, com.name company, con.role, con.interested FROM Contacts con JOIN Companies com ON con.company_id = com.id JOIN Cities ci ON con.city_id = ci.id JOIN Countries coun ON ci.country_id = coun.id JOIN Regions reg ON coun.region_id = reg.id ORDER BY id',
            {
                type: sequelize.QueryTypes.SELECT
            }
        )
        //El resultado de SELECT es un arreglo
        return result;
    } catch (error) {
        console.error('Error getAllContacts: \n', error)
    }
}

module.exports = getAllContacts;