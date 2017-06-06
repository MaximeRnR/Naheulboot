
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardModule } from './dashboard/dashboard.module';
import { AddHeroModule } from './add-hero/add-hero.module';
import { HeroDetailsModule } from './hero-details/hero-details.module';

@NgModule({
  declarations: [
    // components
  ],
  imports: [
    FormsModule,
    DashboardModule,
    AddHeroModule,
    HeroDetailsModule
  ],
  exports: [
    DashboardModule,
    AddHeroModule,
    HeroDetailsModule

  ]
})
export class ComponentsModule {}
