import { Component } from '@angular/core';
import { Category } from '../model/category';

@Component({
  selector: 'app-new-category-page',
  templateUrl: './new-category-page.component.html',
  styleUrls: ['./new-category-page.component.css']
})
export class NewCategoryPageComponent {
newCategory:Category = new Category(null,null,null)
}
