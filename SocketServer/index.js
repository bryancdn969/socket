/*let express  = require('express');
let app      = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

io.on('connection', (socket) => {

    socket.on('disconnect', function(){
        io.emit('users-changed', {user: socket.nickname, event: 'left'});
    });

    socket.on('set-nickname', (nickname) => {
        socket.nickname = nickname;
        io.emit('users-changed', {user: nickname, event: 'joined'});
    });

    socket.on('add-message', (message) => {
        io.emit('message', {text: message.text, from: socket.nickname, created: new Date()});
    });
});

var port = process.env.PORT || 3001;

http.listen(port, function(){
    console.log('listening in http://localhost:' + port);
});*/
var socket = require('socket.io'), http = require('http'),
  server = http.createServer(), socket = socket.listen(server);
socket.on('connection', function(connection) {
   console.log('User Connected');
   
   connection.on('message', function(msg){
     socket.emit('message', msg);
   });
});
server.listen(3000, function(){
console.log('Server started');
});
