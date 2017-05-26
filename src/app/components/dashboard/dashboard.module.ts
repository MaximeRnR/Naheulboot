import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MdSidenavModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    // components
    DashboardComponent,
  ],
  imports: [
    FormsModule,
    MdSidenavModule,
    MdCardModule,
    MdButtonModule,
    MdListModule,
    MdIconModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {}
