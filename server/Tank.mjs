class Tank
{
	constructor(playerID, x, y)
	{
		this.playerID = playerID;
		this.x = x;
		this.y = y;
		this.angle = Math.atan2(100, 100);
		this.speed = 5;
	}
	update(dt)
	{
		this.x += Math.cos(this.angle) * this.speed;
		this.y += Math.sin(this.angle) * this.speed;
	}
	getData()
	{
		return {
			playerID: this.playerID,
			x: this.x,
			y: this.y,
			angle: this.angle,
			speed: this.speed
		};
	}
}

export default Tank;
