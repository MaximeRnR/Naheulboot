
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardModule } from './dashboard/dashboard.module';
import { HeroDetailsModule } from './hero-details/hero-details.module';

@NgModule({
  declarations: [
    // components
  ],
  imports: [
    FormsModule,
    DashboardModule,
    HeroDetailsModule
  ],
  exports: [
    DashboardModule,
    HeroDetailsModule

  ]
})
export class ComponentsModule {}
