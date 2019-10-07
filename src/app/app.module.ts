import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';

@NgModule({
  imports: [
    BrowserModule
  ],

  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent
  ],

  bootstrap: [EventsAppComponent]
})
export class AppModule { }
