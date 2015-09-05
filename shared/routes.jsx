import React from 'react'
import { Route } from 'react-router'

import App from './components/App.jsx'

export default (
  <Route name="app" handler={App} path="/" />
)
