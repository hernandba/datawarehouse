/* -------------------------------------------------------------------------- */
/*                              ROUTE /locations                              */
/* -------------------------------------------------------------------------- */
const express = require('express')
const router = express.Router();

// /locations
router.route('')
    .get((req, res) => {
        //ALL
        //Obtener toda la info de lugares (ciudad(es), pais(es), region(es))

    })
    .post((req, res) => {
        //ALL
        //Crear nueva region

    })

// /locations/regions
router.route('/regions')
    .get((req, res) => {
        //ALL
        //Obtener toda la info de regiones

    })
    .post((req, res) => {
        //ALL
        //Crear nueva region

    })
    .put((req, res) => {
        //ALL
        //Crear nueva region

    })
    .delete((req, res) => {
        //ALL
        //Crear nueva region

    })

// /locations/countries
router.route('')
    .get((req, res) => {
        //ALL
        //Obtener toda la info de paises

    })

// /locations/cities
router.route('')
    .get((req, res) => {
        //ALL
        //Obtener toda la info de ciudades

    })