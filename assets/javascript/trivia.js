$("#start").on("click", function(){
    $("#start").remove();
})

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

    // Question 3
    {
        answer: 2,
        question: "What very-hot-tasting edible root is often served as a spicy sauce with roast beef?",
        options: ["Beet", "Turnip", "Horseradish", "Parsnip"],
        photo: "assets/images/horseradish.gif"
    },

    // Question 4
    {
        answer: 3,
        question: "Where were potatoes first grown?",
        options: ["Africa", "United State of America", "Ireland", "Andes Moutains, Peru"],
        photo: "assets/images/PotatoTypes.gif"
    },

    // Question 5
    {
        answer: 1,
        question: "Which of these varieties of beans is not actually a vegetable?",
        options: ["Green Beans", "Jelly Beans", "Lima Beans", "Garbanzo Beans"],
        photo: "assets/images/jellybean.gif"
    },

    // Question 6
    {
        answer: 3,
        question: "How many kernels does the average ear of corn have?",
        options: ["300", "100", "50", "800"],
        photo: "assets/images/corn.gif"

    },

    // Question 7
    {
        answer: 1,
        question: "What green vegetable do rabbits often eat?",
        options: ["Spinach", "Lettuce", "Celery", "Peppers"],
        photo: "assets/images/rabbit.gif"
    },

    // Question 8
    {
        answer: 3,
        question: "Which fruit is usually considered a vegetable and has been cultivated for over 5,000 years?",
        options: ["Banana", "Lime", "Watermelon", "Olive"],
        photo: "assets/images/oliveu.gif"
    },

    // Question 9
    {
        answer: 2,
        question: "Cutting into which of these vetable will often make the eyes water?",
        options: ["Lettuce", "Rhubarb", "Onion", "Asparagus"],
        photo: "assets/images/onion.gif"
    },

    // Question 10
    {
        answer: 0,
        question: "Which tennis-ball sized vegetable popular for dipping actually grows on a thistle?",
        options: ["Artichoke", "Cauliflower", "Brussels Sprout", "Pumpkin"],
        photo: "assets/images/artichoke.gif"
    },

    // Question 11
    {
        answer: 1,
        question: "What do Mexican people do with radishes on Christmas Eve?",
        options: ["Eat Raw", "Carve Into Animal Shapes", "Make Radish Stew", "Fight With Them"],
        photo: "assets/images/radish.png"
    },

    // Question 12
    {
        answer: 0,
        question: "'Aubergine' is another name for which vegetable?",
        options: ["Eggplant", "Tomato", "Artichoke", "Potato"],
        photo: "assets/images/eggplant.gif"
    },
]

var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,

    countdown: function(){
        game.counter --;
        $("#counter").html(game.counter);
        if(game.counter <= 0){
            console.log("time up!");
            game.timeUp();            
        }
    },

    loadQuestion: function(){
        timer = setInterval(game.countdown, 1000);
        $("#subwrapper").html("<h2>" + questions[game.currentQuestion].question + "</h2>");
        for (var = i; i < questions[game.currentQuestion].answer.length; i++){
            $()
        }
    },

    nextQuestion: function(){

    },

    timeUp: function() {

    },

    results: function() {

    },

    clicked: function() {

    },

    answeredCorrectly: function() {

    },

    answeredIncorrectly: function() {

    },

    reset: function(){

    }
}