import Tank from './Tank';
import Loop from './Loop';

var tanks = [];
var players = [];
let updateTime = 50;
let olUpdateTime = 0;

var spawnTank = function(playerID)
{
	let tank = new Tank(playerID, 10, 10);
	tanks.push(tank);

	return tank;
};

const start = function(io)
{
	olUpdateTime = Date.now();
	io.on('connection', function (socket) {

		addPlayer(socket);

		socket.on('update', function () {
			// socket.emit('update');
		});

		socket.on('disconnect', function(){
			removePlayer(socket);
		});

		spawnTank(socket.id);
	});
};

Loop(50, dt =>
{
	var data = tanks.map ( t => t.getData() );
	tanks.forEach( t => t.update(dt) );
	players.forEach( p => p.emit('update', data) );
});

const addPlayer = function(socket)
{
	players.push(socket);
	console.log('added player ' + socket.id );
};

const removePlayer = function(socket)
{
	const index = players.indexOf(socket);

	if (index !== -1) {
		players.splice(index, 1);
		console.log('removed player ' + socket.id );
	}
};

export default start;
