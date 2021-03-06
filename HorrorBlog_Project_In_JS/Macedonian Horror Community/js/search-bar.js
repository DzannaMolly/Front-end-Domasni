function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toLowerCase();
    if (!filter) {
        $("#searchResults").css("visibility", "hidden");
        return;
    }

    
    var movieApp = {};
    movieApp.apiKey = "7e61ac2d3f02800a809999382bb9944e";
    movieApp.apiUrl = "https://api.themoviedb.org/3/";
    movieApp.imageUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";

    
    $.ajax({
		url: movieApp.apiUrl + "search/movie",
		method: "GET",
		dataType: "json",
		data: {
            api_key: movieApp.apiKey,
			query: filter
		}
	})
	.then(function(apiReturn1) {
        movieApp.movies = apiReturn1.results.filter(function(movie){
      
            
            if (movie.genre_ids.includes(27)) {
             
                return movie;
            }
        });
     
        $("#searchResults").html("");
        for (i = 0; i < movieApp.movies.length; i++) {

            var container = $("<li>");
            var image = $("<img>");
            image.attr("src", movieApp.imageUrl + movieApp.movies[i].poster_path);
            image.appendTo(container);
            var link = $("<a>").text(movieApp.movies[i].title).css("cursor", "pointer").addClass("thatResults").attr("id", movieApp.movies[i].id);
            link.appendTo(container);
            container.appendTo("#searchResults");
            $("#searchResults").css("visibility", "visible");
        }
	}); 

    $("#searchResults").on("click", ".thatResults", async (event) => {
        console.log(event.target);
        $(event.target).attr("href", "https://www.themoviedb.org/movie/" + event.target.id).attr("target", "_blank")
        
    })


}
