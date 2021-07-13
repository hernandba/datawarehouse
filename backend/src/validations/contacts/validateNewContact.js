const searchContact = require('../../database/contacts/searchContact');

const validateNewContact = (req, res, next) => {
    const { email } = req.body
    const bodyData = Object.entries(req.body);
    const bodyDataEmptyValues = bodyData.filter(element => element[1] === '')
    const bodyDataUncompleteKeys = bodyDataEmptyValues.map(element => element[0])

    if(bodyDataUncompleteKeys.length > 0){
        return res.status(400).send({
            status: 'error',
            message: 'Uncomplete Data',
            data:{
                ...bodyDataUncompleteKeys
            }
        })
    }

    searchContact({id:"", email: email}).then(result => {
        const contactExists = result;

        if (contactExists) {
            console.log('-->Contact Already Exists')
            return res.status(400).send({
                status: 'error',
                message: 'Contact email already exists'
            });
        }

        return next();
    })
}

module.exports = validateNewContact;