const customExpress = require('./config/customExpress');
const conexao = require('./infra/conexao');
const Tabelas = require('./infra/tabelas');

const port = 3000;

conexao.connect((erro) => {
  if (erro){
    console.log(erro);
  } else {
    console.log('conectado com sucesso ao db')
  
    Tabelas.init(conexao);

    const app = customExpress();
  
    app.listen(port, () => console.log(`Server listening on port ${port}`));
  }
})
