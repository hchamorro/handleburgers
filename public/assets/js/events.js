$(function() {
  $(".devburger").on("click", function(event) {
    let id = $(this).data("burgerid");
    let isDevoured = $(this).data("isdevoured");
    let eatBurger = {
      devoured: !isDevoured
    };

    $.ajax(`/api/burgers/${id}`, {
      type: "PUT",
      data: eatBurger
    }).then(() => {
      console.log("burger eaten");
      location.reload();
    });
  });

  $(".create-form").on("submit", event => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      name: $("#burg")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(() => {
      console.log("created burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
