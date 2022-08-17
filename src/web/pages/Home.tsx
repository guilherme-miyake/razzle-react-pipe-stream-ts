import React, { useEffect, useState } from 'react'
import logo from 'web/assets/react.svg'
import 'web/pages/Home.css'
import axios from 'axios'

const fetch = async (setText: (text: string) => void) => {
  const resp = await axios.get('api/hello/')
  setText(resp.data)
}

const Home = () => {
  const [text, setText] = useState('Waiting response...')
  useEffect(() => {
    fetch(setText)
  }, []
  )
  return <div className="Home">
        <div className="Home-header">
            <img src={logo} className="Home-logo" alt="logo"/>
            <h2>Welcome to Razzle</h2>
        </div>
        <p className="Home-intro">
            To get started with the front-end, edit <code>src/web/App.tsx</code> or{' '}
            <code>src/web/pages/Home.tsx</code> and save to reload.
        </p>
        <br/>
        <p className="Home-intro">
            To get started with the back-end, edit <code>src/api/index.ts</code> or{' '}
            <code>src/api/handlers/hello.tsx</code> and reload.
        </p>
        <br/>
        <p className="Home-intro">
            GET <a href={'api/hello/'}>/api/hello/</a> response: {text}
        </p>
        <ul className="Home-resources">
            <li>
                <a href="https://github.com/jaredpalmer/razzle">Docs</a>
            </li>
            <li>
                <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
            </li>
            <li>
                <a href="https://palmer.chat">Community Slack</a>
            </li>
        </ul>
    </div>
}
export default Home
