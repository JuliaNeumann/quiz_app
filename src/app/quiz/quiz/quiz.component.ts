import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HeadingService } from '../../shared/heading.service';
import { Question } from '../shared/question';
import { UtilsService } from '../../shared/utils.service';

@Component({
  selector: 'quiz-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions: Question[] = [];
  currentQuestion: Question;
  score: number = 0;

  constructor(private quizService: QuizService,
              private headingService: HeadingService,
              private utilsService: UtilsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route
        .params
        .subscribe((params: {category: string, numberOfQuestions: string}) => {
          this.quizService.getQuestions(params.category, params.numberOfQuestions)
              .subscribe(result => {
                  this.processQuestions(result);
              });
        });
  }

  processQuestions(result) {
    let that = this;
    result.forEach(function(rawQuestion, index) {
        that.questions.push({
            id: index + 1,
            text: rawQuestion.question,
            randomAnswers : that.utilsService.shuffle([... rawQuestion.incorrect_answers, rawQuestion.correct_answer]),
            correctAnswer: rawQuestion.correct_answer
        });
    });
    this.setCurrentQuestion(0);
  }

  provideNextQuestion(increaseScore: number) {
    this.score += increaseScore;
    if (this.currentQuestion.id === this.questions.length) {
        this.router.navigate([`/end/${this.score}/${this.questions.length}`], {relativeTo: this.route});
        return;
    }
    this.setCurrentQuestion(this.currentQuestion.id);
  }

  setCurrentQuestion(index: number) {
      this.headingService.emitChange('Question ' + (index + 1));
      this.currentQuestion = this.questions[index];
  }

}
