import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from 'src/app/model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  baseUrl ='/api/events';
  constructor(private httpClient: HttpClient) { }
  saveEvent(event: Event): Observable<Event>{
    return this.httpClient.post<Event>(`${this.baseUrl}`,event)
  }
  readEvent(evventId:number):Observable<Event>{
   return this.httpClient.get<Event>(`${this.baseUrl}/${evventId}`);
  }
  readEvents():Observable<Event[]>{
    return this.httpClient.get<Event[]>(`${this.baseUrl}`)
  }
  updateEvent(event:Event, eventId:number):Observable<Event>{
    return this.httpClient.put<Event>(`${this.baseUrl}/${eventId}`,event)
  }
  deleteEvent(evventId:number):Observable<any>{
    return this.httpClient.delete<any>(`${this.baseUrl}/${evventId}`)
  }
}
