const { Schema, model } = require("mongoose");
const travelModel = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
  },
  img: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = model("Trave", travelModel);
