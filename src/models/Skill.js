const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Skill = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    proficiency: {
      type: String,
      enum: ['Intern', 'Fresher', 'Junior', 'Middle', 'Senior', 'Leader'],
      default: 'Intern',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Skill', Skill);
