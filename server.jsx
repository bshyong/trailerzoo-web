import express from 'express'
import React from 'react'
import Router from 'react-router'
import routes from 'routes'

const app = express()

app.use((req, res) => {
  const location = `${req.path}`

  Router.run(routes, location, (Root, routeState) => {
    const componentHTML = React.renderToString(<Root {...routeState} />)

    const HTML = `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>TrailerZoo</title>
        </head>
        <body>
          <div id="react-root">${componentHTML}</div>
          <script type="application/javascript" src="./bundle.js"></script>
        </body>
    </html>`

    res.send(HTML)
  })
})

export default app
