
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeaderModule } from './header/header.module';
import { SideMenuModule } from './side-menu/side-menu.module';

@NgModule({
  declarations: [
    // components
  ],
  imports: [
    FormsModule,
    HeaderModule,
    SideMenuModule,
  ],
  exports: [
    HeaderModule,
    SideMenuModule
  ]
})
export class SharedModule {}
