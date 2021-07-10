/* -------------------------------------------------------------------------- */
/*                              ROUTE /companies                              */
/* -------------------------------------------------------------------------- */
const express = require('express')
const router = express.Router()

const getAllCompanies = require('../database/companies/getAllCompanies')
const createCompany = require('../database/companies/createCompany')
const deleteCompany = require('../database/companies/deleteCompany')
const updateCompany = require('../database/companies/updateCompany')

const validateNewCompany = require('../validations/companies/validateNewCompany')
const validateCompany = require('../validations/companies/validateCompany')

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
    .put(validateCompany, (req, res) => {
        //ALL
        //Actualizar info de empresa
        const { companyName } = req.query;
        const { name, address, email, phone, city_id} = req.body

        updateCompany(companyName, req.body).then(result => {
            res.status(200).send(
                {
                    status: 'OK',
                    message: 'Company Updated',
                    data: {
                        id: result,
                        name: name,
                        address: address,
                        email: email,
                        phone: phone,
                        city: city_id
                    }
                }
            )
        })
    })
    .delete(validateCompany, (req, res) => {
        //ALL
        //Eliminar empresa
        const { companyName } = req.query;
        deleteCompany(companyName).then(result => {
            res.status(200).send(
                {
                    status: 'OK',
                    message: `Company deleted`,
                    data: {
                        id: result,
                        name: companyName
                    }
                }
            )
        })
    })

module.exports = router;