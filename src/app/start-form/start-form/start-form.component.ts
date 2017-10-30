import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/categories.service';
import { Category } from '../shared/category';

@Component({
  selector: 'quiz-start-form',
  templateUrl: './start-form.component.html',
  styleUrls: ['./start-form.component.css']
})
export class StartFormComponent implements OnInit {

  public categories: Category[];
  public optionsNumberOfQuestions: number[];
  public selectedCategory: number;
  public selectedNumber: number;

  constructor(private categoriesService: CategoriesService) {
    this.optionsNumberOfQuestions = Array(4).fill(0).map((value, index) => (index + 1) * 5);
    this.selectedCategory = 0;
    this.selectedNumber = 5;
  }

  ngOnInit() {
    this.categoriesService.getCategories()
        .subscribe(categoriesResponse => this.categories = categoriesResponse);
  }

  fetchQuestions(formInput) {
    console.log(formInput);
  }

}
