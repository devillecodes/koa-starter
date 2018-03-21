require('dotenv-safe').config({ silent: true }) // eslint-disable-line
const env = process.env.NODE_ENV || 'development'

const v8 = require('v8')
const Koa = require('koa')
const koaLogger = require('koa-logger')
const koaBody = require('koa-body')
const router = require('./router.js')

const app = (module.exports = new Koa())
const port = process.env.PORT || 8080

app.use(koaLogger())
app.use(koaBody())
app.use(router.routes())

if (!module.parent) {
  app.listen(port)
  const totalHeapSize = v8.getHeapStatistics().total_available_size
  const totalHeapSizeInGb = (totalHeapSize / 1024 / 1024 / 1024).toFixed(2)
  console.log(
    `App is running under env '${env}', listening on port ${port}, and has an available heap size of ${totalHeapSize} bytes (~${totalHeapSizeInGb}GB)`
  )
}
