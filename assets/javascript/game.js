$(document).ready(function () {
            //each crystal is assigned the value before clicking
            let crystalsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
                let crystal1 = crystalsArray[Math.floor(Math.random() * crystalsArray.length)];
                let crystal2 = crystalsArray[Math.floor(Math.random() * crystalsArray.length)];
                let crystal3 = crystalsArray[Math.floor(Math.random() * crystalsArray.length)];
                let crystal4 = crystalsArray[Math.floor(Math.random() * crystalsArray.length)];
                console.log("crystal1", crystal1);
                console.log("crystal2", crystal2);
                console.log("crystal3", crystal3);
                console.log("crystal4", crystal4);
            function range(low, high) {
                return Array(high - low + 1).fill().map((_, idx) => low + idx)
                }
                let numberArray = range(19, 120);
                //console.log("array", numberArray);
                let numberShown = numberArray[Math.floor(Math.random() * numberArray.length)];
                document.querySelector(".randomComputerNumber").innerHTML = numberShown;
                let wins = 0;
                document.querySelector(".wins").innerHTML = wins;
                let losses = 0;
                document.querySelector(".losses").innerHTML = losses;
                let score = 0;
                document.querySelector(".userNumber").innerHTML = score;
                
            function initializeGame() {
                score = 0;
                console.log("score initialize", score);
                document.querySelector(".userNumber").innerHTML = score;
                //new random values for crystals
                crystal1 = crystalsArray[Math.floor(Math.random() * crystalsArray.length)];
                crystal2 = crystalsArray[Math.floor(Math.random() * crystalsArray.length)];
                crystal3 = crystalsArray[Math.floor(Math.random() * crystalsArray.length)];
                crystal4 = crystalsArray[Math.floor(Math.random() * crystalsArray.length)];
                console.log("crystal1 initialize", crystal1);
                console.log("crystal2 initialize", crystal2);
                console.log("crystal3 initialize", crystal3);
                console.log("crystal4 initialize", crystal4);
                //new random number
                function range(low, high) {
                return Array(high - low + 1).fill().map((_, idx) => low + idx)
                }
                numberArray = range(19, 120);
                numberShown = numberArray[Math.floor(Math.random() * numberArray.length)];
                console.log("numberShown initialize", numberShown);
                document.querySelector(".randomComputerNumber").innerHTML = numberShown;
            }
            $(".crystal1").on("click", function () {
                let value = crystal1;
                let userNumber = parseInt($(".userNumber").html());
                console.log("value", value);
                console.log("userNumber", userNumber);
                console.log("numberShown", numberShown);
                let screen = value+userNumber;
                console.log("screen", screen);
                value = parseInt(value);
                userNumber = parseInt($(".userNumber").html());
                result = value + userNumber
                document.querySelector(".userNumber").innerHTML = result;
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
            $(".crystal2").on("click", function () {
                let value = crystal2;
                let userNumber = parseInt($(".userNumber").html());
                console.log("value", value);
                console.log("userNumber", userNumber);
                console.log("numberShown", numberShown);
                let screen = value+userNumber;
                console.log("screen", screen);
                value = parseInt(value);
                userNumber = parseInt($(".userNumber").html());
                result = value + userNumber
                document.querySelector(".userNumber").innerHTML = result;
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
            $(".crystal3").on("click", function () {
                let value = crystal3;
                let userNumber = parseInt($(".userNumber").html());
                console.log("value", value);
                console.log("userNumber", userNumber);
                console.log("numberShown", numberShown);
                let screen = value+userNumber;
                console.log("screen", screen);
                value = parseInt(value);
                userNumber = parseInt($(".userNumber").html());
                result = value + userNumber
                document.querySelector(".userNumber").innerHTML = result;
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
            $(".crystal4").on("click", function () {
                let value = crystal4;
                let userNumber = parseInt($(".userNumber").html());
                console.log("value", value);
                console.log("userNumber", userNumber);
                console.log("numberShown", numberShown);
                let screen = value+userNumber;
                console.log("screen", screen);
                value = parseInt(value);
                userNumber = parseInt($(".userNumber").html());
                result = value + userNumber
                document.querySelector(".userNumber").innerHTML = result;
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
        });

