$(document).ready(function () {
            //each crystal is assigned the value before clicking
                let score;
                let wins = 0;
                let losses = 0;
                let crystalsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
                let numberShown;

            function initializeGame() {
                score = 0;
                console.log("score initialize", score);
                document.querySelector(".userNumber").innerHTML = score;
                //new random values for crystals
                for (let i = 1; i < 5 ; i++) {
                    let currentCrystal = "#crystal" + i;
                    let randomCrystal = crystalsArray[Math.floor(Math.random() * crystalsArray.length)];
                    $(currentCrystal).attr("data-value", randomCrystal);
                    //console.log(currentCrystal);
                }
                function range(low, high) {
                return Array(high - low + 1).fill().map((_, idx) => low + idx)
                }
                numberArray = range(19, 120);
                numberShown = numberArray[Math.floor(Math.random() * numberArray.length)];
                console.log("numberShown initialize", numberShown);
                document.querySelector(".randomComputerNumber").innerHTML = numberShown;
            }
            $(".crystals").on("click", "img", function () {
                //console.log("$(this)",$(this));
                let value = $(this).attr("data-value");
                console.log("value", value);
                let userNumber = parseInt($(".userNumber").html());
                console.log("userNumber", userNumber);
                console.log("numberShown", numberShown);
                let screen = parseInt(value)+parseInt(userNumber);
                console.log("screen", screen);
                document.querySelector(".userNumber").innerHTML = screen;
                if (screen == numberShown) {
                console.log("YOU WIN");
                console.log("final score: ", screen);
                wins++;
                document.querySelector(".wins").innerHTML = wins;
                initializeGame();
                }
                else if (screen > numberShown) {
                console.log("you lose!");
                losses++;
                document.querySelector(".losses").innerHTML = losses;
                initializeGame();
                }
            })
            initializeGame();
        });

