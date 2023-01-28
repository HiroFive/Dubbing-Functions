const elements = {
  wrapPeriods: document.querySelector("#wrapPeriodsResult"),
  submitTextAria: document.querySelector("#submitTextAria"),
  textAria: document.querySelector("#textAria"),
};

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}

function wrapPeriods(text) {
  const sentences = text.split(".");
  let newText = "";
  for (let i = 0; i < sentences.length; i++) {
    newText += sentences[i];
    if (i !== sentences.length - 1) {
      newText += ".</br> </br>";
    }
  }
  elements.wrapPeriods.innerHTML = newText;
}

elements.submitTextAria.addEventListener("click", () => {
  const text = elements.textAria.value;
  wrapPeriods(text);
});
