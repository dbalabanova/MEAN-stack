import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/shared/landing/landing.component';
import{AuthGuard} from './core/guards/auth.guard'
import {TripsRoutingModule} from './components/trips/trips-routing.module'
import { AuthRoutingModule } from "./components/auth/auth-routing.module";

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'auth',
loadChildren:()=>AuthRoutingModule},
  { path: 'trips', 
  loadChildren: ()=>TripsRoutingModule, 
  canActivate:[AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
