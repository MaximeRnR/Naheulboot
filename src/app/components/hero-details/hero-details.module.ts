import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeroDetailsComponent } from './hero-details.component';
import { MdSidenavModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { MdIconModule } from '@angular/material';


@NgModule({
  declarations: [
    // components
    HeroDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MdSidenavModule,
    MdCardModule,
    MdButtonModule,
    MdListModule,
    MdIconModule
  ],
  exports: [
    HeroDetailsComponent
  ]
})
export class HeroDetailsModule {}
