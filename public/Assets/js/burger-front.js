$("body").on("click", "#submit-btn", (event) => {
    event.preventDefault(); 
    const newBurger = {
        burger: $("#input-field").val(),
        devoured: 0
    }
    console.log(newBurger);
        
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(() => {
        console.log("Created New Burger");
        location.reload();
    })

});


$("body").on("click", "#devour-btn", function() {
    console.log("Devour Test");
    const tableID = $(this).data("id");
    console.log(tableID);
    const newDevour = {
        devoured: 1
    }
    $.ajax(`/api/burgers/${tableID}`, {
        type: "PUT",
        data: newDevour
    }).then(() => {
        console.log(tableID + " DEVOURED");
        location.reload();
    })

});

$("body").on("click", "#delete-btn", function() {
    const tableID = $(this).data("id");
    $.ajax(`/api/burgers/${tableID}`, {
        type: "DELETE"
    }).then(() => {
        console.log(tableID + " DELETED");
        location.reload();
    })

});