$(document).ready(function(){
// ----- START of document.ready function -----

    $("button").on("click", function(){
        var x = $(this).data("search")
        
        var queryURL = "http://api.giphy.com/v1/gifs/search?q="+x+"&api_key=zfsw6K8gNmu19gskqjynTaRS65B7R0SF&limit=10"
        console.log(queryURL)
    
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .done(function(response){
            console.log(response.data[0])
            
            for (var i = 0; i < response.data.length; i++){
                $('.GIFArea').prepend("<p>Rating:" +response.data[i].rating+ "</p>")
                $('.GIFArea').prepend("<img src = '" +response.data[i].images.downsized.url + "'>")
            }
    
        })
    })


    // ----- END of document.ready function ----- 
})