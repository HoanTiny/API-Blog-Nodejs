const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Project = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    technologies: [
      {
        type: String,
      },
    ],

    image: {
      type: String,
    },

    projectUrl: {
      type: String,
    },

    githubUrl: {
      type: String,
    },

    demoUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
