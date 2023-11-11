import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/model/event';
import { EventService } from '../services/event.service';
@Component({
  selector: 'app-events-cards',
  templateUrl: './events-cards.component.html',
  styleUrls: ['./events-cards.component.css'],
  
})
export class EventsCardsComponent {
  @Input()
  event: Event = new Event(null, null, null, null, null, null, null, null);

}
