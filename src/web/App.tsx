import React, { PropsWithChildren } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'
import { Request } from 'express'

import Index from './index'
import Home from './pages/Home'
import './App.css'

export const App = () =>
    <Routes>
        <Route path="/" element={<Home/>}/>
    </Routes>

export const ServerRoot = (props: PropsWithChildren<{ assets: String[], req: Request }>) =>
    <Index assets={props.assets}>
        <StaticRouter location={props.req?.url}>
            <App/>
        </StaticRouter>
    </Index>

export const ClientRoot = () => <BrowserRouter><App/></BrowserRouter>
