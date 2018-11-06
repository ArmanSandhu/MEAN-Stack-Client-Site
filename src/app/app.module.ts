import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CalendarComponent } from 'angular2-fullcalendar/src/calendar/calendar';
import { MdSidenavModule } from '@angular2-material/sidenav/sidenav';
import { MdListModule } from '@angular2-material/list/list';
import { MdToolbarModule } from "@angular2-material/toolbar/toolbar";
import { MdIconModule, MdIconRegistry } from '@angular2-material/icon/icon';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyCalendarComponent } from './my-calendar/my-calendar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CalendarService } from './services/calendar.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyCalendarComponent,
    PageNotFoundComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MdSidenavModule,
    MdListModule,
    MdToolbarModule,
    MdIconModule
  ],
  providers: [CalendarService, MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
