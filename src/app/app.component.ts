import { Component } from '@angular/core';
import { HeadingService } from './shared/heading.service';

@Component({
  selector: 'quiz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heading : string = '' ;

  constructor(private headingService: HeadingService) {
    headingService.changeEmitted$.subscribe(
        newHeading => this.heading = newHeading
    );
  }
}
