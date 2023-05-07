  function toggleLanguage() {
    var languageSelect = document.getElementById("lang-select");
    var selectedLanguage = languageSelect.value;
    var elements = document.querySelectorAll("[lang-" + selectedLanguage + "]");
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var originalText = element.getAttribute("lang-" + selectedLanguage);
      var currentText = element.innerText;
      element.setAttribute("lang-" + selectedLanguage, currentText);
      element.innerText = originalText;
    }
  }