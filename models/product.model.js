const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  slug:{
    type: String,
    require: true,
  },
  nombre: {
    type: String,
    require: true,
  },
  descripcion: {
    type: String,
  },
  precio: {
    type: Number,
    require: true,
  },
  img: {
    type: String,
  },
  categoria: {
    type: String,
  },
  numReviews:{
    type: Number
  },
  rating:{
    type: Number
  },
  countInStock:{
    type: Number,
    require:true
  }

});

const product = mongoose.model("product", productSchema);
module.exports = product;
