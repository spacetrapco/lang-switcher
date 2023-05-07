document.addEventListener("DOMContentLoaded", () => {
	const allElements = document.querySelectorAll("*");

	const langElements = Array.from(allElements).filter((element) => {
		return Array.from(element.attributes).some((attr) =>
			attr.name.startsWith("lang-")
		);
	});

	langElements.forEach((element) => {
		const text = element.textContent.trim();

		element.setAttribute("main-lang", text);
	});
});

const langSelect = document.getElementById("lang-select");
langSelect.onchange = toggleLanguage;

function toggleLanguage() {
	var languageSelect = document.getElementById("lang-select");
	var selectedLanguage = languageSelect.value;

	var elements = document.querySelectorAll("[main-lang]");

	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
		var originalText = element.getAttribute("main-lang");
		var translatedText = element.getAttribute("lang-" + selectedLanguage);

		if (translatedText && translatedText !== originalText) {
			element.innerText = translatedText;
		} else {
			element.innerText = originalText;
		}
	}
}
