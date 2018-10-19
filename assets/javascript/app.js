
$(document).ready(function () {
    var triviaArray = [
        // Question 1
        {
            answer: 0,
            question: "What vegetable is thought to keep vampires away?",
            options: ["Garlic", "Cauliflower", "Carrots", "Tomatoes"],
            photo: "https://media.giphy.com/media/qb9onxyM3R0TC/giphy.gif"
        },

        // Question 2
        {
            answer: 2,
            question: "Which vegetables was given to the winner of an athletic event in ancient Greece?",
            options: ["Peas", "Carrots", "Celery", "Chards"],
            photo: "https://media.giphy.com/media/11AoUds2mJYk8g/giphy.gif"
        },

        // Quesion 3
        {
            answer: 0,
            question: "Which of the following plants does not grow underground?",
            options: ["Green Bean", "Potato", "Onion", "Carrot"],
            photo: "https://media.giphy.com/media/1jW9O9NaaKXthITEGw/giphy.gif"
        },

        // Question 4
        {
            answer: 2,
            question: "What very-hot-tasting edible root is often served as a spicy sauce with roast beef?",
            options: ["Beet", "Turnip", "Horseradish", "Parsnip"],
            photo: "https://media.giphy.com/media/l4FGBkp8gRpALA7EA/giphy.gif"
        },

        // Question 5
        {
            answer: 3,
            question: "Where were potatoes first grown?",
            options: ["Africa", "United State of America", "Ireland", "Andes Moutains, Peru"],
            photo: "https://media.giphy.com/media/3oEjHQpTJS8nv9RoMU/giphy.gif"
        },

        // Question 6
        {
            answer: 1,
            question: "Which of these varieties of beans is not actually a vegetable?",
            options: ["Green Beans", "Jelly Beans", "Lima Beans", "Garbanzo Beans"],
            photo: "https://media.giphy.com/media/l0IylqWGqgUPBHaWQ/giphy.gif"
        },

        // Question 7
        {
            answer: 3,
            question: "How many kernels does the average ear of corn have?",
            options: ["300", "100", "50", "800"],
            photo: "https://media.giphy.com/media/SGXxg0FJh2p4k9eLfB/giphy.gif"

        },

        // Question 8
        {
            answer: 1,
            question: "What green vegetable do rabbits often eat?",
            options: ["Spinach", "Lettuce", "Celery", "Peppers"],
            photo: "https://media.giphy.com/media/x8V8iOJfRn1cs/giphy.gif"
        },

        // Question
        {
            answer: 0,
            question: "What kind of vegetable can you buy a 'head' of?",
            options: ["Lettuce", "Peas", "Peppers", "Carrots"],
            photo: "https://media.giphy.com/media/x8V8iOJfRn1cs/giphy.gif"
        },

        // Question 10
        {
            answer: 3,
            question: "Which fruit is usually considered a vegetable and has been cultivated for over 5,000 years?",
            options: ["Banana", "Lime", "Watermelon", "Olive"],
            photo: "assets/images/oliveu.gif"
        },

        // Question 11
        {
            answer: 2,
            question: "Cutting into which of these vetable will often make the eyes water?",
            options: ["Lettuce", "Rhubarb", "Onion", "Asparagus"],
            photo: "https://media.giphy.com/media/D7CSxMVMvj95e/giphy.gif"
        },

        // Question 12
        {
            answer: 1,
            question: "Placing a green tomato into a paper bag helps it to do what?",
            options: ["Grow", "Ripen", "Rot", "Get Mushy"],
            photo: "https://media.giphy.com/media/9fR4KnJptKY8w/giphy.gif"
        },

        // Question 13
        {
            answer: 0,
            question: "Which tennis-ball sized vegetable popular for dipping actually grows on a thistle?",
            options: ["Artichoke", "Cauliflower", "Brussels Sprout", "Pumpkin"],
            photo: "https://media.giphy.com/media/ErJfd44bxELjW/giphy.gif"
        },

        // Question 14
        {
            answer: 1,
            question: "What do Mexican people do with radishes on Christmas Eve?",
            options: ["Eat Raw", "Carve Into Animal Shapes", "Make Radish Stew", "Fight With Them"],
            photo: "https://media.giphy.com/media/pjcV8IhfaLnCAy5IV9/giphy.gif"
        },

        // Question 15
        {
            answer: 0,
            question: "'Aubergine' is another name for which vegetable?",
            options: ["Eggplant", "Tomato", "Artichoke", "Potato"],
            photo: "https://media.giphy.com/media/l0MYz93uwOgOQmXAc/giphy.gif"
        },
    ]

    var correct = 0;
    var inCorrect = 0;
    var unAnswer = 0;  //time out without the answer
    var userPick = "";
    var gif = null;
    var timer = 10;
    var timeRunning = false;
    var indexQ;
    var Ask;
    var Qcount = triviaArray.length;
    var quesHolder = [];

    // HIDE DISPLAY ON PAGE
    $("#reset").hide();
    // CLick GetStarted button to start a Game
    $("#start").on("click", function () {
        selectQuestion();
        startTimer();
        $("#start").hide();
        for (var i = 0; i < triviaArray.length; i++) {
            quesHolder.push(triviaArray[i]);
        }
    });
    // TIME FUNCTION START HERE--------------------------------------
    // Set function time start
    function startTimer() {
        if (!timeRunning) {
            intervalId = setInterval(countDown, 1000);
            timeRunning = true;
        }
    }
    // Set function time countdown
    var timeLeft = $("#time-left");
    function countDown() {
        timeLeft.text("Time remaining: " + timer + " secs");
        timer--;
        // After time out, tell the player that time's up, the page jump to the next question
        // Display a correct answer
        // Wait a few second, then show the next answer.
        if (timer === -1) {
            unAnswer++;
            stopTimer();
            $(".trivia-answer").html("<h3>Time's up! The correct answer is: " + Ask.options[Ask.answer] + "</h3>");
            // undefined??       
        }
    }
    // Set FUnction to stop timer
    function stopTimer() {
        clearInterval(intervalId);
        timeRunning = false;
    }
    // END TIME FUNCTION-------------------------------------

    // Display Question
    function selectQuestion(indexQ) {
        // generate random index question in the array triviaQuestions
        indexQ = Math.floor(Math.random() * triviaArray.length);
        Ask = triviaArray[indexQ];
        console.log(Ask.question);
        $("#trivia-question").html("<h4>" + Ask.question + "</h4>")
        // Answer array and Display it on screen
        for (var i = 0; i < Ask.options.length; i++) {
            var choicesArray = $("<div>");
            choicesArray.addClass("currentChoice");
            choicesArray.html(Ask.options[i]);
            choicesArray.attr("data-id", i)
            $(".trivia-answer").append(choicesArray);
            console.log(choicesArray);
        }
    }


    //Make if statement for userPick === answer
    $(".trivia-answer").on("click", function () {
        userPick = parseInt($(this).attr("data-id"));
        console.log("answeroption", this);

        //If it's right render the photos key, show a screen congrats, display the next question
        if (userPick === Ask.answer) {
            stopTimer()
            correct++;
            userPick = "";
            $(".trivia-answer").text("CORRECT!");
      
        } else {
            // if user picked wrong, alert and jump to the next question
            stopTimer();
            inCorrect++;
            userPick = "";
            $(".trivia-answer").text("WRONG! The correct answer is: " + Ask.options[Ask.answer]);
            nextQ();
        }
    });


    //Set function to run next question
    function nextQ() {
        Ask++;
        clearInterval(window.intervalId);
        timer = 10;
        timeLeft.text("");
        setTimeout(function () {
            selectQuestion();
            startTimer();
        })
    }
// reset game 
    $("#reset").on("click", function () {
        startGame();
    });
});