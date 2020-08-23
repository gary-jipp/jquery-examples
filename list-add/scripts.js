$(function () {
  // Note order is important here
  $("#add").on("click", function (event) {
    addListitem($("#mylist"));
    $("input").focus();
  });

  $("#clear").on("click", function (event) {
    $("#input").val("");
  });

  $("#reset").on("click", function (event) {
    $("#mylist").empty();
  });
});

function addListitem(parent) {
  const child = $("<li>");
  const text = $("#input").val();

  child.text(text);
  parent.append(child);
}

function toggleHidden($item) {
  $item.toggleClass("hidden");
}
