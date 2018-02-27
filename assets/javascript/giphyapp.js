$(document).ready(function () {
    // ----- START of document.ready function -----

    // initial arrays of car brands
    var carBrand = ["Tesla", "Honda", "Toyota", "Lexus"]

    // Loop through the given car brands and assign attributes to them
    // ----- START of Loop function for the array of car brands ----
    function createButtons() {

        for (var x = 0; x < carBrand.length; x++) {
            
            var b = $("<button>")

            // // add a class to each button
            b.addClass("car-btn")

            // // add a data attribute to each button
            b.attr("data-name", carBrand[x])

            // // set text for each button
            b.text(carBrand[x])

            // // display each new button to the button section of the HTML
            $("#buttonSection").append(b)
        }
    }createButtons()
    // ----- END of Loop  -----

    // Create button for every new car brand.
        $("#addCarBrand").on("click", function (event) {
            event.prefentDefault()

            var carBrandInput = $("#carBrands-input").val().trim()

        //     // add new car brand into the array
            carBrand.push(carBrandInput)

        //     // create the button
            createButtons()
        })

// // I need to create an input of text with a button
//     $("#add-carBrand").on("click", function () {
//             // event.preventDefault()
//             console.log("clicked")
//             // var newCarBrand = $("#carBrand-input").val().trim()

//             // $("button").append()
//         })

    // this function appends the GIF for the initial buttons set in the HTML
    // $("button").on("click", function(){
    //         var x = $(this).data("search")

    //         var queryURL = "http://api.giphy.com/v1/gifs/search?q="+x+"&api_key=zfsw6K8gNmu19gskqjynTaRS65B7R0SF&limit=10"
    //         console.log(queryURL)

    //         $.ajax({
    //             url: queryURL,
    //             method: "GET"
    //         })
    //         .done(function(response){
    //             console.log(response.data[0])

    //             for (var i = 0; i < response.data.length; i++){
    //                 $('.GIFArea').prepend("<p>Rating:" +response.data[i].rating+ "</p>")
    //                 $('.GIFArea').prepend("<img src = '" +response.data[i].images.downsized.url + "'>")
    //             }

    //         })
    //     })


    // ----- END of document.ready function ----- 
})