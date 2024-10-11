const contactRouter = require('./contact');
const siteRouter = require('./site');

function route(app) {
  app.use('/contact', contactRouter);

  app.use('/', siteRouter);

  //   app.get('/contact', (req, res) => {
  //     res.render('contacts/show');
  //   });
}

module.exports = route;
