var React = require('react')
var ReactDOM = require('react-dom')

var components = require('./components')

window.__data = {}

function renderUniversalComponents () {
  /**
   * Each universal component stores their data (props and component name) on
   * window.__data[<component id>] so that we an access it on the client.
   * See views/UniversalComponent.jsx for details
   */
  Array
    .from(document.querySelectorAll('.universal-component'))
    .forEach(universalComponent => {
      var id = universalComponent.id
      var data = window.__data[id]
      if (!components[data.componentName]) {
        return console.error(Error(`Failed to mount component "${data.componentName}", please register it in client/components.js.`))
      }
      var props = data.props
      var component = components[data.componentName]

      ReactDOM.render(
        React.createElement(component, props),
        document.getElementById(id)
      )
    })
}

window.addEventListener('DOMContentLoaded', renderUniversalComponents, false)
