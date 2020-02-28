var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3333;

app.get('/', function(req, res){
  console.log("incoming request")
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log("user connected")
  socket.on('chat message', function(msg){
    console.log("new message: " + msg)
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
