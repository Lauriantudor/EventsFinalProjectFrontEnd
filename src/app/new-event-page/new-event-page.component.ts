import { Component } from '@angular/core';
import { Event } from "src/app/model/event";
@Component({
  selector: 'app-new-event-page',
  templateUrl: './new-event-page.component.html',
  styleUrls: ['./new-event-page.component.css']
})
export class NewEventPageComponent {
  newEvent: Event = new Event(null,null, null, null, null, null, null, null);

}
