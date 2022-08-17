import Router from 'express-promise-router'

const helloRouter = Router()

helloRouter.get('/', async (req, res) => {
  res.send('Hello World')
}
)

export default helloRouter
