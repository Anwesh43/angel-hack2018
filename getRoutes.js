module.exports = [
    {
        endpoint : '/hello/:name',
        controller : require('./controllers/HelloController')
    },

    {
        endpoint : '/parseSentence/:sentence',
        controller : require('./controllers/SignParseController')
    }
]
