const express = require("express");
const {
  getContacts,
  getContact,
  updateContact,
  deleteContact,
  createContact,
} = require("../controllers/contactController.js");
const validateToken = require("../middleware/validateTokenHandler.js");
const contactRoutes = express.Router();

contactRoutes.use(validateToken);
contactRoutes.route("/").get(getContacts).post(createContact);
contactRoutes
  .route("/:id")
  .get(getContact)
  .put(updateContact)
  .delete(deleteContact);
// contactRoutes.route("/").get(getContacts);

// contactRoutes.route("/").post(createContact);

// contactRoutes.route("/:id").put(updateContact);

// contactRoutes.route("/:id").delete(deleteContact);

// contactRoutes.route("/:id").get(getContact);

module.exports = contactRoutes;
