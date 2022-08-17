import express from 'express'
import React from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { ServerRoot } from './App'

let assets: any

const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!)
}
syncLoadAssets()

export const renderApp = (req: express.Request, res: express.Response) => {
  res.socket.on('error', (error) => {
    console.error('Fatal', error)
  })
  let didError = false
  const stream = renderToPipeableStream(
        <ServerRoot assets={assets}
                    req={req}
        />,
        {
          onShellReady () {
            // If something errored before we started streaming, we set the error code appropriately.
            res.statusCode = didError ? 500 : 200
            res.setHeader('Content-type', 'text/html')
            stream.pipe(res)
          },
          onError (x) {
            didError = true
            console.error(x)
          }
        }
  )
}
