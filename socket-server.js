const express = require('express')

const http = require('http')

const app = express()

var server = http.createServer(app)

const socketIO = require('socket.io')

const io = socketIO(server).of('n1')

var sockets = []

io.on('connection', (socket) => {
    sockets.push(socket)
    console.log(socket.id)
    socket.on('stream', (data) => {
        console.log(data)
        sockets.filter(s => socket.id != s.id).forEach((s1) => {
            s1.emit('stream-added', data)
        })
    })
    socket.on('chat-message', (data) => {
        console.log(data)
        sockets.filter(s => socket.id != s.id).forEach((s1) => {
            s1.emit('chat-msg',data)
        })
    })
})

server.listen('9030')
