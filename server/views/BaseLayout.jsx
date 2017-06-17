var React = require('react')
var PropTypes = require('prop-types')

class BaseLayout extends React.Component {
  render () {
    return (
      <html>
        <head>
          <title>Minimal universal component example</title>
          <link
            href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
            rel='stylesheet'
          />
          <script src='./client.bundle.js' />
        </head>
        <body>
          <div className='container'>
            <ul className='nav nav-tabs'>
              <li role='presentation'><a href='/'>Universal components</a></li>
              <li role='presentation'><a href='/ordinary-page'>Ordinary page</a></li>
            </ul>
            {this.props.children}
          </div>
        </body>
      </html>
    )
  }
}

BaseLayout.propTypes = {
  children: PropTypes.node
}

module.exports = BaseLayout
