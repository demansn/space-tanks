import EventEmitter from './EventEmitter.js';

class Input extends EventEmitter
{
	constructor()
	{
		super();

		window.addEventListener('keydown' , () => this._onKeyDown() );
		window.addEventListener('keypress', () => this._onKeyPress() );
		window.addEventListener('keyup'   , () => this._onKeyUp() );
	}

	_onKeyDown(e)
	{
		this.keydown = true;
	}

	_onKeyPress(e)
	{

	}

	_onKeyUp(e)
	{
		this.keydown = false;
	}
}

const input = new Input();

export default input;
