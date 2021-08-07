const sequelize = require('../connection');

async function getAllContacts(search){
    let query = search ? 
    `SELECT con.id, con.name, con.lastname, con.email, con.city_id, ci.name city, coun.id country_id, coun.name country, reg.id region_id, reg.name region, com.id company_id, com.name company, con.role, con.interested, con.address FROM Contacts con JOIN Companies com ON con.company_id = com.id JOIN Cities ci ON con.city_id = ci.id JOIN Countries coun ON ci.country_id = coun.id JOIN Regions reg ON coun.region_id = reg.id WHERE con.name LIKE '%${search}%' OR con.lastname LIKE '%${search}%' OR con.email LIKE '%${search}%' OR ci.name LIKE '%${search}%' OR coun.name LIKE '%${search}%' OR reg.name LIKE '%${search}%' OR com.name LIKE '%${search}%' OR con.role LIKE '%${search}%' OR con.interested LIKE '%${search}%'`
    :
    'SELECT con.id, con.name, con.lastname, con.email, con.city_id, ci.name city, coun.id country_id, coun.name country, reg.id region_id, reg.name region, com.id company_id, com.name company, con.role, con.interested, con.address FROM Contacts con JOIN Companies com ON con.company_id = com.id JOIN Cities ci ON con.city_id = ci.id JOIN Countries coun ON ci.country_id = coun.id JOIN Regions reg ON coun.region_id = reg.id ORDER BY id'

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
        console.error('Error getAllContacts: \n', error)
    }
}

module.exports = getAllContacts;