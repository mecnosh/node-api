const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
  //vai fazer uma listagem de todos os dados, todos os registros de produtos
  //dentro da base de dados 
  async index(req, res) {
    const { page = 1 } =  req.query;
    //query são para parametros get
    //body é o corpo da requisição
    //params é para os id que são definidos na rota, ex: '/products/:id'

    // const products = await Product.find(); 
    //primeiro {} serve para colocar um where, filtros
    //page 1 é a pagina atual e o limit que é o tamanho dela
    const products = await Product.paginate({}, {page, limit: 10 });   

    return res.json(products);
  },

  async show(req, res) {

    //req.params.id vai pegar o id que está nos parametros da rota
    const product = await Product.findById(req.params.id);

    return res.json(product);
  },

  async store(req, res) {
    //Criação
    //passando os dados da requisição com req.body
    const product = await Product.create(req.body);
    //retornar o produto que acabou de ser criado na base de dados
    return res.json(product); 
  },
  
  async update(req, res) {
    //pega o produto com req.params.id e irá atualizar ele com o conteudo que está no req.body
    //new: true, ele retorna o produto atualizado pra dentro da variavel product
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true  });

    return res.json(product);
  },

  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);

    return res.send();
  },

 };