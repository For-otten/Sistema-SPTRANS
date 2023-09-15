function alinhar() {
  const inputElements = document.querySelectorAll(".formsarg");

  inputElements.forEach(function (input) {
    const lineBreak = document.createElement("br");

    input.insertAdjacentElement("afterend", lineBreak);
  });
};

function checaOCheck(listChecks){
  listChecks.forEach((item) => {
    $(item).on("change", (event) => {
        const element = event.target;
        const inputCaracters =
            $(element).nextAll(
                ".formsarg:first"
            );

        if (element.checked) {
            $(inputCaracters).removeAttr(
                "disabled"
            );
        } else {
            $(inputCaracters).val(0)
            $(inputCaracters).attr(
                "disabled",
                "disabled"
            );
        }
    });
});
}