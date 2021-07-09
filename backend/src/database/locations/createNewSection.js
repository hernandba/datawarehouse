const sequelize = require('../connection');

async function createNewSection(section, newName, location){
    try {
        let query;
        switch (section) {
            case 'regions':
                query = `INSERT INTO Regions VALUES (NULL, '${newName}')`
                break;

            case 'countries':
                query = `INSERT INTO Countries VALUES (NULL, '${newName}', (SELECT id FROM Regions WHERE name = '${location}'))`
                break;

            case 'cities':
                query = `INSERT INTO Cities VALUES (NULL, '${newName}', (SELECT id FROM Countries WHERE name = '${location}'))`
                break;
        }
        let result = await sequelize.query(
            query,
            {
                type: sequelize.QueryTypes.INSERT
            }
        )
        //INSERT retorna un arreglo con los id's de los registros creados
        return result[0];
    } catch (error) {
        console.error('Error createNewSection: \n', error)
    }
}

module.exports = createNewSection;