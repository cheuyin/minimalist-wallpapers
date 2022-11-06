class Canvas {
	constructor(text, width, height, lightModeOn) {
		// Add HTML Canvas stuff
		this.canvas = document.querySelector("canvas");
		this.ctx = this.canvas.getContext("2d");
		this.canvas.width = width;
		this.canvas.height = height;

		this.text = text;
		this.lightModeOn = lightModeOn;
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
				this.canvas.width = 1170;
				this.canvas.height = 2532;
				break;
			case "tablet":
				this.canvas.width = 2388;
				this.canvas.height = 1668;
				break;
			case "desktop":
				this.canvas.width = 3840;
				this.canvas.height = 2160;
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
