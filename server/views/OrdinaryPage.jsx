var React = require('react')

var BaseLayout = require('./BaseLayout')

class OrdinaryPage extends React.Component {
  render () {
    return (
      <BaseLayout>
        <h1 className='h2'>Plain ol' page</h1>
        <p className='lead'>This page is an ordinary server rendered page.</p>
      </BaseLayout>
    )
  }
}

module.exports = OrdinaryPage
