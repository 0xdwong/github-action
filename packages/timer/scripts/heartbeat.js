require('dotenv').config();
const axios = require('axios');
const logger = require('../logger');


async function main(){
    const result = await axios({
        "method": "GET",
        "url": "https://api.decert.me/health",
        "headers": {
            "Content-Type": "application/json; charset=utf-8"
        }
    })

    if(result.status === 200 && result.statusText === 'OK') {
        logger.info('heartbeat succeed');
        return true;
    }

    // 失败的话，在这里添加逻辑
    logger.error('heartbeat failed', {status: result.status});
    return false;
}

main().then((result) =>{
    process.exit(0);
}).catch(err => {
    console.error(err);
    process.exit(1);
})

