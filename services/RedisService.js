const redis = require('redis')

const main_key = "messages"

class RedisService {
    constructor() {
        this.client = redis.createClient()
    }

    addSignResponse(sentence, resp, cb, errcb) {
        this.client.hset(main_key, sentence, resp, (err) => {
            if (err == null) {
                cb()
            }
            else {
                errcb()
            }
        })
    }

    getAllResponses(cb, errcb) {
        this.client.hgetall(main_key, (err, data) => {
            if (err == null) {
                cb(data)
            }
            else {
                errcb()
            }
        })
    }
}

module.exports = new RedisService()
