const sequelize = require('../connection');

async function updateSection(section, newName, oldValue, location){
    try {
        let query;
        switch (section) {
            case 'regions':
                query = `UPDATE Regions SET name = '${newName}' WHERE name = '${oldValue}'`
                break;

            case 'countries':
                query = `UPDATE Countries SET name = '${newName}', region_id = (SELECT id FROM Regions WHERE name = '${location}') WHERE name = '${oldValue}'`
                break;

            case 'cities':
                query = `UPDATE Cities SET name = '${newName}', country_id = (SELECT id FROM Countries WHERE name = '${location}') WHERE name = '${oldValue}'`
                break;
        }
        let result = await sequelize.query(
            query,
            {
                type: sequelize.QueryTypes.UPDATE
            }
        )
        //INSERT UPDATErna un arreglo con los id's de los registros creados
        return result[0];
    } catch (error) {
        console.error('Error updateSection: \n', error)
    }
}

module.exports = updateSection;