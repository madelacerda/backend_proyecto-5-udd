import joi from 'joi'

const createProductSchemaValidator = joi.object( {
  slug: joi.string().max( 100 ).required(),
  nombre: joi.string().max( 100 ).required(),
  descripcion: joi.string().max( 300 ),
  precio: joi.number().required(),
  img: joi.string().required(),
  countInStock: joi.number().required()

} )

const validateCreateProductBody = async ( body ) => {
  return createProductSchemaValidator.validateAsync( body, { abortEarly: false } )
}

export default validateCreateProductBody