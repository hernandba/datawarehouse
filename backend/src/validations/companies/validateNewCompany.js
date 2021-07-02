const searchCompany = require('../../database/companies/searchCompany');

const validateNewCompany = (req, res, next) => {
    const {name, address, email, phone, city} = req.body
    
    if(!name || !address || !email || !phone || !city){
        return res.status(400).send({
            status: 'error',
            message: 'Uncomplete Data'
        })
    }

    searchCompany({id:"", name: name, email: email}).then(result => {
        const companyExists = result;

        if (companyExists) {
            console.log('-->Company Already Exists')
            return res.status(400).send({
                status: 'error',
                message: 'Company already exists'
            });
        }

        return next();
    })
}

module.exports = validateNewCompany;