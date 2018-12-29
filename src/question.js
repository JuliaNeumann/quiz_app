var questions = [];
var currentQuestionIndex = 0;
var prepareSection = document.getElementById('prepare_section');
var questionSection = document.getElementById('question_section');
var questionText = document.getElementById('question_text');
var answers = document.getElementById('answers');
var feedback = document.getElementById('feedback');
var submitQuestionBtn = document.getElementById('submit_question');
var nextQuestionBtn = document.getElementById('next_question');
var questionNumber = document.getElementById('question_number');
var score = 0;

export function startQuizOnLoad() {
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
        var event = new CustomEvent('endQuiz', {detail: {score: score, amount: questions.length}});
        document.dispatchEvent(event);
        questions = [];
        currentQuestionIndex = 0;
        return;
    }
    questionNumber.innerHTML = currentQuestionIndex + 1;
    var questionData = questions[currentQuestionIndex];
    questionText.innerHTML = questionData.question;
    var answersData = questionData.incorrect_answers.slice(0);
    answersData.push(questionData.correct_answer);
    shuffle(answersData);
    questionData.shuffledAnswers = answersData;
    answers.innerHTML = '';
    for (var i = 0; i < answersData.length; i++) {
        displayAnswer(answersData[i], i);
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

function displayAnswer(answer, index) {
    var wrapper = document.createElement('div');
    wrapper.className = 'answer_wrapper';
    var radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'answers';
    radio.id = 'answer_' + index;
    radio.value = answer;
    wrapper.appendChild(radio);
    var label = document.createElement('label');
    label.htmlFor = 'answer_' + index;
    label.innerHTML = answer;
    label.id = 'answer_label_' + index;
    wrapper.appendChild(label);
    answers.appendChild(wrapper);
}

export function waitForAnswer() {
    var submitBtn = document.getElementById('submit_question');
    submitBtn.addEventListener('click', function onClickSubmit(event) {
        event.preventDefault();
        var givenAnswer = document.querySelector('input[name = "answers"]:checked').value;
        var answerCorrect = false;
        if (givenAnswer === questions[currentQuestionIndex].correct_answer) {
            answerCorrect = true;
            score++;
        }
        markAnswers();
        feedback.innerHTML = answerCorrect ? 'Correct!!' : 'Incorrect :-(';
        feedback.className = 'feedback';
        submitQuestionBtn.className += ' hidden';
        nextQuestionBtn.className = 'button';
    })
}

function markAnswers() {
    var answersArray = questions[currentQuestionIndex].shuffledAnswers;
    for (var i = 0; i < answersArray.length; i++) {
        var answerNode = document.getElementById('answer_' + i);
        var answerLabelNode = document.getElementById('answer_label_' + i);
        if (answersArray[i] === questions[currentQuestionIndex].correct_answer) {
            answerLabelNode.className += ' correct';
        }
        else if (answerNode.checked) {
            answerLabelNode.className += ' incorrect';
        }
    }
}

export function waitForNextQuestion() {
    nextQuestionBtn.addEventListener('click', function onClickSubmit(event) {
        event.preventDefault();
        currentQuestionIndex++;
        nextQuestionBtn.className += ' hidden';
        submitQuestionBtn.className = 'button';
        feedback.className += ' hidden';
        askNextQuestion();
    })
}
