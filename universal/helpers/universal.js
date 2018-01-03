var React = require('react')
var ReactDOMServer = require('react-dom/server')
var PropTypes = require('prop-types')

function componentToString (component, props) {
  var element = React.createElement(component, props)
  return ReactDOMServer.renderToString(element)
}

function isServer() {
  return typeof window === 'undefined';
}

/**
 * Renders a component as a string and makes props and componentname available
 * for client to pick up.
 */
function stringifyComponent(WrappedComponent) {
  return class StringifiedComponent extends React.Component {
    render () {
      var jsonComponentProps = JSON.stringify(this.props)
      return (
        <div
          data-props={jsonComponentProps}
          data-componentname={WrappedComponent.name}
          className='universal-component'
          dangerouslySetInnerHTML={{
            __html: componentToString(
              WrappedComponent,
              this.props
            )
          }}
        />
      )
    }
  }
}

/**
 * Returns a stringified version of the component for the server and
 * a normal version for the client.
 */
function universal(WrappedComponent) {
  if(isServer()) {
    return stringifyComponent(WrappedComponent)
  } else {
    return WrappedComponent;
  }
}

module.exports = universal;
