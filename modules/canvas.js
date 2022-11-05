class Canvas {
	constructor(text, width, height, lightModeOn) {
		this.text = text;
		this.width = width;
		this.height = height;
		this.lightModeOn = lightModeOn;

		// Add HTML Canvas stuff
		this.canvas = document.querySelector("canvas");
		this.ctx = this.canvas.getContext("2d");
		this.canvas.width = this.width;
		this.canvas.height = this.height;

		// Additional settings
		this.fontSize = this.generateProportionalFontSize();
		this.fontStyle = "serif";

		this.render();
	}

	drawBackground() {
		this.ctx.fillStyle = this.lightModeOn ? "white" : "black";
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	}

	drawText() {
		this.ctx.fillStyle = this.lightModeOn ? "black" : "white";
		this.ctx.textAlign = "center";
		this.ctx.textBaseline = "middle";
		this.ctx.font = `${this.fontSize} ${this.fontStyle}`;
		this.ctx.fillText(this.text, this.canvas.width / 2, this.canvas.height / 2);
	}

	updateText(text) {
		this.text = text;
		this.render();
	}

	generateProportionalFontSize() {
		return this.width / 12 + "px";
	}

	render() {
		this.drawBackground();
		this.drawText();
	}
}

export default Canvas;
