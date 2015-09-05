import express from 'express'

const app = express()

app.use((req, res) => {
  const HTML = `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>TrailerZoo</title>
      </head>
      <body>
        <div id="react-root"></div>
        <script type="application/javascript" src="./bundle.js"></script>
      </body>
  </html>`

  res.send(HTML)
})

export default app
