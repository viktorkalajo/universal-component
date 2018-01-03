var React = require('react')
var ReactDOM = require('react-dom')

// These components will be mounted
var components = require('./components')

function renderUniversalComponents () {
  /**
   * Mount each component that has used the HOC universal/helpers/universal.js on the server side
   * Components must also be registered in client/components to work
   */
  Array
    .from(document.querySelectorAll('.universal-component'))
    .forEach(universalComponent => {
      var props = JSON.parse(universalComponent.dataset.props);
      var componentName = universalComponent.dataset.componentname;
      if(!components[componentName]) {
        throw new Error(`You have to register your component "${componentName}" in order to use it universally!`)
      }
      ReactDOM.render(
        React.createElement(components[componentName], props),
        universalComponent
      )
    })
}

window.addEventListener('DOMContentLoaded', renderUniversalComponents, false)
