import { Component } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event} from 'src/app/model/event';
import { Router } from '@angular/router';
@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent {
  events: Event[] = [];
  protected readonly Event  = Event;
  constructor(private eventService: EventService, private router: Router){}
  ngOnInit() {
    this.eventService.readEvents().subscribe(data =>{
     console.log(data); 
      this.events = data as Event[];
    },err => console.log(err));
  }
navigateToEvent(event:Event){
  this.router.navigate(['/events/'+event.id])

  }

}
