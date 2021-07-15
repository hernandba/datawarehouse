/* -------------------------------------------------------------------------- */
/*                                ROUTE /login                                */
/* -------------------------------------------------------------------------- */
const express = require('express')
const router = express.Router();

require('dotenv').config();
const ADMINKEY = process.env.ADMINKEY;
const jwt = require('jsonwebtoken');

const validateLogin = require('../validations/login/validateLogin')
const searchUser = require('../database/users/searchUser')

router.route('')
    .post(validateLogin, (req, res) => {
        //ALL
        //Identificar y hacer login
        const {credential} = req.body;

        searchUser({email: credential, id:""}).then(userInfo => {
            console.log(userInfo)
            const userCredentials = {id: userInfo.id, profile: userInfo.profile}
            const token = jwt.sign(userCredentials, ADMINKEY)
            res.status(200).send(
                {
                    status: 'OK',
                    message: 'Logged in',
                    data:{
                        profile: userInfo.profile,
                        token: token
                    }
                }
            )
        })
    })

module.exports = router;