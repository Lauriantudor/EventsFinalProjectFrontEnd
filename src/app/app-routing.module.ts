import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventPageComponent } from './event-page/event-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { NewEventPageComponent } from './new-event-page/new-event-page.component';
import { UpdateEventPageComponent } from './update-event-page/update-event-page.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { NewCategoryPageComponent } from './new-category-page/new-category-page.component';
import { UpdateCategoryPageComponent } from './update-category-page/update-category-page.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path : 'events/:id', component: EventPageComponent},
  {path:'events', component: EventsPageComponent},
  {path:'new-event', component: NewEventPageComponent},
  {path: 'update-event/:id', component: UpdateEventPageComponent},
  {path:'update-category/:id', component: UpdateCategoryPageComponent},
  {path : 'categories/:id', component: CategoryPageComponent},
  {path:'categories', component: CategoriesPageComponent},
  {path: 'new-category', component: NewCategoryPageComponent},
  {path: 'auth', component: AuthComponent},
  {path : 'not-found', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
