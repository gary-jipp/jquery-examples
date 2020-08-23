$(function () {
  $("#add").on("click", function (event) {
    addListItem($("#mylist"));
    $("input").focus();
  });

  $("#clear").on("click", function (event) {
    $("#input").val("");
  });

  $("#reset").on("click", function (event) {
    $("#mylist").empty();
  });
});

function addListItem(list) {
  const item = $("<li>");
  const text = $("#input").val();
  item.text(text);
  list.append(item);
}

function toggleHidden($item) {
  $item.toggleClass("hidden");
}
