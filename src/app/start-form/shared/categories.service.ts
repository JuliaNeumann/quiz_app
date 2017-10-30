import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CategoriesService {

  private restCategories : string = 'https://opentdb.com/api_category.php';

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(this.restCategories).map(res => (res as any).trivia_categories);
  }

}
