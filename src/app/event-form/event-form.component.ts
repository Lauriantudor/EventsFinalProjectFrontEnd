import { Component, Input } from '@angular/core';
import { Event } from '../model/event';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { Category } from '../model/category';
import { CategoryService } from '../services/category.service';
@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent {
  @Input()
  event: Event = new Event(null, null, null, null, null, null, null, null);
  categories:Category[] = [];
  constructor(private categoryService: CategoryService,private eventService: EventService, private router: Router) {} // un container pentru toate căsuțele de input
  eventForm: FormGroup = new FormGroup({
    nameInput: new FormControl(),
    descriptionInput: new FormControl(),
    locationInput: new FormControl(),
    imgUrlInput: new FormControl(),
    startDateInput: new FormControl(),
    endDateInput: new FormControl(),
    categoryInput: new FormControl(),
  });

  ngOnInit() {
    console.log(this.event);
    this.eventForm = new FormGroup({
      nameInput: new FormControl(this.event.name),
      descriptionInput: new FormControl(this.event.description),
      locationInput: new FormControl(this.event.location),
      imgUrlInput: new FormControl(this.event.imgUrl),
      startDateInput: new FormControl(this.event.startDate),
      endDateInput: new FormControl(this.event.endDate),
      categoryInput: new FormControl(this.event.category),
    });
    this.getCategories();
  }
  getCategories() {
    this.categoryService.readCategories().subscribe(data=> {
      this.categories = data as Category[];
      console.log(this.categories);
    },err=> console.log(err))
  }
  saveOrUpdateEvent() {
    this.populateEventFromForm();
    console.log(this.event);
    if (this.event.id == null) {
      this.eventService.saveEvent(this.event).subscribe(
        (data) => {
          this.router.navigate(['/events']);  
        },
        (err) => console.log(err)
      );
    }
    if(this.event.id !=null){
      this.eventService.updateEvent(this.event, this.event.id).subscribe(data => {
        this.router.navigate(['/events']);
      },err => console.log(err))
    }
  }
  populateEventFromForm() {
    this.event.name = this.eventForm.value.nameInput;
    this.event.description = this.eventForm.value.descriptionInput;
    this.event.location = this.eventForm.value.locationInput;
    this.event.imgUrl = this.eventForm.value.imgUrlInput;
    this.event.startDate = this.eventForm.value.startDateInput;
    this.event.endDate = this.eventForm.value.endDateInput;
    this.event.category = this.eventForm.value.categoryInput;
    console.log(this.eventForm);
  }
}
