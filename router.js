var Route = require('express').Router
class Router {
    constructor(context, routerObject) {
        this.context = context
        this.router = new Route()
        console.log(this.router)
        this.queue = require('seq-queue').createQueue(1000)
        this.handleEndPoints(routerObject)
    }

    handleEndPoints(routerObject) {
        console.log(routerObject)
        var self = this
        routerObject.forEach((rb) => {
            if (rb.method == 'post') {
                this.createPostCall(rb.endpoint, rb.cb)
            }

            if (rb.method == 'get') {
                this.createGetCall(rb.endpoint, rb.cb)
            }
        })
    }

    createGetCall(endpoint, cb) {
        console.log(this.router)
        this.router.get(endpoint, (req, res) => {
            this.queue.push((task)=>{
                cb(req, res)
                task.done()
            })
        })
    }

    createPostCall(endpoint, cb) {
        this.router.post(endpoint, (req, res) => {
          this.queue.push((task)=>{
              cb(req, res)
              task.done()
          })
        })
    }

    bind(endpoint) {
        this.context.use(endpoint, this.router)
    }
}

module.exports = Router
