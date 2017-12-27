
export default function run(updateTime, update)
{
	let startTick = Date.now();
	let lastTick = startTick;

	const tick = () => {
		const now = Date.now();
		const dt = now - lastTick;
		update(dt);
		lastTick = now;

		setTimeout(tick, updateTime);
	};

	setTimeout(tick, updateTime);
}
