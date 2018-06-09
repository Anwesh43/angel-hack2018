const Controller = require('./Controller')
class HelloController extends Controller {
    handle(req, res) {
        res.send(`hello ${req.params.name}`)
    }
}

module.exports = new HelloController()
