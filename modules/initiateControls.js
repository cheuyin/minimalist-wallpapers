function initiateControls(canvas) {
	function initiateGenerateWallpaperButton() {
		const phrase = document.querySelector(".phrase input");
		const generateWallpaperButton = document.querySelector(".generate button");
		generateWallpaperButton.addEventListener("click", () =>
			canvas.updateText(phrase.value)
		);
	}

	function initiateLightDarkModeButton() {
		const lightDarkModeButton = document.querySelector(
			".light-dark-mode button"
		);

		lightDarkModeButton.addEventListener("click", () => {
			canvas.switchMode();
		});
	}

	function initiateFontStyleToggleButton() {
		const fontStyleToggleButton = document.querySelector(".font-style button");

		fontStyleToggleButton.addEventListener("click", () => {
			canvas.switchFontStyle();
		});
	}

	function initiateDisplaySizeOptions() {
		const displaySizeOptions = document.querySelector("#display_sizes");
		displaySizeOptions.addEventListener("change", (event) => {
			canvas.changeDisplaySize(event.target.value);
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
}

export default initiateControls;
