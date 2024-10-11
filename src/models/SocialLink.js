const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SocialLink = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
