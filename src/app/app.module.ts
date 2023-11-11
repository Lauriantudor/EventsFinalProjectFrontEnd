import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { AppComponent } from './app.component';
import { EventPageComponent } from './event-page/event-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsCardsComponent } from './events-cards/events-cards.component';
import { HeaderComponent } from './header/header.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { NewEventPageComponent } from './new-event-page/new-event-page.component';
import { EventFormComponent } from './event-form/event-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateEventPageComponent } from './update-event-page/update-event-page.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { UpdateCategoryPageComponent } from './update-category-page/update-category-page.component';
import { NewCategoryPageComponent } from './new-category-page/new-category-page.component';

import { MatDialogModule} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { AuthComponent } from './auth/auth.component';
import { CustomInterceptor } from './services/custom.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    EventPageComponent,
    NotFoundPageComponent,
    CategoryPageComponent,
    EventsCardsComponent,
    HeaderComponent,
    EventsPageComponent,
    NewEventPageComponent,
    EventFormComponent,
    UpdateEventPageComponent,
    CategoryItemComponent,
    CategoriesPageComponent,
    CategoryFormComponent,
    UpdateCategoryPageComponent,
    NewCategoryPageComponent,
    ConfirmationDialogComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatMenuModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule,
   

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass:CustomInterceptor,
    multi: true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
