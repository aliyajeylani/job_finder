
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

        })
        .catch(function (error) {

        });

};

window.addEventListener("load", getQuote);
quote_btn.addEventListener("click", getQuote);
getQuote();

// ------------------------Assessment Page------------------

var homepage = document.querySelector(".container1");
var quoteSection = document.querySelector(".wrapper");
var testimonies = document.querySelector(".testimony_section");
var aboutUs = document.querySelector(".about_us");
var stockInformation = document.querySelector(".container3");
var assessment_btn = document.getElementById("assessment_button");
var title = document.createElement("h1");
var instruction = document.createElement("p");
var assessmentPage = document.querySelector(".assessment_page");
var likeBtn = document.createElement("button");
var dislikeBtn = document.createElement("button");
var skillDescription = document.createElement("h2");
var skillImage = document.createElement("img");
const SOFTWARE_DEVELOPER = 0;
const BUSINESS_ANALYST = 1;
const SCRUM_MASTER = 2;
const QUALITY_ASSURANCE = 3;
const PRODUCT_OWNER = 4;
const PROJECT_MANAGER = 5;
let indexOfLargest = localStorage.getItem("index_of_role");

var roleTotal = [0, 0, 0, 0, 0, 0];
var currentSkill = 0;
var skills = [
    {
        skill: "Problem-solving",
        image: "./assets/Images/problem_solving.jpg",
        roles: [
            SOFTWARE_DEVELOPER, QUALITY_ASSURANCE, PRODUCT_OWNER
        ]
    },
    {
        skill: "Programming",
        image: "./assets/Images/programming.jpg",
        roles: [
            SOFTWARE_DEVELOPER
        ]

    },
    {
        skill: "Analytical",
        image: "./assets/Images/analytical.jpg",
        roles: [
            SOFTWARE_DEVELOPER, BUSINESS_ANALYST, PRODUCT_OWNER
        ]

    },
    {
        skill: "Research",
        image: "./assets/Images/research.jpg",
        roles: [
            SOFTWARE_DEVELOPER, QUALITY_ASSURANCE
        ]

    },
    {

        skill: "Decision-making",
        image: "./assets/Images/decision_making.jpg",
        roles: [
            SOFTWARE_DEVELOPER, PRODUCT_OWNER
        ]


    },
    {

        skill: "Attention to detail",
        image: "./assets/Images/attention_to_detail.jpg",
        roles: [
            SOFTWARE_DEVELOPER, QUALITY_ASSURANCE
        ]

    },
    {
        skill: "Critical Thinking",
        image: "./assets/Images/critical_thinking.jpg",
        roles: [
            BUSINESS_ANALYST
        ]

    },
    {
        skill: "Communication",
        image: "./assets/Images/communication.jpg",
        roles: [
            BUSINESS_ANALYST, PRODUCT_OWNER
        ]

    },
    {
        skill: "Collaboration",
        image: "./assets/Images/collaboration.jpg",
        roles: [
            BUSINESS_ANALYST, SCRUM_MASTER, PRODUCT_OWNER, QUALITY_ASSURANCE, PROJECT_MANAGER
        ]

    },
    {
        skill: "Multitasking",
        image: "./assets/Images/multi_tasking.jpg",
        roles: [
            BUSINESS_ANALYST, SCRUM_MASTER, PROJECT_MANAGER
        ]

    },
    {
        skill: "Time Management",
        image: "./assets/Images/time_management.jpg",
        roles: [
            SCRUM_MASTER
        ]

    },
    {
        skill: "Planning",
        image: "./assets/Images/planning.png",
        roles: [
            SCRUM_MASTER, PROJECT_MANAGER
        ]

    },
    {
        skill: "Project Management",
        image: "./assets/Images/project_management.jpg",
        roles: [
            PROJECT_MANAGER, SCRUM_MASTER
        ]

    },
    {
        skill: "Leadership",
        image: "./assets/Images/leadership.jpg",
        roles: [
            SCRUM_MASTER, PRODUCT_OWNER
        ]

    },
    {
        skill: "Statistical Analysis",
        image: "./assets/Images/statistical_analysis.jpg",
        roles: [
            QUALITY_ASSURANCE
        ]

    },
    {
        skill: "Conflict Resolution",
        image: "./assets/Images/conflict_resolution.jpg",
        roles: [
            PRODUCT_OWNER
        ]

    },
    {
        skill: "Scheduling",
        image: "./assets/Images/scheduling.jpg",
        roles: [
            PROJECT_MANAGER
        ]

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


likeBtn.addEventListener("click", function () {
    likeBtnClick(skills[currentSkill].roles);
    nextSkill();

});

function likeBtnClick(roles) {
    console.log(roles);
    for (var i = 0; i < roles.length; i++) {
        console.log(roles[i]);
        roleTotal[roles[i]] += 1;
    }

    console.log(roleTotal);
}

dislikeBtn.addEventListener("click", nextSkill);

function nextSkill() {

    currentSkill += 1;

    if (currentSkill >= skills.length) {

        indexOfLargest = 0;
        let mostPoint = -1;

        for (var i = 0; i < roleTotal.length; i++) {

            if (mostPoint < roleTotal[i]) {
                indexOfLargest = i;
                mostPoint = roleTotal[i];
            }

        }

        localStorage.setItem("index_of_role", indexOfLargest);

        ///show submit button
        submitBtn.style.display = "block";
        likeBtn.style.display = "none";
        dislikeBtn.style.display = "none";
        skillDescription.style.display = "none";
        skillImage.style.display = "none";
        console.log("assessment completed");

    } else {

        skillDescription.textContent = skills[currentSkill].skill;
        skillImage.src = skills[currentSkill].image;
        assessmentPage.appendChild(skillDescription);
        assessmentPage.appendChild(skillImage);


    }
};
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
let top_role_btn = document.querySelector("#top_role")
let team_btn = document.querySelector("#about_us")
let resultPage = document.querySelector(".result_page");
var result;

assess_btn.addEventListener("click", getAssessmentPAge);


top_role_btn.addEventListener("click", getResultPage);


team_btn.addEventListener("click", getAboutUsPage)

function getAboutUsPage() {
    aboutUs.style.display = "block";
    homepage.style.display = "none";
    testimonies.style.display = "none";
    quoteSection.style.display = "none";
    stockInformation.style.display = "none";

};



function getResultPage() {

    submitBtn.style.display = "none";
    assessmentPage.style.display = "none";
    homepage.style.display = "none";
    stockInformation.style.display = "none";
    resultPage.style.display = "block";
    result = document.createElement("h1");
    result.setAttribute("class", "result_text");
    resultDescr = document.createElement("h2");
    resultDescr.setAttribute("class", "result_descr");
    developerVideo = document.querySelector("#software_developer");
    developerVideo.setAttribute("class", "videos");
    analystVideo = document.querySelector("#business_analyst");
    analystVideo.setAttribute("class", "videos");
    scrumMasterVideo = document.querySelector("#scrum_master");
    scrumMasterVideo.setAttribute("class", "videos");
    qualityAssuranceVideo = document.querySelector("#quality_assurance");
    qualityAssuranceVideo.setAttribute("class", "videos");
    productOwnerVideo = document.querySelector("#product_owner");
    productOwnerVideo.setAttribute("class", "videos");
    projectManagerVideo = document.querySelector("#project_manager");
    projectManagerVideo.setAttribute("class", "videos");





    if (indexOfLargest === SOFTWARE_DEVELOPER) {
        console.log("You are a Software Developer!");

        result.textContent = "You are a Software Developer!"
        resultDescr.textContent = "Watch this video to learn more about this role and what is expected if you're looking to get started in this career path."
        resultPage.appendChild(result);
        resultPage.appendChild(resultDescr);
        developerVideo.style.display = "block";


    } else if (indexOfLargest === BUSINESS_ANALYST) {
        console.log("You are a Business Analyst!");

        result.textContent = "You are a Business Analyst!"
        resultDescr.textContent = "Watch this video to learn more about this role and what is expected if you're looking to get started in this career path."
        resultPage.appendChild(result);
        resultPage.appendChild(resultDescr);
        analystVideo.style.display = "block";

    } else if (indexOfLargest === SCRUM_MASTER) {
        console.log("You are a Scrum Master!");

        result.textContent = "You are a Scrum Master!"
        resultDescr.textContent = "Watch this video to learn more about this role and what is expected if you're looking to get started in this career path."
        resultPage.appendChild(result);
        resultPage.appendChild(resultDescr);
        scrumMasterVideo.style.display = "block";


    } else if (indexOfLargest === QUALITY_ASSURANCE) {
        console.log("You are a Quality Assurance Tester!");

        result.textContent = "You are a Quality Assurance Tester!"
        resultDescr.textContent = "Watch this video to learn more about this role and what is expected if you're looking to get started in this career path."
        resultPage.appendChild(result);
        resultPage.appendChild(resultDescr);
        qualityAssuranceVideo.style.display = "block";

    } else if (indexOfLargest === PRODUCT_OWNER) {
        console.log("You are a Product Owner!");

        result.textContent = "You are a Product Owner!"
        resultDescr.textContent = "Watch this video to learn more about this role and what is expected if you're looking to get started in this career path."
        resultPage.appendChild(result);
        resultPage.appendChild(resultDescr);
        productOwnerVideo.style.display = "block";

    } else if (indexOfLargest === PROJECT_MANAGER) {
        console.log("You are a Project Manager!")

        result.textContent = "You are a Project Manager!"
        resultDescr.textContent = "Watch this video to learn more about this role and what is expected if you're looking to get started in this career path."
        resultPage.appendChild(result);
        resultPage.appendChild(resultDescr);
        projectManagerVideo.style.display = "block";

    } else {
        result.textContent = "You are a Business Analyst!"
        resultDescr.textContent = "Watch this video to learn more about this role and what is expected if you're looking to get started in this career path."
        resultPage.appendChild(result);
        resultPage.appendChild(resultDescr);
        analystVideo.style.display = "block";
    }
};


// // ------This is my  second API--------

var appleSymbol = document.getElementById("apple_symbol");
var appleDate = document.getElementById("apple_date_time");
var appleHigh = document.getElementById("apple_high");
var appleLow = document.getElementById("apple_low");
var googleSymbol = document.getElementById("google_symbol");
var googleDate = document.getElementById("google_date_time");
var googleHigh = document.getElementById("google_high");
var googleLow = document.getElementById("google_low");
var microsoftSymbol = document.getElementById("microsoft_symbol");
var microsoftDate = document.getElementById("microsoft_date_time");
var microsoftHigh = document.getElementById("microsoft_high");
var microsoftLow = document.getElementById("microsoft_low");
var teslaSymbol = document.getElementById("tesla_symbol");
var teslaDate = document.getElementById("tesla_date_time");
var teslaHigh = document.getElementById("tesla_high");
var teslaLow = document.getElementById("tesla_low");


const url = "https://api.twelvedata.com/time_series?symbol=AAPL,GOOGL,MSFT,TSLA&interval=1min&apikey=e52ce19b5d0740fa91668158532f6a8e"

function getStockInfo() {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            appleSymbol.textContent = data.AAPL.meta.symbol;
            appleDate.textContent = "Date: " + data.AAPL.values[0].datetime;
            appleHigh.textContent = "High: " + data.AAPL.values[0].high;
            appleLow.textContent = "Low: " + data.AAPL.values[0].low;


            googleSymbol.textContent = data.GOOGL.meta.symbol;
            googleDate.textContent = "Date: " + data.GOOGL.values[0].datetime;
            googleHigh.textContent = "High: " + data.GOOGL.values[0].high;
            googleLow.textContent = "Low: " + data.GOOGL.values[0].low;

            microsoftSymbol.textContent = data.MSFT.meta.symbol;
            microsoftDate.textContent = "Date: " + data.MSFT.values[0].datetime;
            microsoftHigh.textContent = "High: " + data.MSFT.values[0].high;
            microsoftLow.textContent = "Low: " + data.MSFT.values[0].low;


            teslaSymbol.textContent = data.TSLA.meta.symbol;
            teslaDate.textContent = "Date: " + data.TSLA.values[0].datetime;
            teslaHigh.textContent = "High: " + data.TSLA.values[0].high;
            teslaLow.textContent = "Low: " + data.TSLA.values[0].low;



        })
        .catch(function (error) {

            console.log(error);

        });

};

window.addEventListener("load", getStockInfo);





