import Router from 'express-promise-router'
import helloRouter from './handlers/hello'

export const Api = Router()
  .use('/hello', helloRouter)
