function initiateControls(canvas) {
	function initiateGenerateWallpaperButton() {
		const phrase = document.querySelector(".phrase input");
		const generateWallpaperButton = document.querySelector(".generate button");
		generateWallpaperButton.addEventListener("click", () => {
			canvas.updateText(phrase.value);
			canvas.render();
		});
	}

	function initiateInstantPreview() {
		const phraseInput = document.querySelector(".phrase input");
		phraseInput.addEventListener("input", (event) => {
			canvas.updateText(event.target.value);
			canvas.render();
		});
	}

	function initiateLightDarkModeButton() {
		const lightDarkModeButton = document.querySelector(
			".light-dark-mode button"
		);

		lightDarkModeButton.addEventListener("click", () => {
			canvas.switchMode();
			canvas.render();
		});
	}

	function initiateFontStyleToggleButton() {
		const fontStyleToggleButton = document.querySelector(".font-style button");

		fontStyleToggleButton.addEventListener("click", () => {
			canvas.switchFontStyle();
			canvas.render();
		});
	}

	function initiateDisplaySizeOptions() {
		const displaySizeOptions = document.querySelector("#display_sizes");
		displaySizeOptions.addEventListener("change", (event) => {
			canvas.changeDisplaySize(event.target.value);
			canvas.render();
		});
	}

	function initiateDownloadButton() {
		const downloadWallpaperButton = document.querySelector(
			".canvas_container .download_button"
		);
		downloadWallpaperButton.addEventListener("click", () => {
			const link = document.createElement("a");
			link.download = "minipaper.png";
			link.href = document.querySelector(".main_canvas").toDataURL();
			link.click();
		});
	}

	initiateGenerateWallpaperButton();
	initiateLightDarkModeButton();
	initiateFontStyleToggleButton();
	initiateDisplaySizeOptions();
	initiateDownloadButton();
	initiateInstantPreview();
}

export default initiateControls;
