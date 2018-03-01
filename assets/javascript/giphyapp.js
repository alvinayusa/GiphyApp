$(document).ready(function () {
    // ----- START of document.ready function -----

    // initial arrays of car brands
    var carBrand = ["Tesla", "Honda", "Toyota", "Lexus"]
    // console.log(carBrand)
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
            event.preventDefault()

            var carBrandInput = $("#carBrands-input").val().trim()
            var newCarButton = $("#buttonSection")
            
            // render new button for the new car brand
            newCarButton.append("<button class='car-btn' data-name = '"+carBrandInput+"' >" +carBrandInput+  "</button>")
            
            // add new car brand into the array
            carBrand.push(carBrandInput)
        
            // clear input text box
            $("#carBrands-input").val(" ")
        })

    function displayGIFs () {

        
    }
    
    // this function appends the GIF for the initial buttons set in the HTML
    $(document).on("click", ".car-btn", function(){

        // var x = $(this).data("search")
       
        var brands = $(this).attr("data-name")
        // console.log(brands)
        var queryURL = "http://api.giphy.com/v1/gifs/search?q="+brands+"&api_key=zfsw6K8gNmu19gskqjynTaRS65B7R0SF&limit=10"
            // console.log(queryURL)
       
            $.ajax({
            url: queryURL,
            method: "GET",
       
        }).then(function(response){
            console.log(response.data[0])
            
            var gifSection = $("<div class = 'gifs'>").appendTo("#newCarBrands")
    
            for (var i = 0; i < response.data.length; i++){
                // console.log(response.data.length)
                gifSection.prepend("<p>Rating:" +response.data[i].rating+ "</p>")
                gifSection.prepend("<img src = '" +response.data[i].images.fixed_height_still.url + "' data-still = '" +response.data[i].images.fixed_height_still.url+"' data-animate = '" +response.data[i].images.fixed_height.url+"' state = 'still' >")

                $("img").on("click", function(){
                    console.log("clicked")
                    var state = $(this).attr("state")

                    if (state === "still"){
                        $(this).attr("src", $(this).attr("data-animate"))
                        $(this).attr("state", "active")
                        // console.log(state)
                    }
                    else {
                        $(this).attr("src", $(this).attr("data-still"))
                        $(this).attr("state", "still")
                    }
                    
                })// --- END of img click function
                
            }// --- END of For Loop ---

        })
        // gifSection.empty()
    })
    
    

// ----- END of document.ready function ----- 
})