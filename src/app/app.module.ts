import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartFormModule } from './start-form/start-form.module';
import { QuizModule } from './quiz/quiz.module';
import { HeadingService } from './shared/heading.service';
import { UtilsService } from './shared/utils.service';
import {EndQuizModule} from './end-quiz/end-quiz.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StartFormModule,
    QuizModule,
    EndQuizModule
  ],
  providers: [HeadingService, UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
