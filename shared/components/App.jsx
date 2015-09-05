import React from 'react'

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
  }

  render() {
    return (
      <div id="app-root">
        Hello world<br />
        {this.props.children}
      </div>
    )
  }
}
