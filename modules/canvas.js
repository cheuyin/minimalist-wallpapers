const displaySizes = {
	phone: {
		width: 1170,
		height: 2532,
	},
	tablet: {
		width: 2388,
		height: 1668,
	},
	desktop: {
		width: 3840,
		height: 2160,
	},
};

const initialDisplaySize = "desktop";
const initialText = "Type something!";

const colours = {
	light: "#FBFBFB",
	dark: "#141414",
};

const fonts = {
	serif: "Open Sans",
	sansSerif: "Georgia",
};

class Canvas {
	constructor() {
		// Add HTML Canvas stuff
		this.canvas = document.querySelector("canvas");
		this.ctx = this.canvas.getContext("2d");
		this.canvas.width = displaySizes[initialDisplaySize].width;
		this.canvas.height = displaySizes[initialDisplaySize].height;

		this.text = initialText;
		this.lightModeOn = true;
		this.fontStyle = ["serif", fonts.serif];

		this.render();
	}

	drawBackground() {
		this.ctx.fillStyle = this.lightModeOn ? colours.light : colours.dark;
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	}

	drawText() {
		const fontSize = this.generateProportionalFontSize();
		this.ctx.fillStyle = this.lightModeOn ? colours.dark : colours.light;
		this.ctx.textAlign = "center";
		this.ctx.textBaseline = "middle";
		this.ctx.font = `${fontSize} ${this.fontStyle[1]}`;
		this.ctx.fillText(this.text, this.canvas.width / 2, this.canvas.height / 2);
	}

	updateText(text) {
		this.text = text;
	}

	switchMode() {
		this.lightModeOn = !this.lightModeOn;
	}

	switchFontStyle() {
		this.fontStyle =
			this.fontStyle[0] === "serif"
				? ["sans-serif", fonts.sansSerif]
				: ["serif", fonts.serif];
	}

	generateProportionalFontSize() {
		return this.canvas.width / 20 + "px";
	}

	changeDisplaySize(size) {
		switch (size) {
			case "phone":
				this.canvas.width = displaySizes.phone.width;
				this.canvas.height = displaySizes.phone.height;
				break;
			case "tablet":
				this.canvas.width = displaySizes.tablet.width;
				this.canvas.height = displaySizes.tablet.height;
				break;
			case "desktop":
				this.canvas.width = displaySizes.desktop.width;
				this.canvas.height = displaySizes.desktop.height;
				break;
			default:
				console.log("Something went wrong with changing the display size");
		}
	}

	render() {
		this.drawBackground();
		this.drawText();
	}
}

export default Canvas;
