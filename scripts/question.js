var questions = [];
var currentQuestionIndex = 0;
var prepareSection = document.getElementById('prepare_section');
var questionSection = document.getElementById('question_section');
var questionText = document.getElementById('question_text');
var answers = document.getElementById('answers');
var feedback = document.getElementById('feedback');

function startQuizOnLoad() {
    document.addEventListener('startQuiz', function onStartQuiz(event) {
        questions = event.detail;
        currentQuestionIndex = 0;
        prepareSection.className += ' hidden';
        questionSection.className = '';
        askNextQuestion();
    })
}

function askNextQuestion() {
    if (currentQuestionIndex >= questions.length) {
        //TODO: endQuiz();
        return;
    }
    var questionData = questions[currentQuestionIndex];
    questionText.innerHTML = questionData.question;
    var answersData = questionData.incorrect_answers.slice(0);
    answersData.push(questionData.correct_answer);
    shuffle(answersData);
    answers.innerHTML = '';
    for (var i = 0; i < answersData.length; i++) {
        var wrapper = document.createElement('div');
        wrapper.className = 'answer_wrapper';
        var radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'answers';
        radio.id = 'answer_' + i;
        radio.value = answersData[i];
        wrapper.appendChild(radio);
        var label = document.createElement('label');
        label.htmlFor = 'answer_' + i;
        label.innerHTML = answersData[i];
        wrapper.appendChild(label);
        answers.appendChild(wrapper);
    }
}

function shuffle(myArray) {
    var j, x, i;
    for (i = myArray.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = myArray[i - 1];
        myArray[i - 1] = myArray[j];
        myArray[j] = x;
    }
}

function waitForAnswer() {
    var submitBtn = document.getElementById('submit_question');
    submitBtn.addEventListener('click', function onClickSubmit(event) {
        event.preventDefault();
        var givenAnswer = document.querySelector('input[name = "answers"]:checked').value;
        var answerCorrect = false;
        if (givenAnswer === questions[currentQuestionIndex].correct_answer) {
            answerCorrect = true;
        }
        feedback.innerHTML = answerCorrect ? 'Correct!!' : 'Incorrect :-(';
        feedback.className = 'feedback';
    })
}

//INIT QUESTION HANDLING
startQuizOnLoad();
waitForAnswer();