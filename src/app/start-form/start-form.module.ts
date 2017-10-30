import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartFormComponent } from './start-form/start-form.component';
import { CategoriesService } from './shared/categories.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [StartFormComponent],
  declarations: [StartFormComponent],
  providers: [CategoriesService]
})
export class StartFormModule { }
