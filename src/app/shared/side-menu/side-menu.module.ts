import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MdSidenavModule } from '@angular/material';
import { SideMenuComponent } from './side-menu.component';


@NgModule({
  declarations: [
    // components
    SideMenuComponent,
  ],
  imports: [
    FormsModule,
    MdSidenavModule
  ],
  exports: [
    SideMenuComponent
  ]
})
export class SideMenuModule {}
