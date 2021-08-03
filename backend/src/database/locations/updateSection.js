const sequelize = require('../connection');

async function updateSection(section, id, newName){
    try {
        let query;
        switch (section) {
            case 'regions':
                query = `UPDATE Regions SET name = '${newName}' WHERE id = '${id}'`
                // query = `UPDATE Regions SET name = '${newName}' WHERE name = '${name}'`
                break;

            case 'countries':
                query = `UPDATE Countries SET name = '${newName}' WHERE id = '${id}'`
                // query = `UPDATE Countries SET name = '${newName}', region_id = (SELECT id FROM Regions WHERE name = '${location}') WHERE name = '${name}'`
                break;

            case 'cities':
                query = `UPDATE Cities SET name = '${newName}' WHERE id = '${id}'`
                // query = `UPDATE Cities SET name = '${newName}', country_id = (SELECT id FROM Countries WHERE name = '${location}') WHERE name = '${name}'`
                break;
        }
        let result = await sequelize.query(
            query,
            {
                type: sequelize.QueryTypes.UPDATE
            }
        )

        return result[0];
    } catch (error) {
        console.error('Error updateSection: \n', error)
    }
}

module.exports = updateSection;