import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { AddHeroComponent } from './components/add-hero/add-hero.component';
import { UpdateHeroComponent } from './components/update-hero/update-hero.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'add', component: AddHeroComponent},
  {path: 'detail/:id', component: HeroDetailsComponent},
  {path: 'update/:id', component: UpdateHeroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
