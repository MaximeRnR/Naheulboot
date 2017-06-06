import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdGridListModule, MdSidenavModule} from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';
import { MdSliderModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { AddHeroComponent } from './add-hero.component';
//import { AppRoutingModule } from '../../app-routing.module';


@NgModule({
  declarations: [
    // components
    AddHeroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdSidenavModule,
    MdCardModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdSelectModule,
    MdSliderModule,
    MdInputModule,
    MdGridListModule,
    //AppRoutingModule
  ],
  exports: [
    AddHeroComponent
  ]
})
export class AddHeroModule {}
