import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { HeaderComponent } from './header.component';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [
    // components
    HeaderComponent,
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {}
