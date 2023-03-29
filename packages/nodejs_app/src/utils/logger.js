const log4js = require('log4js');


let config = {
    appenders: {
        console: {
            type: 'console',
        },
        file: {
            type: 'dateFile',
            filename: 'logs/log',
            pattern: 'yyyy-MM-dd',
            numBackups: 30, //保留1个月
        },
    },
    categories: {
        default: {
            appenders: ['console', 'file'],
            level: process.env.LOGGER_LEVEL || 'info',
        },
    },
    pm2: true,
};

log4js.configure(config);

const logger = log4js.getLogger('default');
module.exports = logger;