$(function () {
  // Handle form submit
  $("#myForm").on("submit", function (event) {
    event.preventDefault();
    var $form = $(this);

    // Show UrlEncoded form data
    const data = $form.serialize();
    $("#request1").html(data);

    // Create object
    const obj = {};

    // Find all the 'input' and 'textarea' children
    const inputs = $form.find("input,textarea");
    for (input of inputs) {
      obj[input.name] = input.value;
    }

    // add more stuff to object

    const json = JSON.stringify(obj, undefined, 1);
    console.log(json);
    $("#request2").text(json);
  });

  $("#clear").on("click", function (event) {
    $("#request1").text("");
    $("#request2").text("");
    $("#response").html("");
  });
});
