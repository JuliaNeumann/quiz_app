import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartFormModule } from './start-form/start-form.module';
import { QuizModule } from './quiz/quiz.module';
import { HeadingService } from './shared/heading.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StartFormModule,
    QuizModule
  ],
  providers: [HeadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
