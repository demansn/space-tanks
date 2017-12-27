import EventEmitter from './js/EventEmitter.js';
import TriangleSkin from './js/TriangleSkin.js';
import input from './js/Input.js';

class Server extends EventEmitter
{
	constructor()
	{
		super();
		this.socket = io();
		this.socket.on('update', e => this.update(e) );
	}
	update(events)
	{
		events.forEach( event => this.emit('update', event) );
	}
}

var server = new Server();

server.on('spawn', e => console.log(e) );

var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb, view: document.getElementById('gameCanvas')});

var graphics = new TriangleSkin();

graphics.position.set(200);
app.stage.addChild(graphics);

server.on('update', (data) =>
{
	graphics.x = data.x;
	graphics.y = data.y;
})

app.ticker.add(function(delta)
{
	// if (input.keydown)
	// {
	// 	graphics.rotation += 0.01 * delta;
	// }
});
