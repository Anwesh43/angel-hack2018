const Controller = require('./Controller')
const request = require('request')
const parseUrl = 'http://35.154.90.117/parse?sentence='
const cacheService = require('../services/CacheService')
class SignParserController extends Controller {
    handle(req,res) {
        const sentence = req.params.sentence
        const resp = cacheService.get(sentence)
        if (resp) {
            console.log(`${resp} for ${sentence} got from cache`)
            res.json(resp)
        }
        else {
          request.get(`${parseUrl}${sentence}`,(err, res1, body) => {
              if (err == null) {
                  console.log(body)
                  cacheService.put(sentence, body)
                  res.json(body)
              }
              else {
                  res.json({error:err})
              }
          })
        }
    }
}

module.exports = new SignParserController()
