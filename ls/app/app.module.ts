import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';

// add the bootstrap-ng modules



@NgModule({
  declarations: [
    AppComponent,
  ],
imports: [
    CarouselModule.forRoot(), BsDropdownModule.forRoot(), TooltipModule.forRoot(),
    ModalModule.forRoot(), BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
