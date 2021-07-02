/* -------------------------------------------------------------------------- */
/*                              ROUTE /companies                              */
/* -------------------------------------------------------------------------- */
const express = require('express')
const router = express.Router()

const getAllCompanies = require('../database/companies/getAllCompanies')
const createCompany = require('../database/companies/createCompany')

const validateNewCompany = require('../validations/companies/validateNewCompany')

// /companies
router.route('')
    .get((req, res) => {
        //ALL
        //Obtener toda la info de empresas
        getAllCompanies().then(result => {
            res.status(200).send(
                {
                    status: 'OK',
                    message: 'All Companies Info',
                    data: result
                }
            )
        })
    })
    .post(validateNewCompany, (req, res) => {
        //ALL
        //Crear nueva empresa
        const {name, address, email, phone, city} = req.body
        createCompany(req.body).then(result => {
            res.status(200).send(
                {
                    status: 'OK',
                    message: 'New Company Created',
                    data: {
                        id: result,
                        name: name,
                        address: address,
                        email: email,
                        phone: phone,
                        city: city
                    }
                }
            )
        })
    })
    .put((req, res) => {
        //ALL
        //Actualizar info de empresa

    })
    .delete((req, res) => {
        //ALL
        //Eliminar empresa

    })

module.exports = router;