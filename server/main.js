var path = require('path')
var express = require('express')
var app = express()
// Since we are not transpiling server-side we need a way for node to
// understand JSX.
// Another option would be to transpile server-side as well as client side
require('node-jsx').install()

const PORT = 3002

/**
 * Set JSX as our view engine. https://github.com/reactjs/express-react-views
 */
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine({beautify: true}))

/**
 * Serve static files
 */
app.use(express.static('build'))

/**
 * Routes
 */
app.get('/', (req, res) => {
  res.render('Home')
})

app.get('/ordinary-page', (req, res) => {
  res.render('OrdinaryPage')
})

/**
 * Start server
 */
app.listen(PORT, () => {
    console.info(`Listening to port ${PORT}`)
})
