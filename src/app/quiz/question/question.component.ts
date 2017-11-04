import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'quiz-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question: any;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    console.log(this.question);
  }
}
