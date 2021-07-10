const searchCompany = require('../../database/companies/searchCompany');

const validateCompany = (req, res, next) => {
    const { companyName } = req.query;

    searchCompany({id:"", name: companyName, email: ""}).then(result => {
        const companyExists = result;

        if (!companyExists) {
            console.log('-->Company Not Found')
            return res.status(400).send({
                status: 'error',
                message: 'Company not found'
            });
        }

        return next();
    })
}

module.exports = validateCompany;