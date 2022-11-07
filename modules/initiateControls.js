function initiateControls(canvas) {
	const CHAR_LIMIT = 30;
	const mainCanvas = document.querySelector(".main_canvas");
	const phraseInput = document.querySelector(".phrase input");
	const lightDarkModeButton = document.querySelector(".light-dark-mode button");
	const characterCounter = document.querySelector(".phrase .character_counter");
	const fontStyleToggleButton = document.querySelector(".font-style button");
	const displaySizeOptions = document.querySelector("#display_sizes");
	const downloadWallpaperButton = document.querySelector(
		".canvas_container .download_button"
	);

	function initiatePhraseInput() {
		phraseInput.maxLength = CHAR_LIMIT;
		phraseInput.addEventListener("input", (event) => {
			updateWallpaperPhrase(event);
			updateCharacterCounter();
		});
	}

	function updateWallpaperPhrase(event) {
		canvas.updateText(event.target.value);
		canvas.render();
	}

	function initiateLightDarkModeButton() {
		lightDarkModeButton.addEventListener("click", () => {
			canvas.switchMode();
			canvas.render();
		});
	}

	function initiateFontStyleToggleButton() {
		fontStyleToggleButton.addEventListener("click", () => {
			canvas.switchFontStyle();
			canvas.render();
		});
	}

	function initiateDisplaySizeOptions() {
		displaySizeOptions.addEventListener("change", (event) => {
			canvas.changeDisplaySize(event.target.value);
			canvas.render();
		});
	}

	function initiateDownloadButton() {
		downloadWallpaperButton.addEventListener("click", () => {
			const link = document.createElement("a");
			link.download = "minipaper.png";
			link.href = mainCanvas.toDataURL();
			link.click();
		});
	}

	function updateCharacterCounter() {
		const currentCharacterCount = phraseInput.value.length;
		characterCounter.textContent = `${currentCharacterCount} / ${CHAR_LIMIT}`;
	}

	initiateLightDarkModeButton();
	initiateFontStyleToggleButton();
	initiateDisplaySizeOptions();
	initiateDownloadButton();
	initiatePhraseInput();
	updateCharacterCounter();
}

export default initiateControls;
