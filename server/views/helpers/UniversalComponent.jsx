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
          className='universal-component'
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
            __html: `window.__data['${this.props.id}'] = {props: ${jsonComponentProps}, componentName: '${this.props.component.name}'}`
          }}
        />
      </div>
    )
  }
}

UniversalComponent.propTypes = {
  id: PropTypes.string.isRequired,
  componentProps: PropTypes.object.isRequired,
  component: PropTypes.any.isRequired // React component
}

module.exports = UniversalComponent
