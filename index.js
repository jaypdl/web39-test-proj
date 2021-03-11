require('dotenv').config()
console.log('woot')

const express = require('express')

const server = express()

server.use(express.json())

console.log(process.env.NODE_ENV)

//We only want cors in Developement this time, this is going to be full stack app, so online will be from same location. In dev, it's different ports
// on Heroku machine, an env variable is called "NODE_ENV" --> "production" or "devlopment"
if (process.env.NODE_ENV === 'devlopment') { 
  const cors = require('cors') 
  server.use(cors())
}