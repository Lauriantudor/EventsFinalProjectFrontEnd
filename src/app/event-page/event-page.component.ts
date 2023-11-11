import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/model/event';
import { EventService } from '../services/event.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent {
event: Event = new Event(null,null, null, null, null, null, null,null);
updateEventUrl:string = '';
constructor(private eventService: EventService, private activatedRoute: ActivatedRoute, private router: Router,private dialog:MatDialog) {}
  ngOnInit() {
    const eventId= this.activatedRoute.snapshot.params['id'];
    this.updateEventUrl ="/update-event/"+ eventId;
    this.eventService.readEvent(eventId).subscribe((data) => {
      console.log(data);
      this.event =data as Event;
      if (this.event.startDate != null)
          this.event.startDate = new Date(this.event.startDate!);
        if (this.event.endDate != null)
          this.event.endDate = new Date(this.event.endDate!);
    },err=>{
      console.log(err)
      if(err.error == "There it is no event with "+eventId){
        this.router.navigate(['not-found'])
      }
      
    })
  }
  public openConfirmationDialog() {
    var dialogRef = this.dialog.open(ConfirmationDialogComponent)
    dialogRef.componentInstance.actionConfirmedEvent.subscribe(
      actionConfirmed => {
        if(actionConfirmed == true) {
          this.deleteEvent(this.event.id);
        }
    })
  }

  deleteEvent(eventId:any){
    this.eventService.deleteEvent(eventId).subscribe(data=>{
      this.router.navigate(['/events/'])
    },err=>{console.log(err)})
  }
  
}
