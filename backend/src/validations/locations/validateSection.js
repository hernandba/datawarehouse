const validateSection = (req, res, next) => {
    const {section} = req.params;

    if(section === 'regions' || section === 'countries' || section === 'cities'){
        return next();
    }else{
        return res.status(404).send({
            status: 'Error',
            message: 'Invalid Section'
        })
    }
}

module.exports = validateSection;