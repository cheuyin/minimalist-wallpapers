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

	initiateGenerateWallpaperButton();
	initiateLightDarkModeButton();
	initiateFontStyleToggleButton();
}

export default initiateControls;
