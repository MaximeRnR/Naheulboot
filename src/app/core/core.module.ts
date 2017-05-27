
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ModelsModule } from './models/models.module'

@NgModule({
  declarations: [
  ],
  imports: [
    FormsModule,
    ModelsModule
  ],
  exports: [
    ModelsModule
  ]
})
export class CoreModule {}
