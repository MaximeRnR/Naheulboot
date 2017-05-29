import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MdToolbarModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    // components
    HeaderComponent,
  ],
  imports: [
    FormsModule,
    MdToolbarModule,
    MdButtonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {}
