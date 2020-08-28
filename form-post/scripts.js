$(function () {
  
  // submit form on button click
  $("#send").on("click", function (event) {
    const data = $("#myForm").serialize();
    // Show request on page
    $("#request").text(data);

    $.post("http://localhost:8080/api/form", data, res => {
      // Write response to page
      $("#response").html(JSON.stringify(res));
    });
  });

  $("#clear").on("click", function (event) {
    $("#request").text("");
    $("#response").html("");
  });
});
