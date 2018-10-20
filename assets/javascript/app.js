
$(document).ready(function () {
    var triviaArray = [
        // Question 1
        {
            answer: 0,
            question: "What vegetable is thought to keep vampires away?",
            options: ["Garlic", "Cauliflower", "Carrots", "Tomatoes"],
            photo: "assets/images/garlic.gif"
        },

        // Question 2
        {
            answer: 2,
            question: "Which vegetables was given to the winner of an athletic event in ancient Greece?",
            options: ["Peas", "Carrots", "Celery", "Chards"],
            photo: "assets/images/celery.gif"
        },

        // Quesion 3
        {
            answer: 0,
            question: "Which of the following plants does not grow underground?",
            options: ["Green Bean", "Potato", "Onion", "Carrot"],
            photo: "assets/images/greenbeans.gif"
        },

        // Question 4
        {
            answer: 2,
            question: "What very-hot-tasting edible root is often served as a spicy sauce with roast beef?",
            options: ["Beet", "Turnip", "Horseradish", "Parsnip"],
            photo: "assets/images/horseradish.gif"
        },

        // Question 5
        {
            answer: 3,
            question: "Where were potatoes first grown?",
            options: ["Africa", "United State of America", "Ireland", "Andes Moutains, Peru"],
            photo: "assets/images/PotatoTypes.gif"
        },

        // Question 6
        {
            answer: 1,
            question: "Which of these varieties of beans is not actually a vegetable?",
            options: ["Green Beans", "Jelly Beans", "Lima Beans", "Garbanzo Beans"],
            photo: "assets/images/jellybean.gif"
        },

        // Question 7
        {
            answer: 3,
            question: "How many kernels does the average ear of corn have?",
            options: ["300", "100", "50", "800"],
            photo: "assets/images/corn.gif"

        },

        // Question 8
        {
            answer: 1,
            question: "What green vegetable do rabbits often eat?",
            options: ["Spinach", "Lettuce", "Celery", "Peppers"],
            photo: "assets/images/rabbit.gif"
        },

        // Question
        {
            answer: 0,
            question: "What kind of vegetable can you buy a 'head' of?",
            options: ["Lettuce", "Peas", "Peppers", "Carrots"],
            photo: "assets/images/lettuceleaves.gif"
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
            photo: "assets/images/onion.gif"
        },

        // Question 12
        {
            answer: 1,
            question: "Placing a green tomato into a paper bag helps it to do what?",
            options: ["Grow", "Ripen", "Rot", "Get Mushy"],
            photo: "assets/imagesripen.gif"
        },

        // Question 13
        {
            answer: 0,
            question: "Which tennis-ball sized vegetable popular for dipping actually grows on a thistle?",
            options: ["Artichoke", "Cauliflower", "Brussels Sprout", "Pumpkin"],
            photo: "assets/images/artichoke.gif"
        },

        // Question 14
        {
            answer: 1,
            question: "What do Mexican people do with radishes on Christmas Eve?",
            options: ["Eat Raw", "Carve Into Animal Shapes", "Make Radish Stew", "Fight With Them"],
            photo: "assets/images/radish.png"
        },

        // Question 15
        {
            answer: 0,
            question: "'Aubergine' is another name for which vegetable?",
            options: ["Eggplant", "Tomato", "Artichoke", "Potato"],
            photo: "assets/images/eggplant.gif"
        },
    ]

    var correct = 0;
    var inCorrect = 0;
    var unAnswer = 0;  //time out without the answer
    var userPick = "";
    var gif = null;
    var timer = 10;
    var timeRunning = false;
    var indexQ = 0;
    var Ask;
    var Qcount = triviaArray.length;
    var quesHolder = [];
    var newArr = [];


    //Hide button
    $("#reset").hide();
    //Start game
    $("#start").on("click", function () {
        // $(".image-change").attr("src", "assets/images/apple.jpg");
        $(this).hide();
        selectQuestion();
        startTimer();
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
        // After time out, tell the player that time's up. 
        // Display a correct answer & the page jump to the next question.
        if (timer === -1) {
            unAnswer++;
            stopTimer();
            $("#trivia-answer").html("<h3>Time's up! The correct answer is: " + Ask.options[Ask.answer] + "</h3>");
           selectQuestion();
        }

        //if for userguesses (create bool)
        // select question 

        // Wait a few second, then show the next answer.
    }
   
    function stopTimer() {
        clearInterval(intervalId);
        timeRunning = false;
    }
    //-------------------------------------------------------------------------------

    // Display Question
    function selectQuestion() {
        Ask = triviaArray[indexQ];
        indexQ ++; 
        console.log(Ask.question, "question?");
        $("#trivia-question").html("<h4>" + Ask.question + "</h4>")
        // Answer array and Display it on screen
        for (var i = 0; i < Ask.options.length; i++) {
            var choicesArray = $("<button>");
            choicesArray.addClass("currentChoice");
            choicesArray.html(Ask.options[i]);
            choicesArray.attr("data-id", i)
            $("#trivia-answer").append(choicesArray);
            console.log(choicesArray, "choices");
        }
    }

    //Make if statement for userPick === answer
    $(document).on('click', '.currentChoice', function () {
        userPick = parseInt($(this).attr("data-id"));
        console.log(this, "userpick.............");

        //If it's right render the photos key, show a screen congrats, display the next question
        if (userPick === Ask.answer) {
            // stopTimer();
            correct++;
            userPick = "";
            $("#trivia-answer").html("<p>CORRECT!" + "</p>");

        } else {
            // if user picked wrong, alert and jump to the next question
            // stopTimer();
            inCorrect++;
            userPick = "";
            $("#trivia-answer").html("<h4>Wrong! The correct answer is: " + Ask.options[Ask.answer] + "</h4>");
            
        }
    });

    function photo() {
        $(".image-change").html("<img src=" + Ask.photo + ">");
        newArr.push(Ask);
        console.log("photo", Ask.photo);
    }



    //   reset
    $("#reset").on("click", function () {

    });
});