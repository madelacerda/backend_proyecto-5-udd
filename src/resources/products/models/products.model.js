import mongoose from 'mongoose'

/* 
Se define el esquema de mongoose, esta corresponde a la estructura de lo que sería un producto
El id es generado automáticamente
*/
const productSchema = new mongoose.Schema( {
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
    maxLength: 100,
    minLength: 2
  },
  price: {
    type: String,
    required: false,
    maxLength: 100,
  },
  image: {
    type: String,
    required: false,
  }
} )

// Se crea la instancia del modelo.
export const ProductModel = new mongoose.model( 'Product', productSchema )