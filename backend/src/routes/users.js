/* -------------------------------------------------------------------------- */
/*                                ROUTE /users                                */
/* -------------------------------------------------------------------------- */
require('dotenv').config();
const express = require('express')
const router = express.Router();

const getAllUsers = require('../database/users/getAllUsers');
const createUser = require('../database/users/createUser');

const validateNewUser = require('../validations/users/validateNewUser')

const authAdmin = require('../auth/authAdmin');

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
        const {name, lastname, email, profile, password} = req.body;
        //El parametro 'profile' tiene como valores 'admin' ó 'basic'
        //Como la tabla Users no tiene campo 'profile' sino 'profile_id'
        //que tiene como valores 1 ó 2 (Los id de la tabla Profiles)
        //Guardo en profile_id el valor segun corresponda (1=admin, 2=basic)
        let profile_id;
        profile === 'admin' ? profile_id = 1 : profile_id = 2;
        //Y finalmente entrego profile_id como parametro 
        createUser({name, lastname, email, profile_id, password}).then(newUser => {
            console.log(newUser)
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
    });

module.exports = router;