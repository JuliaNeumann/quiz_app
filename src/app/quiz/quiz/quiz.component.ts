import {Component, OnInit} from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { HeadingService } from '../../shared/heading.service';

@Component({
  selector: 'quiz-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private quizService: QuizService,
              private headingService: HeadingService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.headingService.emitChange('Question 1');
    this.route
        .params
        .subscribe((params: {category: string, numberOfQuestions: string}) => {
          this.quizService.getQuestions(params.category, params.numberOfQuestions)
              .subscribe(result => {
                console.log(result);
              });
        });
  }

}
