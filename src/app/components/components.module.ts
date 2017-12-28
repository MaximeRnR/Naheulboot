
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardModule } from './dashboard/dashboard.module';
import { AddHeroModule } from './add-hero/add-hero.module';
import { HeroDetailsModule } from './hero-details/hero-details.module';
import { UpdateHeroModule } from './update-hero/update-hero.module';


@NgModule({
  declarations: [
    // components
  ],
  imports: [
    FormsModule,
    DashboardModule,
    AddHeroModule,
    UpdateHeroModule,
    HeroDetailsModule
  ],
  exports: [
    DashboardModule,
    AddHeroModule,
    UpdateHeroModule,
    HeroDetailsModule
  ]
})
export class ComponentsModule {}
