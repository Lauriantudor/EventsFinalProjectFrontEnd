import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { Event } from "src/app/model/event";

@Component({
  selector: 'app-update-event-page',
  templateUrl: './update-event-page.component.html',
  styleUrls: ['./update-event-page.component.css']
})
export class UpdateEventPageComponent {
  updateEvent: Event| null = null;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private eventService: EventService){}

  ngOnInit() {
    var eventId = this.activatedRoute.snapshot.params['id'];
    this.eventService.readEvent(eventId).subscribe(data => {
      this.updateEvent = data as Event;      
      if (this.updateEvent.startDate != null)
          this.updateEvent.startDate = new Date(this.updateEvent.startDate!);
        if (this.updateEvent.endDate != null)
          this.updateEvent.endDate = new Date(this.updateEvent.endDate!);
    })

  }


}
