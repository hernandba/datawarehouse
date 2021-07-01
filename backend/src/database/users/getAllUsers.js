const sequelize = require('../connection');

async function getAllUsers(filter_req){
    try {
        let result = await sequelize.query(
            'SELECT u.id, u.name, u.lastname, u.email, p.profile FROM Users u JOIN Profiles p ON u.profile_id = p.id',
            {
                type: sequelize.QueryTypes.SELECT
            }
        )
        //El resultado de SELECT es un arreglo
        return result;
    } catch (error) {
        console.error('Error getAllUsers: \n', error)
    }
}

module.exports = getAllUsers;