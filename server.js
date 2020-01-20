const express =  require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


//executar a função express
//Iniciando o App
const app = express();

//é pra permitir que eu envie dados pra aplicação no formato de json
app.use(express.json());
//ele libera acesso para todos os domínios
//permite utilizar esta api em outros domínios
app.use(cors());

//Iniciando o Database
mongoose.connect(
  "mongodb://localhost:27017/nodeapi", 
  { useNewUrlParser: true,  useUnifiedTopology: true }
);
//Product registrado na alicação
// require('./src/models/Product');
//utilizando o require-dir abaixo
requireDir('./src/models/');

//teste pra ver se está cadastrando no banco

//Acesso ao Product.js, para conseguir inserir novos valores, atualizar etc..
// const Product =  mongoose.model('Product');


//toda vez que o usuario acessar a rota
//passando a rota que é
// / indica a rota raiz
//Primeira Rota
// app.get('/', (req, res) => {
  //req simboliza a requisição que está sendo feito ao servidor
  //res é a resposta que vai ser dado para a resquisição
  //nodemon faz automaticamente a reinicialição do servidor

  //criando um produto
//   Product.create({ 
//     title: 'React Native',
//     description: 'Build native apps with React',
//     url: 'http://github.com/facebook/react-native' 
//   });
//   return res.send('Hello Rocketseat');

// });

//vai receber todo tipo de requisição
//Rotas
app.use('/api', require('./src/routes'));

//indicando pra a aplicação ouvir a porta 3001 do navegador
app.listen(3001);