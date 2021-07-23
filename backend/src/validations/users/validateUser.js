const searchUser = require('../../database/users/searchUser');

const validateUser = (req, res, next) => {
    const user_id = Object.values(req.query);
    // const { id } = req.query;
    // if(!id){
    //     return res.status(400).send({
    //         status: 'error',
    //         message: 'Contact id has no value',
    //         data: {
    //             id: id
    //         }
    //     }) 
    // }
    if(!user_id[0]){
        return res.status(400).send({
            status: 'error',
            message: 'User id has no value',
            data: {
                id: id
            }
        }) 
    }

    searchContact({id: user_id[0], email: ""}).then(result => {
        const userExists = result;

        if (!userExists) {
            console.log('-->User Not Found')
            return res.status(400).send({
                status: 'error',
                message: 'User not found',
                data: {
                    id: id
                }
            });
        }

        return next();
    })
}

module.exports = validateUser;