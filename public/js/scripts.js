$("document").ready(function () {
    $("#getProducts").on("click", function (e) {
        e.preventDefault();
        console.log("Hi");
        $.ajax({
            method: "GET",
            url: "/fetch",
            contentType: "application/json",
            success: function (response) {
                // response.render("home",{
                //     reponse : response
                // })
                //console.log(response.products.id);\
                console.log(response);
                $("#products").html(response);
                
                console.log("Hello");
            },
            error: (xhr, status, err) => {
                console.error("error");
            }
        });
    });

    // $("#getForm").submit(function (event) {
    //     event.preventDefault();

    // });
});