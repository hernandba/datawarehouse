const searchSection = require('../../database/locations/searchSection');

const validateNewSection = (req, res, next) => {
    const { section } = req.params;
    const { name } = req.body;

    searchSection(section, name).then(result => {
        const locationExists = result;
        console.log(locationExists)

        if (locationExists) {
            console.log('-->Section Already Exists')
            return res.status(400).send({
                status: 'error',
                message:`${name} already exists`
            });
        }

        return next();
    })
}

module.exports = validateNewSection;