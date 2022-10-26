const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1920;
canvas.height = 1080;

const phrase = document.querySelector(".phrase input");
const generateWallpaperButton = document.querySelector(".generate button");

generateWallpaperButton.addEventListener("click", drawWallpaper);

function drawBackground() {
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawText(text) {
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.font = "150px serif";
	ctx.fillText(text, canvas.width / 2, canvas.height / 2);
}

function drawWallpaper() {
	const wallpaperText = phrase.value;
	drawBackground()
	drawText(wallpaperText)
}