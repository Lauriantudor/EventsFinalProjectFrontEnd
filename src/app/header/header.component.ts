import { Component } from '@angular/core';
import { Category } from '../model/category';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
categories : Category[] = [];

  constructor(private categoryService: CategoryService, private router: Router){}

  ngOnInit() {
    this.categoryService.readCategories().subscribe(data =>{
      this.categories = data as Category[];
    },err =>console.log(err))
  }
  goToCategory(id:any){
    this.router.navigate(['/categories/' + id]);

  }

}
