const winston = require('winston')
const redisClient = require('redis').createClient(6379, 'redis')

redisClient.on('error',
  (err) => winston.error(err)
)

redisClient.on('connect',
  () => {}
)

module.exports = redisClient
