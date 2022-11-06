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
const initialText = "Science";

class Canvas {
	constructor() {
		// Add HTML Canvas stuff
		this.canvas = document.querySelector("canvas");
		this.ctx = this.canvas.getContext("2d");
		this.canvas.width = displaySizes[initialDisplaySize].width;
		this.canvas.height = displaySizes[initialDisplaySize].height;

		this.text = initialText;
		this.lightModeOn = true;
		this.fontStyle = "serif";

		this.render();
	}

	drawBackground() {
		this.ctx.fillStyle = this.lightModeOn ? "white" : "black";
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	}

	drawText() {
		const fontSize = this.generateProportionalFontSize();
		this.ctx.fillStyle = this.lightModeOn ? "black" : "white";
		this.ctx.textAlign = "center";
		this.ctx.textBaseline = "middle";
		this.ctx.font = `${fontSize} ${this.fontStyle}`;
		this.ctx.fillText(this.text, this.canvas.width / 2, this.canvas.height / 2);
	}

	updateText(text) {
		this.text = text;
		this.render();
	}

	switchMode() {
		this.lightModeOn = !this.lightModeOn;
		this.render();
	}

	switchFontStyle() {
		this.fontStyle = this.fontStyle === "serif" ? "sans-serif" : "serif";
		this.render();
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

		this.render();
	}

	render() {
		this.drawBackground();
		this.drawText();
	}
}

export default Canvas;
