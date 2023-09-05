const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModel')

// @desc Get all contacts
// @route api/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
})

// @desc Create contacts
// @route api/contacts
// @access public
const createContact = async (req, res) => {
    try {
        const { name, email, phone } = req.body
        if (!name || !email || !phone) {
            res.status(400)
            throw new Error("Please fill all the data!!")
        }
        const contact = await Contact.create({
            name,
            email,
            phone
        })
        res.status(200).json({ message: "contact created", data: contact })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" })
    }
}

// @desc get a specific contact
// @route api/contacts/:id
// @access public
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404)
        throw new Error("contact not found")
    }
    res.status(200).json(contact)
})

// @desc update a specific contact
// @route api/contacts/:id
// @access public
const updateContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        )
        if (!contact) {
            res.status(404)
            throw new Error("Contact not found")
        }
        res.status(200).json({ message: "Contact updated", data: contact })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server error" })

    }
}

// @desc delete a specific contact
// @route api/contacts/:id
// @access public
const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id)

        if (!contact) {
            res.status(404)
            throw new Error("Contact not found")
        }
        res.status(200).json({ message: "Contact deleted", data: contact })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" })
    }
}

module.exports = { getContacts, getContact, updateContact, deleteContact, createContact }