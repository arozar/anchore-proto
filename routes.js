const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('index', '/home')
routes.add('vuln', '/images/:id/vuln')

