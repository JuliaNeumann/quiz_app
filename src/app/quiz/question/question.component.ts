import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../shared/question';

@Component({
  selector: 'quiz-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

  @Input() question: Question;
  @Output() nextQuestion: EventEmitter<number> = new EventEmitter();
  feedback: string;
  showFeedback: boolean = false;
  selectedAnswer: string;
  submittedAnswer: string;

  evaluateQuestion(formInput) {
    this.showFeedback = true;
    this.submittedAnswer = formInput.answers;
    let answerCorrect = false;
    if (this.submittedAnswer === this.question.correctAnswer) {
      answerCorrect = true;
    }
    this.feedback = answerCorrect ? 'Correct!!' : 'Incorrect :-(';
  }

  callNextQuestion() {
    let increaseScore = this.submittedAnswer === this.question.correctAnswer ? 1 : 0;
    this.selectedAnswer = '';
    this.submittedAnswer = '';
    this.showFeedback = false;
    this.nextQuestion.emit(increaseScore);
  }

  getAnswerClass(answer: string) {
    if (this.submittedAnswer && this.question.correctAnswer === answer) {
      return 'correct';
    }
    else if (this.submittedAnswer === answer) {
      return 'incorrect';
    }
    return '';
  }
}
