var React = require('react')
var PropTypes = require('prop-types')

class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      })
    }, 1000)
  }

  resetCounter () {
    this.setState({
      counter: 0
    })
  }

  render () {
    return (
      <div>
        <p className='lead'>
          {this.props.title}{this.state.counter}
        </p>
        <button className='btn btn-primary' onClick={() => this.resetCounter()}>
          Reset counter
        </button>
      </div>
    )
  }
}

Counter.propTypes = {
  title: PropTypes.string
}

module.exports = Counter
