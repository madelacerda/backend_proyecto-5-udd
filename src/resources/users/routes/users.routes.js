import { Router } from 'express'
import { verifyToken } from '../../auth/middlewares/auth.middlewares.js'
import { getProfile, createUser } from '../controllers/users.controller.js'

const usersRouter = Router()

const baseURI = '/users'

usersRouter.post(`${ baseURI }/`, createUser )
usersRouter.get( `${ baseURI }/profile`, verifyToken, getProfile )

export default usersRouter