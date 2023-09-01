// @desc Get all contacts
// @route api/contacts
// @access public
const getContacts = (req, res) => {
    res.status(200).json({ message: "Get contacts" })
}


// @desc Create contacts
// @route api/contacts
// @access public
const createContact = ((req, res) => {
    console.log("The request body:", req.body)
    const { name, email, phone } = req.body
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    res.status(200).json({ message: `create specific contact ` })
})

// @desc get a specific contact
// @route api/contacts/:id
// @access public
const getContact = ((req, res) => {
    res.status(200).json({ message: `get specific contact at ${req.params.id}` })
})

// @desc update a specific contact
// @route api/contacts/:id
// @access public
const updateContact = ((req, res) => {
    res.status(200).json({ message: `update specific contact at ${req.params.id}` })
})

// @desc delete a specific contact
// @route api/contacts/:id
// @access public
const deleteContact = ((req, res) => {
    res.status(200).json({ message: `delete specific contact at ${req.params.id}` })
})

module.exports = { getContacts, getContact, updateContact, deleteContact, createContact }