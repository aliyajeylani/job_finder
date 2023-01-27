
// ------------------------Quote Section------------------
// github.com/lukePeavey/quotable 

var quote = document.getElementById("quote");
var author = document.getElementById("author");
let quote_btn = document.getElementById("quote_btn")


var requestUrl = "https://api.quotable.io/random"

function getQuote() {
    fetch(requestUrl)
        .then(function (response) {

            return response.json();
        })

        .then(function (data) {
            quote.innerText = data.content;
            author.innerText = data.author;

        });
};

window.addEventListener("load", getQuote);
quote_btn.addEventListener("click", getQuote);


// ------------------------Assessment Page------------------

// Must append function to homepage



function getAssessmentPAge() {

    var title = document.createElement("h1");
    var direction = document.createElement("p");

    var skills = [
        {
            skill: "Problem-solving",
            image: "",
        },
        {
            skill: "Programming",
            image: "",

        },
        {
            skill: "Analytical",
            image: "",

        },
        {
            skill: "Research",
            image: "",

        },
        {

            skill: "Decision-making",
            image: "",


        },
        {

            skill: "Attention to detail",
            image: "",

        },
        {
            skill: "Critical Thinking",
            image: "",

        },
        {
            skill: "Communication",
            image: "",

        },
        {
            skill: "Collaboration",
            image: "",

        },
        {
            skill: "Multitasking",
            image: "",

        },
        {
            skill: "Time Management",
            image: "",

        },
        {
            skill: "Planning",
            image: "",

        },
        {
            skill: "Project Management",
            image: "",

        },
        {
            skill: "Leadership",
            image: "",

        },
        {
            skill: "Statistical Analysis",
            image: "",

        },
        {
            skill: "Conflict Resolution",
            image: "",

        },
        {
            skill: "Scheduling",
            image: "",

        },


    ]





    title.textContent = "Let's get you started!";
    direction.textContent = "If you like doing the activity, click the like button. If you do not like doing the activity, click dislike button. You must choose a like a like or dislike for each activity";


}



