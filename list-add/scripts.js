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

function addListitem(list) {
  const item = $("<li>");
  const text = $("#input").val();
  item.text(text);
  list.append(item);
}

function toggleHidden($item) {
  $item.toggleClass("hidden");
}
