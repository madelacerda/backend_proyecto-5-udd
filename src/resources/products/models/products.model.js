import mongoose from 'mongoose'


const productSchema = new mongoose.Schema( {
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

} )

export const ProductModel = new mongoose.model( 'Product', productSchema )