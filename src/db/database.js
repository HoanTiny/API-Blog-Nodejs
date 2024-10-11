// Using Node.js `require()`
const mongoose = require('mongoose');
require('dotenv').config();
console.log(`process.env.MONGODB_URI`, process.env.MONGODB_URI);
async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connect successfully!!!');
  } catch (error) {
    console.log('Connect failure!!!');
  }
}

module.exports = { connect };
