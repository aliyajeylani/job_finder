
// ------------------------Quote Section------------------
// github.com/lukePeavey/quotable 

var quote = document.getElementById("quote");
var author = document.getElementById("author");
var quote_btn = document.getElementById("quote_btn");


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

var homepage = document.querySelector(".container1");
var testimonies = document.querySelector(".testimony_section");
var assessment_btn = document.getElementById("assessment_button");
var title = document.createElement("h1");
var instruction = document.createElement("p");
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

    homepage.style.display = "none";
    testimonies.style.display = "none";
    assessment_btn.style.display = "none";
    assessmentPage.style.display = "block";
    title.textContent = "Let's get you started!";
    instruction.textContent = "If you like doing the activity, click the like button. If you do not like doing the activity, click the dislike button. You must choose a like or dislike for each activity. Click the 'Submit Assessment' button once you have reviewed all of the activities.";
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


}


likeBtn.addEventListener("click", nextSkill);


dislikeBtn.addEventListener("click", nextSkill);

function nextSkill() {

    currentSkill += 1;

    skillDescription.textContent = skills[currentSkill].skill;
    skillImage.src = skills[currentSkill].image;
    assessmentPage.appendChild(skillDescription);
    assessmentPage.appendChild(skillImage);

    if (currentSkill == 16) {

        ///show submit button
        submitBtn.style.display = "block";
        // likeBtn.style.display = "none";
        // dislikeBtn.style.display = "none";
        console.log("assessment completed");

    }

}

var submitBtn = document.querySelector(".js-modal-trigger");
submitBtn.addEventListener("click", getResultPage);


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
let resultPage = document.querySelector(".result_page");

assess_btn.addEventListener("click", getAssessmentPAge);


// jobs_btn.addEventListener("click", getResultPage);

// team_btn.addEventListener("click", goteam)

var result;

function getResultPage() {

    submitBtn.style.display = "none";
    assessmentPage.style.display = "none";
    resultPage.style.display = "block";
    result = document.createElement("h1");
    result.setAttribute("class", "result_text");
    resultDescr = document.createElement("h2");
    resultDescr.setAttribute("class", "result_descr");
    developerVideo = document.querySelector(".software_developer");
    developerVideo.setAttribute("class", "videos");
    analystVideo = document.querySelector(".business_analyst");
    analystVideo.setAttribute("class", "videos");
    scrumMasterVideo = document.querySelector(".scrum_master");
    scrumMasterVideo.setAttribute("class", "videos");
    qualityAssuranceVideo = document.querySelector(".quality_assurance");
    qualityAssuranceVideo.setAttribute("class", "videos");
    productOwnerVideo = document.querySelector(".product_owner");
    productOwnerVideo.setAttribute("class", "videos");
    projectManagerVideo = document.querySelector(".project_manager");
    projectManagerVideo.setAttribute("class", "videos");





    if (skills[1]) {
        console.log("You are a Software Developer!");

        result.textContent = "You are a Software Developer!"
        resultDescr.textContent = "Watch this video to learn more about this role and what is expected if you're looking to get started in this career path."
        resultPage.appendChild(result);
        resultPage.appendChild(resultDescr);
        developerVideo.style.display = "block";


    } if (skills[2]) {
        console.log("You are a Business Analyst!");

        result.textContent = "You are a Business Analyst!"
        resultDescr.textContent = "Watch this video to learn more about this role and what is expected if you're looking to get started in this career path."
        resultPage.appendChild(result);
        resultPage.appendChild(resultDescr);
        analystVideo.style.display = "block";

    } if (skills[11]) {
        console.log("You are a Scrum Master!");

        result.textContent = "You are a Scrum Master!"
        resultDescr.textContent = "Watch this video to learn more about this role and what is expected if you're looking to get started in this career path."
        resultPage.appendChild(result);
        resultPage.appendChild(resultDescr);
        scrumMasterVideo.style.display = "block";


    } if (skills[5]) {
        console.log("You are a Quality Assurance Tester!");

        result.textContent = "You are a Quality Assurance Tester!"
        resultDescr.textContent = "Watch this video to learn more about this role and what is expected if you're looking to get started in this career path."
        resultPage.appendChild(result);
        resultPage.appendChild(resultDescr);
        qualityAssuranceVideo.style.display = "block";

    } if (skills[13]) {
        console.log("You are a Product Owner!");

        result.textContent = "You are a Product Owner!"
        resultDescr.textContent = "Watch this video to learn more about this role and what is expected if you're looking to get started in this career path."
        resultPage.appendChild(result);
        resultPage.appendChild(resultDescr);
        productOwnerVideo.style.display = "block";

    } if (skills[12]) {
        console.log("You are a Project Manager!")

        result.textContent = "You are a Project Manager!"
        resultDescr.textContent = "Watch this video to learn more about this role and what is expected if you're looking to get started in this career path."
        resultPage.appendChild(result);
        resultPage.appendChild(resultDescr);
        projectManagerVideo.style.display = "block";

    } else {
        console.log("You are a Business Analyst!");
    }
};


// // ------This is my  second API--------

// url = "https://findwork.dev/api/jobs/"
// //  {
// //   "count": 4385,
// //   "next": "https://findwork.dev/api/jobs/?page=2",
// //   "previous": null,
// //   "results": [...]
// // }
// // function getJobs() {
// fetch(url, {
//     "Authorization: Token 46d28295faa5e870b262de405cf67a9ebbc5aaaa"
// })
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     });
// // };

// // 46d28295faa5e870b262de405cf67a9ebbc5aaaa