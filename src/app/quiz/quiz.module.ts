import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz/quiz.component';
import { QuizService } from './shared/quiz.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [QuizComponent],
  declarations: [QuizComponent],
  providers: [QuizService]
})
export class QuizModule { }
