import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Category } from '../model/category';
import { Event } from '../model/event';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnChanges {
category:Category = new Category(null, null,null);
updateCategoryUrl:string ='';
events:Event[] = [];
  constructor(private categoryService: CategoryService, private activatedRoute: ActivatedRoute, private router:Router, private dialog: MatDialog) {

  }
  ngOnInit() {
  
    const categoryId=this.activatedRoute.snapshot.params['id'];
    if(this.category.id !== categoryId){
    this.updateCategoryUrl="/update-category/"+categoryId;
    this.categoryService.readCategory(categoryId).subscribe(data => {
      console.log(data);
      this.category =data as Category;
    }, err => {
      console.log(err);
      if(err.error == "There it is no category with id: "+ categoryId) {  
          this.router.navigate(['not-found'])
      }
    })
    this.desplayEventsOfCategory();}
   
  }

  ngOnChanges(changes: SimpleChanges): void {
    const categoryId=this.activatedRoute.snapshot.params['id'];
    this.updateCategoryUrl="/update-category/"+categoryId;
    this.categoryService.readCategory(categoryId).subscribe(data => {
      console.log(data);
      this.category =data as Category;
    }, err => {
      console.log(err);
      if(err.error == "There it is no category with id: "+ categoryId) {  
          this.router.navigate(['not-found'])
      }
    })
    this.desplayEventsOfCategory();
  }
  navigateToEvent(event:Event){
    this.router.navigate(['/events/'+event.id])
  }
  public openConfirmationDialog() {
    var dialogRef = this.dialog.open(ConfirmationDialogComponent)
    dialogRef.componentInstance.actionConfirmedEvent.subscribe(
      actionConfirmed => {
        if(actionConfirmed == true) {
          this.deleteCategory(this.category.id);
        }
    })
  }

  deleteCategory(id:any){
    this.categoryService.deleteCategory(id).subscribe(data => {
      this.router.navigate(['/categories'])
    },err=>console.log(err))
  }
  desplayEventsOfCategory(){
    const categoryId=this.activatedRoute.snapshot.params['id'];
       this.categoryService.getEventsOfCategory(categoryId).subscribe(data => {
        this.events = data as Event[];
       },err=>console.log(err))
  }

}
