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

  resetTimer () {
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
        <button className='btn' onClick={() => this.resetTimer()}>
          Reset timer
        </button>
      </div>
    )
  }
}

Counter.propTypes = {
  title: PropTypes.string
}

module.exports = Counter
