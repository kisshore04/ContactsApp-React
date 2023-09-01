const express = require('express')
const { getContacts, getContact, updateContact, deleteContact, createContact } = require("../controllers/contactController.js")
const router = express.Router()

router.route("/").get(getContacts)

router.route("/").post(createContact)

router.route("/:id").put(updateContact)

router.route("/:id").delete(deleteContact)

router.route("/:id").get(getContact)



module.exports = router