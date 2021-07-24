/* -------------------------------------------------------------------------- */
/*                                ROUTE /users                                */
/* -------------------------------------------------------------------------- */
require('dotenv').config();
const express = require('express')
const router = express.Router();

const getAllUsers = require('../database/users/getAllUsers');
const createUser = require('../database/users/createUser');
const updateUser = require('../database/users/updateUser');
const deleteUsers = require('../database/users/deleteUsers');

const validateNewUser = require('../validations/users/validateNewUser')

const authAdmin = require('../auth/authAdmin');
// const validateUser = require('../validations/users/validateUser');

// /users
router.route('')
    .get((req, res) => {
        //ALL
        //Obtener informacion de todos los usuarios
        getAllUsers().then(newUser => {
            res.status(200).send(
                {
                    status: 'OK',
                    message: 'All Users Info',
                    data: newUser
                }
            )
        })
    })
    .post(authAdmin, validateNewUser, (req, res) => {
        //ADMIN
        //Registrar nuevo usuario
        const {name, lastname, email, profile} = req.body;
        createUser(req.body).then(newUser => {
            res.status(200).send(
                {
                    status: 'OK',
                    message: 'New User Created',
                    data:{
                        id: newUser,
                        name: name,
                        lastname: lastname,
                        email: email,
                        profile: profile
                    }
                }
            )
        })
    })
    .put((req, res) => {
        const { id } = req.query;
        updateUser(id, req.body).then(result => {
            res.status(200).send(
                {
                    status: 'OK',
                    message: 'User Updated',
                    data: {
                        id: id,
                        ...req.body
                    }
                }
            )
        })
    })
    .delete((req, res) => {
        const { ids } = req.query;
        deleteUsers(ids).then(result => {
            res.status(200).send(
                {
                    status: 'OK',
                    message: `Users deleted`,
                    data: {
                        id: result
                    }
                }
            )
        })
    })

module.exports = router;