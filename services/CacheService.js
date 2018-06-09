const redisService = require('./RedisService')
class CacheService {

    constructor() {
        this.sentenceMap = {}
        this.initCache()
    }

    initCache() {
        redisService.getAllResponses((data) => {
            this.sentenceMap = data
            console.log('cache initialized')
            console.log(this.sentenceMap)
        })
    }

    put(sentence, resp) {
        this.sentenceMap[sentence] = resp
        redisService.addSignResponse(sentence, resp, () => {
            console.log(`successfully added ${resp} for ${sentence}`)
        }, () => {
            console.log(`failed to add ${resp} for ${sentence}`)
        })
    }

    get(sentence) {
        return this.sentenceMap[sentence]
    }
}
const cacheService = new CacheService()
module.exports = cacheService
