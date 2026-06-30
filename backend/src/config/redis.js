const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: '3Pved2y19w49hpmOvsFD6QHX7Q8VY91C',
    socket: {
        host: 'redis-12163.c246.us-east-1-4.ec2.cloud.redislabs.com',
        port: 12163
    }
});

module.exports = redisClient;
