const Course = require('../models/Contact');
const { mutipleMongooseToObject } = require('../util/mongoose');

class SiteController {
  // [GET] /
  index(req, res, next) {
    Course.find({})
      .then(() => {
        // courses = courses.map((course) => course.toObject());
        res.render('home', {
          courses: 'hello',
        });
      })
      .catch(next);
  }
}
//
module.exports = new SiteController();
