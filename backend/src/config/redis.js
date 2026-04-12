const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
     socket: {
       host: 'redis-15568.c246.us-east-1-4.ec2.cloud.redislabs.com',
        port: 15568
    }
});

module.exports = redisClient;