import { ClientRoot } from 'web/App'
import React from 'react'
import { hydrateRoot } from 'react-dom/client'

hydrateRoot(
  document.getElementById('root'),
    <ClientRoot/>
)

// @ts-ignore
module.hot?.accept()
