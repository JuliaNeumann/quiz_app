import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EndQuizComponent } from './end-quiz/end-quiz.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EndQuizComponent],
  exports: [EndQuizComponent]
})
export class EndQuizModule { }
