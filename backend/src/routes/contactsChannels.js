/* -------------------------------------------------------------------------- */
/*                           ROUTE /contactsChannels                          */
/* -------------------------------------------------------------------------- */
const express = require('express');
const createContactChannel = require('../database/contactsChannels/createContactChannel');
const deleteContactChannelById = require('../database/contactsChannels/deleteContactChannelById');
const getChannelsByContactId = require('../database/contactsChannels/getChannelsByContactId');
const updateContactChannelById = require('../database/contactsChannels/updateContactChannelById');
const validateContact = require('../validations/contacts/validateContact');
const router = express.Router();

router.route('')
    .get(validateContact, (req, res) => {
        const { contact_id } = req.query;
        getChannelsByContactId(contact_id).then(result => {
            res.status(200).send(
                {
                    status: 'OK',
                    message: 'Contact Channels',
                    data: {
                        contact_id: contact_id,
                        channels: result
                    }
                }
            )
        })
    })
    .post(validateContact, (req, res) => {
        const { contact_id } = req.query
        createContactChannel(contact_id, req.body).then(result => {
            res.status(200).send(
                {
                    status: 'OK',
                    message: 'New Channel Created for Contact',
                    data: {
                        id: contact_id,
                        channel: req.body
                    }
                }
            )
        })

    })
    .put(validateContact, (req, res) => {
        const { contact_id, contact_channel_id } = req.query
        updateContactChannelById(contact_channel_id, req.body).then(result => {
            res.status(200).send(
                {
                    status: 'OK',
                    message: 'Channel Updated For Contact',
                    data:{
                        contact_id: contact_id,
                        channel: {
                            id: contact_channel_id,
                            ...req.body
                        } 
                    }
                }
            )
        })
    })
    .delete(validateContact, (req, res) => {
        const { contact_id, contact_channel_id } = req.query;
        deleteContactChannelById(contact_channel_id).then(result => {
            res.status(200).send(
                {
                    status: 'OK',
                    message: 'Channel deleted for Contact',
                    data:{...req.query}
                }
            )
        })

    })

module.exports = router;