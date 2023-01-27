import { awaitCatcher } from 'await-catcher'
import jwt from 'jsonwebtoken'
import environment from '../../../config/environment.js'
import { createUser, findUserByEmail } from '../../users/controllers/users.controller.js'
import validateCreateUserBody from '../../users/validators/users.validator.js'
const { TOKEN_SECRET } = environment

export const login = async ( req, res ) => {
  const { email, password } = req.body
  // Buscamos el usuario en la DB y verificamos si la contraseña es válida
  const [ userFound, userFoundError ] = await awaitCatcher( findUserByEmail( email ) )
  if ( !userFound || userFoundError ) {
    return res.status( 404 ).json( { status: 'ERROR', details: 'user not found' } )
  }
  const [ passwordValid, passwordValidError ] = await awaitCatcher( userFound.validatePassword( password ) )
  if ( !passwordValid, passwordValidError ) {
    return res.status( 404 ).json( { status: 'ERROR', details: 'user not found' } )
  }

  // Generamos el token
  const payload = {
    id: userFound._id,
    fullName: `${ userFound.name } ${ userFound.surname }`,
    email: userFound.email
  }
  const token = jwt.sign( payload, TOKEN_SECRET, {
    expiresIn: "1h"
  } )
  return res.json( { token } )
}

export const signup = async ( req, res ) => {
  const body = req.body
  console.log( `🚀 ~ body`, body );
  // Validamos el body
  const [ bodyValidated, validateUserError ] = await awaitCatcher( validateCreateUserBody( body ) )
  if ( !bodyValidated || validateUserError ) {
    return res.status( 400 ).json( { status: 'ERROR', details: validateUserError?.message || 'must provide all fields' } )
  }

  // Creamos el nuevo usuario
  const [ userCreated, userCreatedError ] = await awaitCatcher( createUser( bodyValidated ) )
  if ( !userCreated || userCreatedError ) {
    return res.status( 400 ).json( { status: 'ERROR', details: userCreatedError?.message || 'an error occurred when creating the user' } )
  }
  // Generamos el token
  const payload = {
    id: userCreated._id,
    fullName: `${ userCreated.name } ${ userCreated.surname }`,
    email: userCreated.email
  }
  const token = jwt.sign( payload, TOKEN_SECRET, {
    expiresIn: "1h"
  } )
  return res.status( 201 ).json( { token } )


}