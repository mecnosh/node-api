const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

//toda vez que o usuario acessar a rota
//passando a rota que é
// / indica a rota raiz
//Primeira Rota
// routes.get('/products', (req, res) => {
  //req simboliza a requisição que está sendo feito ao servidor
  //res é a resposta que vai ser dado para a resquisição
  //nodemon faz automaticamente a reinicialição do servidor

  //criando um produto
  // Product.create({ 
  //   title: 'React Native',
  //   description: 'Build native apps with React',
  //   url: 'http://github.com/facebook/react-native' 
  // });
//   return res.send('Hello Rocketseat');
// });

routes.get('/products', ProductController.index);
//no express pra representar um id do produto
//usa o :id 
routes.get('/products/:id', ProductController.show);
//Nova rota
//Post serve para quando formos criar algo no servidor
routes.post('/products', ProductController.store);
//rota de atualização usa-se o metodo put
routes.put('/products/:id', ProductController.update);
//rota de remoção 
routes.delete('/products/:id', ProductController.destroy);


//exportando routes
module.exports = routes;
