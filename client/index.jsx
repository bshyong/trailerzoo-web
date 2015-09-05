import React from 'react'
import { Router } from 'react-router'
import routes from 'routes'

React.render(
  <Router children={routes} />,
  document.getElementById('react-root')
)
