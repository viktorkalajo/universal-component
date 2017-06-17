var React = require('react')

var BaseLayout = require('./BaseLayout')
var Counter = require('../../universal/Counter')
var UniversalComponent = require('./helpers/UniversalComponent')

class Home extends React.Component {
  render () {
    return (
      <BaseLayout>
        <h1 className='h2'>Minimal universal component example</h1>
        <UniversalComponent
          component={Counter}
          componentProps={{ title: 'I am counting: ' }}
          id='counter'
        />
      </BaseLayout>
    )
  }
}

Home.propTypes = {}

module.exports = Home
