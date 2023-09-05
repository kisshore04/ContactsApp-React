const express = require('express')
const { getContacts, getContact, updateContact, deleteContact, createContact } = require("../controllers/contactController.js")
const contactRoutes = express.Router()

contactRoutes.route("/").get(getContacts)

contactRoutes.route("/").post(createContact)

contactRoutes.route("/:id").put(updateContact)

contactRoutes.route("/:id").delete(deleteContact)

contactRoutes.route("/:id").get(getContact)



module.exports = contactRoutes