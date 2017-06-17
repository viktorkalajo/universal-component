var React = require('react')
var ReactDOMServer = require('react-dom/server')
var PropTypes = require('prop-types')

function componentToString (component, props) {
  var element = React.createElement(component, props)
  return ReactDOMServer.renderToString(element)
}

/**
 * Renders a react component to a string and enables the client/browser to
 * access component props on a global variable
 */
class UniversalComponent extends React.Component {
  render () {
    var jsonComponentProps = JSON.stringify(this.props.componentProps)
    return (
      <div>
        <div
          id={this.props.id}
          dangerouslySetInnerHTML={{
            __html: componentToString(
              this.props.component,
              this.props.componentProps
            )
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__data['${this.props.id}'] = ${jsonComponentProps}`
          }}
        />
      </div>
    )
  }
}

UniversalComponent.propTypes = {
  id: PropTypes.string,
  componentProps: PropTypes.object,
  component: PropTypes.any // React component
}

module.exports = UniversalComponent
