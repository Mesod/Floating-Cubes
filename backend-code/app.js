/**
 * Created by masood on 12/12/17.
 */
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
// const redis = new require('ioredis')();

server.listen(8081);


io.on('connection', (socket) => {
    console.log(socket.id + " connected!");
    socket.on('newPos', (position)=>{
        let data = {position:position};
        data.id = socket.id;
        console.log(data);
        socket.broadcast.emit('cubesNewPos', data);
    });
})
