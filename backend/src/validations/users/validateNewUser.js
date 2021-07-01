const searchUser = require('../../database/users/searchUser');

const validateNewUser = (req, res, next) => {
    const {name, lastname, email, profile, password} = req.body;

    if(!name || !lastname || !email || !profile || !password){
        return res.status(400).send({
            status: 'error',
            message: 'Uncomplete Data'
        })
    }

    searchUser({email: email, id:""}).then(result => {
        const userExists = result;

        if (userExists) {
            console.log('-->User Already Exists')
            return res.status(400).send({
                status: 'error',
                message: 'User already exists'
            });
        }

        return next();
    })
}

module.exports = validateNewUser;