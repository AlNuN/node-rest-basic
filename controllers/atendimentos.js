const atendimento = require('../models/atendimentos');
module.exports = (app) => {
  app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos GET'));
  app.post('/atendimentos', (req, res) => {
    const corpo = req.body;
    atendimento.adiciona(corpo, res);
  });
}