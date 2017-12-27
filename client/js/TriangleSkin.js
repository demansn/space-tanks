class TriangleSkin extends PIXI.Graphics
{
	constructor(fillColor = 0x00FF00)
	{
		super();

		this.beginFill(fillColor);
		this.lineStyle(2, 0x000000, 1);

		this.moveTo(0, -15);
		this.lineTo(10, 15);
		this.lineTo(-10, 15);
		this.lineTo(0, -15);
		this.endFill();
	}
}

export default TriangleSkin;
