const Contact = require('../models/Contact');
const { mongooseToObject } = require('../util/mongoose');

class ContactController {
  // GET
  show(req, res, next) {
    // Contact.find({})
    //   .then(() => {
    //     res.render('contacts/show', {
    //       contact: 'Hello',
    //     });
    //   })
    //   .catch(next);

    res.render('contacts/show');
  }
}

module.exports = new ContactController();
