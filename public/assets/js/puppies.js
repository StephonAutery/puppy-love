// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-adopted").on("click", function (event) {
    var id = $(this).data("id");
    var newAdopted = $(this).data("newadopted");

    var newAdoptState = {
      adopted: newAdopted
    };

    // Send the PUT request.
    $.ajax("/api/puppies/" + id, {
      type: "PUT",
      data: newAdoptState
    }).then(
      function () {
        console.log("changed adopted to", newAdopted);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newPuppy = {
      name: $("#puppy").val(),
      adopted: $("[name=adopted]:checked").val()
    }
    // Send the POST request.
    $.ajax("/api/puppies", {
      type: "POST",
      data: newPuppy
    }).then(
      function () {
        console.log("added new puppy");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-puppy").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/puppies/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted puppy", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});