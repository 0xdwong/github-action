const app = require('./routes/app');


const ROUTER = [
    ['get', '/app/ping', app.ping],
    ['get', '/app/hi', app.hi],
]

module.exports = ROUTER;