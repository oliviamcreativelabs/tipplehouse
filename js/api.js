// Cocktail DB API

$(document).ready(function () {

    var queryURL = 'https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=' + userInput

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://www.thecocktaildb.com/api/json/v2/9973533/recent.php",
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                    "x-rapidapi-key": "b8a6c912e5msh8577bad2b77e723p115961jsnbe7c9190c1a1"
                }
            }

            // ----- API endpoints ---- //

            // Search by name:
            // https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
            // https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=margarita
            // https://www.thecocktaildb.com/api/json/v2/9973533/recent.php
            //

            // ─── CORS PREFILTER ─────────────────────//

            jQuery.ajaxPrefilter(function (options) {
                if (options.crossDomain && jQuery.support.cors) {
                    options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
                }
            });

            // ─────────────────── END PREFILTER ─────//

            // ------- API Call ------- //

            $("#userInput").on("click", function() {

            $.ajax(settings).done(function (response) {
                for (var i = 0; i < 10; i++) {
                    var choice = response.drinks[i];
                    console.log(choice);

                    // ---- Stringify option --- //
                    // var JSONdrink = JSON.stringify(choice.strDrink);
                    // console.log(JSONdrink);

                    // ------- Variables ------ //
                    var drink = $("<h3 class='drink'>").text(choice.strDrink);
                    var glass = $("<h4 class='glass'>").text(choice.strGlass);
                    var ingred1 = $("<p class='ingred1'>").text(choice.strIngredient1);
                    var measure1 = $("<p class='measure1'>").text(choice.strMeasure1);
                    var ingred2 = $("<p class='ingred2'>").text(choice.strIngredient2);
                    var measure2 = $("<p class='measure2'>").text(choice.strMeasure2);
                    var ingred3 = $("<p class='ingred1'>").text(choice.strIngredient3);
                    var measure3 = $("<p class='measure3'>").text(choice.strMeasure3);
                    var image = $("<img>").attr("src", choice.strDrinkThumb);

                    // Store user input
                    var userInput = $(".res").val().trim();
                    console.log(userInput);

                    // -- Append to Document -- //
                    $(".list-group-item").append(userInput);
                    $(".list-group-item").append(drink);
                    $(".list-group-item").append(glass);
                    $(".list-group-item").append(ingred1);
                    $(".list-group-item").append(measure1);
                    $(".list-group-item").append(ingred2);
                    $(".list-group-item").append(measure2);
                    $(".list-group-item").append(ingred3);
                    $(".list-group-item").append(measure3);
                    $(".list-group-item").append(image);
                }
            });
        })
    })