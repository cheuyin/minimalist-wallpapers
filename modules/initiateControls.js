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

	initiateGenerateWallpaperButton();
	initiateLightDarkModeButton();
	initiateFontStyleToggleButton();
	initiateDisplaySizeOptions();
}

export default initiateControls;
