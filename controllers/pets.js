const pets = require('../models/pets');

module.exports = (app) => {
  app.post('/pet', (req, res) => {
    pets.adiciona(req.body, res);
  });
}