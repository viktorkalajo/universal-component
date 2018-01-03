var React = require('react')
var PropTypes = require('prop-types')

var universal = require('./helpers/universal')

class Incrementer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.initialValue
    }
  }

  increment () {
    this.setState({
      value: this.state.value + 1
    })
  }

  decrement () {
    this.setState({
      value: this.state.value - 1
    })
  }

  render () {
    return (
      <div>
        <p className='lead'>
          Current value: {this.state.value}
        </p>
        <button className='btn btn-danger' onClick={() => this.decrement()}>
          Decrement
        </button>
        <button className='btn btn-success' onClick={() => this.increment()}>
          Increment
        </button>
      </div>
    )
  }
}

Incrementer.propTypes = {
  initalValue: PropTypes.number
}

module.exports = universal(Incrementer)
