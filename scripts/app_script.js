var api_base_url = 'https://opentdb.com/';
var selectCategories = document.getElementById('select_category');
var selectNumberQuestions = document.getElementById('select_number_questions');

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
        var requestRoute = 'api.php?amount=' + amount + categorySnippet;
        makeJsonRequest(requestRoute, function onSuccess(jsonQuestions) {
           console.log(jsonQuestions);
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

// INIT APP
buildCategories();
handlePrepareSubmit();