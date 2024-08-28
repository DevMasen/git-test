const btn = document.querySelector(".btn");

const randInt = function (start = 0, end = 0) {
	return Math.floor(Math.random() * (Math.abs(end - start) + 1) + start);
	// [0,1) =>*(end-start+1) = [0, end-start+1) =>+start = [start, end+1)=> floor() = [start, end]
};

const generateColor = function () {
	return `rgb(${randInt(0,255)},${randInt(0,255)},${randInt(0,255)})`;
};

btn.addEventListener("click", () => {
    const randomColor = generateColor();
    btn.style.backgroundColor = randomColor;
});
