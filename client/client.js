var React = require('react')
var ReactDOM = require('react-dom')
var Counter = require('../universal/Counter')

window.__data = {}

function renderReactComponents () {
  /**
   * Each universal component stores their data (props) on
   * window.__data[<component id>] so that we an access it on the client.
   * See views/UniversalComponent.jsx
   */
  const data = window.__data['counter']

  ReactDOM.render(
    React.createElement(Counter, data),
    document.getElementById('counter')
  )
}

window.addEventListener('DOMContentLoaded', renderReactComponents, false)
