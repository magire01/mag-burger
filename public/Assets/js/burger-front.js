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


$("body").on("click", "#devour-btn", () => {
    console.log("Devour Test");
    const tableID = $("#devour-btn").data("id");
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
