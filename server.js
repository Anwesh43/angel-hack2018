const express = require('express')
const app = express()
const path = require('path')
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

const createRouterConfig = () => {
    const postRoutes = require('./postRoutes')
    const getRoutes  = require('./getRoutes')
    const routerConfig = []
    const pushToConfig = (routes, method) => {
        routes.forEach((route) => {
            console.log(routes)
            routerConfig.push({method, cb : route.controller.handle, endpoint : route.endpoint})
        })
    }
    pushToConfig(postRoutes, 'post')
    pushToConfig(getRoutes, 'get')
    return routerConfig
}

const Router = require('./router')

const router = new Router(app, createRouterConfig())

router.bind('/api')

app.use(express.static(path.join(__dirname,'public')))
app.listen('9000', () => {
    console.log("started listening on port 9000")
})
