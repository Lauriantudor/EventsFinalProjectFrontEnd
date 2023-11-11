import { Component, Input } from '@angular/core';
import { Category } from '../model/category';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {
  @Input()
  category: Category= new Category(null, null, null);

  constructor(private categoryService: CategoryService, private router: Router) {}
  categoryForm: FormGroup = new FormGroup({
    nameInput: new FormControl()
  })
  ngOnInit(){
    this.categoryForm = new FormGroup({
      nameInput: new FormControl(this.category.name)
    })
  }
  saveOrUpdateCategory(){
    console.log(this.category);
    this.populateCategoryFromForm();
    if (this.category.id == null) {
      this.categoryService.saveCategory(this.category).subscribe(data => {
        this.router.navigate(['/categories'])
      },err=>console.log(err))
    }
    if (this.category.id != null) {
      this.categoryService.updateCategory(this.category.id,this.category).subscribe(data => {
        this.router.navigate(['/categories'])
      },err=>console.log(err))
    }

  }
  populateCategoryFromForm(){
    this.category.name = this.categoryForm.value.nameInput;
  }
}
