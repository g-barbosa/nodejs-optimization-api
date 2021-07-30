import express from 'express'
import './src/config/database/mongo'
import './src/config/redis'
import { routes } from './src/routes/routes'
import cluster from 'cluster'
import os from 'os'

const server = express()
const numCPUS = os.cpus().length
server.use(express.json())
server.use(routes)

if (cluster.isMaster) {
  for(let i = 0; i < numCPUS; i++) {
    cluster.fork()
  }
} else {
  server.listen(3000)
}
