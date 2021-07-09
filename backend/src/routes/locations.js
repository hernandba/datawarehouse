/* -------------------------------------------------------------------------- */
/*                              ROUTE /locations                              */
/* -------------------------------------------------------------------------- */
const express = require('express');
const router = express.Router();

const getAllLocations = require('../database/locations/getAllLocations');
const getAllFromSection = require('../database/locations/getAllFromSection');
const createNewSection = require('../database/locations/createNewSection');
const updateSection = require('../database/locations/updateSection');
const deleteSection = require('../database/locations/deleteSection');

const validateSection = require('../validations/locations/validateSection');

// /locations
router.route('')
    .get((req, res) => {
        //ALL
        //Get All locations info
        getAllLocations().then(locations => {
            res.status(200).send(
                {
                    status: 'OK',
                    message: 'All Locations Info',
                    data: locations
                }
            )
        })
    })

// /locations/:section (regions-countries-cities)
router.use('/:section', validateSection); //Global Validation for section
router.route('/:section')
    .get((req, res) => {
        //ALL
        //Get All *section* info
        const { section } = req.params;

        getAllFromSection(section).then(sections => {
            res.status(200).send(
                {
                    status: 'OK',
                    message: `All ${section} info`,
                    data: sections
                }
            )
        })
    })
    .post((req, res) => {
        //ALL
        const { section } = req.params;
        const { name, location } = req.body;
        createNewSection(section, name, location).then(newSection => {
            res.status(200).send(
                {
                    status: 'OK',
                    message: `New ${section} created`,
                    data: {
                        id: newSection,
                        name: name,
                        location: location
                    }
                }
            )
        })
    })
    .put((req, res) => {
        //ALL
        console.log('aqui')
        const { section } = req.params;
        const { name } = req.query;
        const { newName, location } = req.body;
        
        updateSection(section, name, newName, location).then(sectionUpdated => {
            
            res.status(200).send(
                {
                    status: 'OK',
                    message: `${section} updated`,
                    data: {
                        id: sectionUpdated,
                        name: name,
                        newName: newName,
                        location: location
                    }
                }
            )
        })

    })
    .delete((req, res) => {
        //ALL
        const { section } = req.params;
        const { name } = req.query;
        deleteSection(section, name).then(result => {
            res.status(200).send(
                {
                    status: 'OK',
                    message: `${section} deleted`,
                    data: {
                        id: result,
                        name: name
                    }
                }
            )
        })
    })

module.exports = router;