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