import express from 'express'
import compress from 'compression'

import { Api } from './api'
import { renderApp } from './web/render'

console.log(process.env.COOKIE_SECRET)

const server = express()
  .disable('x-powered-by')
  .use(compress())
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .use(express.static('build'))
  .use('/api', Api)
  .get('/*', renderApp)

export default server
