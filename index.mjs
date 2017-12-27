import express	from 'express';
import path		from 'path';
import http		from 'http';
import socket	from 'socket.io';
import server	from './server';

var app = express();
var httpApp = http.Server(app);
var io = socket(httpApp);

app.use(express.static(path.join('./', 'client')));

httpApp.listen(3000, function(){
	console.log('listening on *:3000');
});

server(io);
