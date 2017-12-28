import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material';
import { SideMenuComponent } from './side-menu.component';


@NgModule({
  declarations: [
    // components
    SideMenuComponent,
  ],
  imports: [
    FormsModule,
    MatSidenavModule
  ],
  exports: [
    SideMenuComponent
  ]
})
export class SideMenuModule {}
