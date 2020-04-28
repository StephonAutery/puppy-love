
$(function() {
    $("#addpuppy").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newPuppy = {
          name: $("#puppy").val(),
          adopted: $("[name=adopted]:checked").val()
        }
    
        console.log(newPuppy);
    
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
})
  