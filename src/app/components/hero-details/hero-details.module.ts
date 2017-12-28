import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeroDetailsComponent } from './hero-details.component';
import { MatSidenavModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';


@NgModule({
  declarations: [
    // components
    HeroDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatGridListModule
  ],
  exports: [
    HeroDetailsComponent
  ]
})
export class HeroDetailsModule {}
