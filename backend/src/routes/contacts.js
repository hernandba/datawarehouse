/* -------------------------------------------------------------------------- */
/*                               ROUTE /contacts                              */
/* -------------------------------------------------------------------------- */
const express = require('express');
const router = express.Router();

const getAllContacts = require('../database/contacts/getAllContacts');
const createContact = require('../database/contacts/createContact');
const updateContact = require('../database/contacts/updateContact');
const deleteContacts = require('../database/contacts/deleteContacts');

const validateContact = require('../validations/contacts/validateContact');
const validateNewContact = require('../validations/contacts/validateNewContact');

router.route('')
    .get((req, res) => {
        getAllContacts().then(result => {
            res.status(200).send(
                {
                    status: 'OK',
                    message: 'All Contacts Info',
                    data: result
                }
            )
        })
    })
    .post(validateNewContact, (req, res) => {
        createContact(req.body).then(result => {
            res.status(200).send(
                {
                    status: 'OK',
                    message: 'New Contact Created',
                    data:{ id: result, ...req.body }
                }
            )
        })
    })
    .put(validateContact,(req, res) => {
        const { id } = req.query;
        updateContact(id, req.body).then(result => {
            res.status(200).send(
                {
                    status: 'OK',
                    message: 'Contact Updated',
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
        deleteContacts(ids).then(result => {
            res.status(200).send(
                {
                    status: 'OK',
                    message: `Contacts deleted`,
                    data: {
                        id: result
                    }
                }
            )
        })
    })

module.exports = router;