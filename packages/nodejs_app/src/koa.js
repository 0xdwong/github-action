const Koa = require('koa');
const app = new Koa();
const KoaRouter = require('koa-router');
const router = new KoaRouter();
const rules = require('./router');


for (let rule of rules) {
  let [method, action, handler] = rule;
  method = method.toLowerCase();
  if (method === 'get') {
    router.get(action, handler);
  } else if (method === 'post') {
    router.post(action, handler);
  }
}

app.use(router.routes());

module.exports = app; 
