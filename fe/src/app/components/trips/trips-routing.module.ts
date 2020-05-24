import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TripsListComponent } from './trips-list/trips-list.component';
import { TripCreateComponent } from './trip-create/trip-create.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { TripEditComponent } from './trip-edit/trip-edit.component';

const routes: Route[]=[
    {path: '', pathMatch: 'full', component: TripsListComponent},
    {path: 'create', component: TripCreateComponent},
    {path: 'details/:id', component: TripDetailsComponent},
    {path: 'list', component: TripsListComponent},
    {path: 'edit/:id', component: TripEditComponent},

]

@NgModule ({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})

export class TripsRoutingModule{}