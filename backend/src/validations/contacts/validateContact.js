const searchContact = require('../../database/contacts/searchContact');

const validateContact = (req, res, next) => {
    const contact_id = Object.values(req.query);
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
    if(!contact_id[0]){
        return res.status(400).send({
            status: 'error',
            message: 'Contact id has no value',
            data: {
                id: contact_id[0]
            }
        }) 
    }

    searchContact({id: contact_id[0], email: ""}).then(result => {
        const contactExists = result;

        if (!contactExists) {
            console.log('-->Contact Not Found')
            return res.status(400).send({
                status: 'error',
                message: 'Contact not found',
                data: {
                    id: contact_id[0]
                }
            });
        }

        return next();
    })
}

module.exports = validateContact;