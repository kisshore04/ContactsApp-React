const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// @desc Get all contacts
// @route api/contacts
// @access private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

// @desc Create contacts
// @route api/contacts
// @access private
const createContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      res.status(400);
      throw new Error("Please fill all the data!!");
    }
    const contact = await Contact.create({
      name,
      email,
      phone,
      user_id: req.user.id,
    });
    res.status(200).json({ message: "contact created", data: contact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc get a specific contact
// @route api/contacts/:id
// @access private
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }
  if (contact.user_id.toString() === req.user.id) {
    res.status(200).json(contact);
  } else {
    res.status(403);
    throw new Error("This user cannot access other user's contacts");
  }
});

// @desc update a specific contact
// @route api/contacts/:id
// @access private
const updateContact = async (req, res) => {
  // const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
  //   new: true,
  // });
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("This user cannot access other user's contacts");
  } else {
    // console.log(req.user.id);
    // res.send(contact);
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({ message: "Contact updated", data: updatedContact });
  }
};

// @desc delete a specific contact
// @route api/contacts/:id
// @access private
const deleteContact = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("This user cannot access other user's contacts");
  } else {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Contact deleted", data: deletedContact });
  }
};

module.exports = {
  getContacts,
  getContact,
  updateContact,
  deleteContact,
  createContact,
};
