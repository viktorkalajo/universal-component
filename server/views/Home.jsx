var React = require('react')

var BaseLayout = require('./BaseLayout')
var Counter = require('../../universal/Counter')
var Incrementer = require('../../universal/Incrementer')
var UniversalComponent = require('./helpers/UniversalComponent')

class Home extends React.Component {
  render () {
    return (
      <BaseLayout>
        <h1 className='h2'>Universal components</h1>
        <h2 className='h3'>Counter</h2>
        <p>Below is a universal component, rendered both on the server and client.</p>
        <div className='well'>
          <UniversalComponent
            component={Counter}
            componentProps={{ title: 'A very simple counter: ' }}
            id='counter'
          />
        </div>
        <hr />
        <h2 className='h3'>Incrementer</h2>
        <p>Below is another universal component, rendered both on server and client.</p>
        <div className='well'>
          <UniversalComponent
            component={Incrementer}
            componentProps={{ initialValue: 10 }}
            id='incrementer'
          />
        </div>
      </BaseLayout>
    )
  }
}

Home.propTypes = {}

module.exports = Home
