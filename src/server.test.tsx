
import { ServerRoot } from 'App'
import React from 'react'
import { renderToString } from 'react-dom/server'

describe('<ServerRoot />', () => {
  test('renders without exploding', () => {
    renderToString(
            <ServerRoot assets={null} req={null}/>
    )
  })
})
