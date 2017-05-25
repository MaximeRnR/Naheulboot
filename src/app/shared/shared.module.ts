
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeaderModule } from './header/header.module';


@NgModule({
  declarations: [
    // components
  ],
  imports: [
    FormsModule,
    HeaderModule
  ],
  exports: [
    // components
    HeaderModule,
  ]
})
export class SharedModule {}
