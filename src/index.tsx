import React, { PropsWithChildren } from 'react'
import logo from 'assets/favicon.ico'

const cssLinksFromAssets = (assets, entrypoint) => assets?.[entrypoint]?.css?.map(
  asset => <link key={asset.split('/')[-1]} rel="stylesheet" href={asset}/>
)

const jsScriptTagsFromAssets = (assets, entrypoint, extra = '') => assets?.[entrypoint]?.js.map(
  asset => <script key={asset.split('/')[-1]} src={asset} defer/>
)

const Index = (props: PropsWithChildren<{assets: object}>) =>
    <html lang="en">
    <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="shortcut icon" href={logo}/>
        {cssLinksFromAssets(props.assets, 'client') || null}
    </head>
    <body>
    <noscript><b>Enable JavaScript to run this app.</b></noscript>
    <div id={'root'}>
        {props.children}
    </div>
    {jsScriptTagsFromAssets(props.assets, 'client') || null}
    </body>
    </html>

export default Index
