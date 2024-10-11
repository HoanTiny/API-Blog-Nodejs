const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Me = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    info: { type: String },
    description: { type: String },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);
