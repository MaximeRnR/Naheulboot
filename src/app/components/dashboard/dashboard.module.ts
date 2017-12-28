import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatSliderModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    // components
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
    MatSliderModule,
    MatInputModule,
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {}
