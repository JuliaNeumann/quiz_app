import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuizService {
  private restRoot : string = 'https://opentdb.com/api.php?type=multiple';

  constructor(private http: HttpClient) { }

  getQuestions(category, numberOfQuestions) {
    let url = `${this.restRoot}&amount=${numberOfQuestions}`;
    url = (category === '0') ? url : `${url}&category=${category}`;
    return this.http.get(url);
  }
}
