import { Component } from '@angular/core';
import { Category } from '../model/category';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent {
  categories: Category[] = [];
  protected readonly Category = Category;
  constructor(private categoryService: CategoryService, private router: Router){}
  ngOnInit() {
    this.categoryService.readCategories().subscribe(data=>{
      console.log(data);
      this.categories= data as Category[];
    },err=>console.log(err));
  }
  navigateToCategory(category: Category){
    this.router.navigate(['/categories/'+category.id])
  }
}
