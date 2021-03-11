require('dotenv').config()
const path = require('path')
const express = require('express')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'client/build'))) //getting server to serve React

console.log(process.env.NODE_ENV)

//We only want cors in Developement this time, this is going to be full stack app, so online will be from same location. In dev, it's different ports
// on Heroku machine, an env variable is called "NODE_ENV" --> "production" or "devlopment"
if (process.env.NODE_ENV === 'development') { 
  const cors = require('cors') 
  server.use(cors())
}

// our api comes earlier in the pipeline
server.get('/api/hello', (req, res) => {
  res.json({ message: 'WOOT IT WORKS' })
})

// catch-all that just sends back index.html
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
