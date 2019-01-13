import '../styles/app_styles.css';

var api_base_url = 'https://opentdb.com/';
var selectCategories = document.getElementById('select_category');
var selectNumberQuestions = document.getElementById('select_number_questions');
var prepareSection = document.getElementById('prepare_section');
var questionSection = document.getElementById('question_section');
var endSection = document.getElementById('end_section');

function makeJsonRequest(api_route, successCallback, errorCallback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (successCallback)
                    successCallback(JSON.parse(xhr.responseText));
            } else {
                if (errorCallback)
                    errorCallback(xhr);
            }
        }
    };
    xhr.open("GET", api_base_url + api_route, true);
    xhr.send();
}

function handlePrepareSubmit() {
    var submitBtn = document.getElementById('submit_prepare');
    submitBtn.addEventListener('click', function onClick(event) {
        event.preventDefault();
        var amount = selectNumberQuestions.options[selectNumberQuestions.selectedIndex].value;
        var category = selectCategories.options[selectCategories.selectedIndex].value;
        var categorySnippet = (category === '0') ? '' : '&category=' + category;
        var requestRoute = 'api.php?amount=' + amount + '&type=multiple' + categorySnippet;
        makeJsonRequest(requestRoute, function onSuccess(jsonQuestions) {
            import(/* webpackChunkName: "question" */ "./question").then(question => {
                question.startQuizOnLoad(jsonQuestions.results);
            });
        });
    });
}

function buildCategories() {
    makeJsonRequest('api_category.php', function onSuccess(jsonCategories) {
        if (jsonCategories.trivia_categories && jsonCategories.trivia_categories.length) {
            for (var i = 0; i < jsonCategories.trivia_categories.length; i++) {
                var category = jsonCategories.trivia_categories[i];
                var option = document.createElement('option');
                option.setAttribute('value', category.id);
                var optionText = document.createTextNode(category.name);
                option.appendChild(optionText);
                selectCategories.appendChild(option);
            }
        }
    });

}

function waitForEndOfQuiz() {
    document.addEventListener('endQuiz', function onStartQuiz(event) {
        document.getElementById('score').innerHTML = event.detail.score;
        document.getElementById('amount').innerHTML = event.detail.amount;
        questionSection.className += ' hidden';
        endSection.className = '';
    })
}

function waitForPlayAgain() {
    document.getElementById('play_again').addEventListener('click', function onStartQuiz(event) {
        event.preventDefault();
        endSection.className += ' hidden';
        prepareSection.className = '';
    })
}

// INIT APP
buildCategories();
handlePrepareSubmit();
waitForEndOfQuiz();
waitForPlayAgain();
