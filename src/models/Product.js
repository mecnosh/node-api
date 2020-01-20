//Importando mongoose
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
  //cada produto tem um titulo
  title: {
    //tipo dele é uma String
    type: String,
    //required == é obrigatório
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  //createdAt vai ser preenchido automaticamente
  //ele irá criar a Data de criação de cada produto
  createdAt: {
    //com uma Data
    type: Date,
    //e por padrao uma data atual que o registro for criado no banco de dados
    default: Date.now,
  },
}); 

ProductSchema.plugin(mongoosePaginate);


mongoose.model('Product', ProductSchema);

