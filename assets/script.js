
// ------------------------Quote Section------------------
// github.com/lukePeavey/quotable 

var quote = document.getElementById("quote");
var author = document.getElementById("author");
var quote_btn = document.getElementById("quote_btn")


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
var assessment_btn = document.getElementById("assessment_button");
var title = document.createElement("h1");
var instruction = document.createElement("p");
// var homepage = document.querySelector(".homepage");
var assessmentPage = document.querySelector(".assessment_page");
var likeBtn = document.createElement("button");
var dislikeBtn = document.createElement("button");
var skillDescription = document.createElement("h2");
var skillImage = document.createElement("img");
var currentSkill = 0;
var skills = [
    {
        skill: "Problem-solving",
        image: "./assets/Images/problem_solving.jpg",
    },
    {
        skill: "Programming",
        image: "./assets/Images/programming.jpg",

    },
    {
        skill: "Analytical",
        image: "./assets/Images/analytical.jpg",

    },
    {
        skill: "Research",
        image: "./assets/Images/research.jpg",

    },
    {

        skill: "Decision-making",
        image: "./assets/Images/decision_making.jpg",


    },
    {

        skill: "Attention to detail",
        image: "./assets/Images/attention_to_detail.jpg",

    },
    {
        skill: "Critical Thinking",
        image: "./assets/Images/critical_thinking.jpg",

    },
    {
        skill: "Communication",
        image: "./assets/Images/communication.jpg",

    },
    {
        skill: "Collaboration",
        image: "./assets/Images/collaboration.jpg",

    },
    {
        skill: "Multitasking",
        image: "./assets/Images/multi_tasking.jpg",

    },
    {
        skill: "Time Management",
        image: "./assets/Images/time_management.jpg",

    },
    {
        skill: "Planning",
        image: "./assets/Images/planning.png",

    },
    {
        skill: "Project Management",
        image: "./assets/Images/project_management.jpg",

    },
    {
        skill: "Leadership",
        image: "./assets/Images/leadership.jpg",

    },
    {
        skill: "Statistical Analysis",
        image: "./assets/Images/statistical_analysis.jpg",

    },
    {
        skill: "Conflict Resolution",
        image: "./assets/Images/conflict_resolution.jpg",

    },
    {
        skill: "Scheduling",
        image: "./assets/Images/scheduling.jpg",

    },


]


assessment_btn.addEventListener("click", getAssessmentPAge);

function getAssessmentPAge() {

    assessment_btn.style.display = "none";
    assessmentPage.style.display = "block";
    title.textContent = "Let's get you started!";
    instruction.textContent = "If you like doing the activity, click the like button. If you do not like doing the activity, click dislike button. You must choose a like a like or dislike for each activity";
    likeBtn.innerHTML = "Like";
    likeBtn.setAttribute("class", "like_btn");
    dislikeBtn.setAttribute("class", "dislike_btn");
    dislikeBtn.innerHTML = "Dislike";
    assessmentPage.appendChild(title);
    assessmentPage.appendChild(instruction);



    skillDescription.setAttribute("class", "skillDescr");
    skillDescription.textContent = skills[currentSkill].skill;
    skillImage.src = skills[currentSkill].image;
    assessmentPage.appendChild(likeBtn);
    assessmentPage.appendChild(dislikeBtn);
    assessmentPage.appendChild(skillDescription);
    assessmentPage.appendChild(skillImage);
    // assessmentPage.appendChild(likeBtn);
    // assessmentPage.appendChild(dislikeBtn);

}


likeBtn.addEventListener("click", nextSkill);


dislikeBtn.addEventListener("click", nextSkill);

function nextSkill() {

    currentSkill += 1;

    skillDescription.textContent = skills[currentSkill].skill;
    skillImage.src = skills[currentSkill].image;
    assessmentPage.appendChild(skillDescription);
    assessmentPage.appendChild(skillImage);


    var submitBtn = document.querySelector(".js-modal-trigger");


    if (currentSkill === 16) {

        ///show submit button
        submitBtn.style.display = "block";


        console.log("assessment completed");
        // Send to result page - Justin to work on

    }

}

// ---------Script for Modal---------------------

document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
        $el.classList.add('is-active');
    }

    function closeModal($el) {
        $el.classList.remove('is-active');
    }

    function closeAllModals() {
        (document.querySelectorAll('.modal') || []).forEach(($modal) => {
            closeModal($modal);
        });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);

        $trigger.addEventListener('click', () => {
            openModal($target);
        });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
        const $target = $close.closest('.modal');

        $close.addEventListener('click', () => {
            closeModal($target);
        });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
        const e = event || window.event;

        if (e.keyCode === 27) { // Escape key
            closeAllModals();
        }
    });
});



// -------------End of Modal Script----------------------





// ----------Justin JavaScript-------------------------
let home_btn = document.querySelector("#home")
let assess_btn = document.querySelector("#assessment")
let jobs_btn = document.querySelector("#jobs")
let top_role_btn = document.querySelector("#top_role")
let team_btn = document.querySelector("#about_us")
home_btn.addEventListener("click", gohome)
assess_btn.addEventListener("click", assessnow)
jobs_btn.addEventListener("click", jobspage)
team_btn.addEventListener("click", goteam)



if (skills[1]) {
    console.log("you are a software dev")
}
if (skills[2]) {
    console.log("you are a business analyst")
}
if (skills[11]) {
    console.log("you are a scrum master")
}
if (skills[5]) {
    console.log("you are a quality assurance")
}
if (skills[12]) {
    console.log("you are a software dev")
}
