import Canvas from "./modules/canvas.js";

const canvas = new Canvas("Hello", 300, 5000, true);

const phrase = document.querySelector(".phrase input");
const generateWallpaperButton = document.querySelector(".generate button");

generateWallpaperButton.addEventListener("click", () =>
	canvas.updateText(phrase.value)
);
