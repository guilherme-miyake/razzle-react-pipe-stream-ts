import { ClientRoot } from 'App'
import React from 'react'
import { hydrateRoot } from 'react-dom/client'

hydrateRoot(
  document.getElementById('root'),
    <ClientRoot/>
)

// @ts-ignore
module.hot.accept()
