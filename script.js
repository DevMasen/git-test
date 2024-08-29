const btn = document.querySelector(".btn");

const randInt = (start = 0, end = 0) =>
	Math.floor(Math.random() * (Math.abs(end - start) + 1) + start);

const generateColor = () =>
	`rgb(${randInt(0, 255)},${randInt(0, 255)},${randInt(0, 255)})`;

btn.addEventListener("click", () => {
	const randomColor = generateColor();
	btn.style.backgroundColor = randomColor;
});
