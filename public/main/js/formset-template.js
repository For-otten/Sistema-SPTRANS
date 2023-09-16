function alinhar() {
  const inputElements = document.querySelectorAll(".formsarg");

  inputElements.forEach(function (input) {
    const lineBreak = document.createElement("br");

    input.insertAdjacentElement("afterend", lineBreak);
  });
};
