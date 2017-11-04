import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz/quiz.component';
import { QuizService } from './shared/quiz.service';
import { QuestionComponent } from './question/question.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [QuizComponent],
  declarations: [QuizComponent, QuestionComponent],
  providers: [QuizService]
})
export class QuizModule { }
