const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1920;
canvas.height = 1080;

const phrase = document.querySelector(".phrase input");
const generateWallpaperButton = document.querySelector(".generate button");
const modeToggleButton = document.querySelector(".light-dark-mode button");

generateWallpaperButton.addEventListener("click", drawWallpaper);

modeToggleButton.addEventListener("click", toggleMode);

function drawBackground(lightModeOn) {
	ctx.fillStyle = lightModeOn ? "white" : "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawText(text, lightModeOn) {
	ctx.fillStyle = lightModeOn ? "black" : "white";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.font = "150px serif";
	ctx.fillText(text, canvas.width / 2, canvas.height / 2);
}

function drawWallpaper() {
	const wallpaperText = phrase.value;
	const lightModeOn = getCurrentMode();
	drawBackground(lightModeOn);
	drawText(wallpaperText, lightModeOn);
}

function getCurrentMode() {
	const modeToggleButton = document.querySelector(".light-dark-mode button");
	const lightModeOn = modeToggleButton.classList.contains("light");
	return lightModeOn;
}

function toggleMode() {
	const modeToggleButton = document.querySelector(".light-dark-mode button");
	modeToggleButton.classList.toggle("light");
}