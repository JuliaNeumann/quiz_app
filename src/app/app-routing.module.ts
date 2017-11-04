import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartFormComponent } from './start-form/start-form/start-form.component';
import { QuizComponent } from './quiz/quiz/quiz.component';

const routes: Routes = [
  {
    path: 'start',
    component: StartFormComponent
  },
  {
    path: ':category/:numberOfQuestions',
    component: QuizComponent
  },
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/start'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }