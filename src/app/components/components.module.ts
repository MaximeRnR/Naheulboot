
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    // components
  ],
  imports: [
    FormsModule,
    DashboardModule
  ],
  exports: [
    DashboardModule
  ]
})
export class ComponentsModule {}
