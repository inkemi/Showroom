import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import {NgxCarouselModule} from 'ngx-carousel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxCarouselModule,
    MatCardModule
  ],
  declarations: [
    CarouselComponent
  ]
})
export class CarouselModule { }
