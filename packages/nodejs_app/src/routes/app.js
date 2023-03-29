async function ping(ctx) {
    ctx.response.status = 200;
}

async function hi(ctx) {
    const msg = 'tom';
    let resp = { 'code': '1', 'msg': msg };
    ctx.response.body = resp;
}

module.exports = {
    hi,
    ping
}