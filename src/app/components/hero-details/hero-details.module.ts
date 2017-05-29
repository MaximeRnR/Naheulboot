import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeroDetailsComponent } from './hero-details.component';


@NgModule({
  declarations: [
    // components
    HeroDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
    HeroDetailsComponent
  ]
})
export class HeroDetailsModule {}
