import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { Event } from '../model/event';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
baseUrl = 'api/category'
  constructor(private http:HttpClient) { }

  saveCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.baseUrl}`,category)
  }
  readCategory(categoryId: number):Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/ ${categoryId}`);
  }
  readCategories():Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}`)
  }
  updateCategory(categoryId: number, category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.baseUrl}/ ${categoryId}`,category)
  }
  getEventsOfCategory(categoryId: number): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/eventsOf/${categoryId}`)
  }

  deleteCategory(categoryId: number): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/${categoryId}`)
  }

}
