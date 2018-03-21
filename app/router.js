const Router = require('koa-router')
const { root } = require('./services')

const router = new Router()

router.get('/', root)

module.exports = router
