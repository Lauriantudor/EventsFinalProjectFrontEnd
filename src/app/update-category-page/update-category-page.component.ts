import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../model/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-update-category-page',
  templateUrl: './update-category-page.component.html',
  styleUrls: ['./update-category-page.component.css']
})
export class UpdateCategoryPageComponent {
updateCategory: Category | null = null;
constructor(private activatedRoute: ActivatedRoute, private router: Router, private categoryService: CategoryService){}
  ngOnInit() {
    var categoryId = this.activatedRoute.snapshot.params['id'];
    this.categoryService.readCategory(categoryId).subscribe(data=>{
      this.updateCategory = data as Category;
    })
  }

}
