const searchContact = require('../../database/contacts/searchContact');

const validateContact = (req, res, next) => {
    const { id } = req.query;

    if(!id){
        return res.status(400).send({
            status: 'error',
            message: 'Contact id has no value',
            data: {
                id: id
            }
        }) 
    }

    searchContact({id: id, email: ""}).then(result => {
        const contactExists = result;

        if (!contactExists) {
            console.log('-->Contact Not Found')
            return res.status(400).send({
                status: 'error',
                message: 'Contact not found',
                data: {
                    id: id
                }
            });
        }

        return next();
    })
}

module.exports = validateContact;