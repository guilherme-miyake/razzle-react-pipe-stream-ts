import express from 'express';
let app = require('./src/server').default;

if (module.hot) {
  module.hot.accept('./src/server', () => {
    console.log('🔁  HMR Reloading `./server`...');
    try {
      app = require('./src/server').default;
    } catch (error) {
      console.error(error);
    }
  });
  console.info('✅  Server-side HMR Enabled!');
}

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;


export default express()
  .use((req, res) => app.handle(req, res))
  .listen(port, () => {
    console.log(`> App started http://localhost:${port}`)
  });