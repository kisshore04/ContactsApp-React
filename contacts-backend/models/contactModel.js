const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "please fill the name"],
    },
    email: {
      type: String,
      required: [true, "please fill the email"],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "please fill the number"],
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
