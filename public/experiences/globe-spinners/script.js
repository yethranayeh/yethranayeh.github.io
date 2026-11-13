const SVG_NS = 'http://www.w3.org/2000/svg';
const DEG = Math.PI / 180;
const DEG_SAMPLE = 4;
const RADIUS = 30;
const root = document.getElementById('root');

const configs = [
	{
		duration: 1000,
		direction: 'cw',
		gridSize: 12,
		tilt: 10,
		color: 'hsl(223, 10%, 50%)',
		opacity: 0.3
	},
	{
		duration: 500,
		direction: 'ccw',
		gridSize: 8,
		tilt: 15,
		color: 'hsl(3,90%,50%)',
		opacity: 0.2
	},
	{
		duration: 400,
		direction: 'cw',
		gridSize: 16,
		tilt: 30,
		color: 'hsl(223,90%,50%)',
		opacity: 0.5
	},
	{
		duration: 800,
		direction: 'ccw',
		gridSize: 10,
		tilt: -25,
		color: 'hsl(163,90%,50%)',
		opacity: 0.4
	}
];

const createSvgElement = (tagName, attributes = {}) => {
	const element = document.createElementNS(SVG_NS, tagName);
	Object.entries(attributes).forEach(([name, value]) => {
		element.setAttribute(name, value);
	});
	return element;
};

const buildGrid = (gridSize) => {
	const cell = 360 / gridSize;
	const lines = [];

	for (let index = 0; index < gridSize; index += 1) {
		const meridian = [];
		const steps = Math.round(180 / DEG_SAMPLE);
		for (let step = 0; step <= steps; step += 1) {
			meridian.push({ lat: -90 + 180 * step / steps, lon: index * cell });
		}
		lines.push(meridian);
	}

	for (let index = 0; index * cell < 90; index += 1) {
		const makeParallel = (lat) => {
			const parallel = [];
			const steps = Math.round(360 / DEG_SAMPLE);
			for (let step = 0; step <= steps; step += 1) {
				parallel.push({ lat, lon: 360 * step / steps });
			}
			return parallel;
		};

		lines.push(makeParallel(index * cell));
		if (index > 0) {
			lines.push(makeParallel(-index * cell));
		}
	}

	return lines;
};

const project = (lat, lon, cosTilt, sinTilt) => {
	const phi = lat * DEG;
	const lambda = lon * DEG;
	const cosPhi = Math.cos(phi);
	const x = RADIUS * cosPhi * Math.sin(lambda);
	const y = RADIUS * Math.sin(phi);
	const z = RADIUS * cosPhi * Math.cos(lambda);

	return {
		x,
		y: -(y * cosTilt - z * sinTilt),
		z: y * sinTilt + z * cosTilt
	};
};

const fixed = (number) => number.toFixed(2);

const trace = (lines, spin, tilt) => {
	const cosTilt = Math.cos(tilt * DEG);
	const sinTilt = Math.sin(tilt * DEG);
	let back = '';
	let front = '';

	for (const line of lines) {
		let previous = null;
		let facing = true;
		let segment = '';
		const flush = () => {
			if (facing) {
				front += segment;
			} else {
				back += segment;
			}
		};

		for (const pointData of line) {
			const point = project(pointData.lat, pointData.lon + spin, cosTilt, sinTilt);
			const near = point.z >= 0;

			if (previous === null) {
				facing = near;
				segment = ` M${fixed(point.x)} ${fixed(point.y)}`;
			} else if (near !== facing) {
				const crossing = previous.z / (previous.z - point.z);
				const x = previous.x + (point.x - previous.x) * crossing;
				const y = previous.y + (point.y - previous.y) * crossing;
				segment += ` L${fixed(x)} ${fixed(y)}`;
				flush();
				facing = near;
				segment = ` M${fixed(x)} ${fixed(y)} L${fixed(point.x)} ${fixed(point.y)}`;
			} else {
				segment += ` L${fixed(point.x)} ${fixed(point.y)}`;
			}

			previous = point;
		}

		flush();
	}

	return { back: back.trim(), front: front.trim() };
};

const createGlobe = (config) => {
	const cells = Math.max(2, Math.round(config.gridSize));
	const cell = 360 / cells;
	const angle = Math.min(359, Math.max(-359, config.tilt));
	const lines = buildGrid(cells);
	const wrapper = document.createElement('div');
	const svg = createSvgElement('svg', {
		class: 'globe',
		role: 'img',
		'aria-label': 'Spinning globe showing only its lines of latitude and longitude',
		viewBox: '0 0 64 64',
		width: '64',
		height: '64'
	});
	const group = createSvgElement('g', {
		fill: 'none',
		stroke: 'currentcolor',
		'stroke-linecap': 'round',
		'stroke-linejoin': 'round',
		'stroke-width': '1',
		transform: 'translate(32 32)'
	});
	const back = createSvgElement('path', { class: 'globe__line globe__line--back' });
	const fill = createSvgElement('circle', {
		class: 'globe__fill',
		r: RADIUS,
		fill: config.color,
		'fill-opacity': config.opacity
	});
	const front = createSvgElement('path', { class: 'globe__line' });
	const outline = createSvgElement('circle', { class: 'globe__line', r: RADIUS });

	group.append(back, fill, front, outline);
	svg.append(group);
	wrapper.append(svg);
	root.append(wrapper);

	const draw = (time) => {
		const progress = (time % config.duration) / config.duration;
		const spin = (config.direction === 'cw' ? -1 : 1) * cell * progress;
		const paths = trace(lines, spin, angle);
		back.setAttribute('d', paths.back);
		front.setAttribute('d', paths.front);
	};

	return draw;
};

const draws = configs.map(createGlobe);
const startTime = performance.now();

const render = (time) => {
	draws.forEach((draw) => draw(time - startTime));
	requestAnimationFrame(render);
};

requestAnimationFrame(render);
