import { Component, OnInit } from '@angular/core';
import { HeadingService } from '../../shared/heading.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'quiz-end-quiz',
  templateUrl: './end-quiz.component.html',
  styleUrls: ['./end-quiz.component.css']
})
export class EndQuizComponent implements OnInit {

  score: string;
  numberOfQuestions: string;

  constructor(private headingService: HeadingService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.headingService.emitChange('That\'s it!');
    this.route
        .params
        .subscribe((params: {score: string, numberOfQuestions: string}) => {
          this.score = params.score;
          this.numberOfQuestions = params.numberOfQuestions;
        });
  }

  playAgain() {
    this.router.navigate([`/start`], {relativeTo: this.route});
  }

}
