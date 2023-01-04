const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
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
});

const product = mongoose.model("product", productSchema);
module.exports = product;
