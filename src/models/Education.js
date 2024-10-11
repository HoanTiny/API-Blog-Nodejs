const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Education = new Schema(
  {
    degree: {
      type: String,
      required: true,
    },
    school: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Education', Education);
