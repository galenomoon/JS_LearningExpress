const express = require('express')
const app = express()
app.listen(3000, () => console.log("Backend is Running <3"))

// -----------------------------------------------------------

//to response any HTTP verb (you can use app.all too!!)
app.use('/any', (req, res) => res.send("Any verb"))

//or you can response to a specific verb
app.post('/post', (req, res) => res.send("I'm post"))
app.get('/get', (req, res) => res.send("I'm get"))

// -----------------------------------------------------------

//you can change the response format like...

//HTML
app.use('/html', (req, res) => res.send("<b>Any</b> <h1>verb</h1>"))

//JSON
app.get('/json', (req, res) => res.json({
  name: 'Guilherme Galeno Santiago',
  wife: 'Luana Claricy Santiago Galeno',
  mission_name: "Apollo 11"
}))

// -----------------------------------------------------------

//you can run more functions to same route, but calling the next

app.use("/same_endpoint", (req, res, next) => { console.log("Before"); next() })
app.use("/same_endpoint", (req, res, next) => { res.send("content"); console.log("While"); next() })
app.use("/same_endpoint", (req, res, next) => { console.log("After"); })

//------------------------------------------

const hello = require('./middlewareTest')
//YOU CAN USE MIDDLEWARES
app.use(hello('Galeno'))

//------------------------------------------

// get your request query
app.get('/clients/state', (req, res) => res.send(`Hello ${req.query.name}, Welcome!`))

//get your request params
app.get('/clients/:id', (req, res) => res.send(`Client ${req.params.id} has been selected`))

