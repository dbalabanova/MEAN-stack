import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TripCreateComponent} from './trip-create/trip-create.component'
import {TripDetailsComponent} from './trip-details/trip-details.component'
import {TripsListComponent} from './trips-list/trips-list.component'
import {TripEditComponent } from './trip-edit/trip-edit.component'
import {MaterialModule} from '../../material.module'
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {TripsRoutingModule} from './trips-routing.module';


@NgModule({
    declarations:[
        TripCreateComponent,
        TripDetailsComponent,
        TripsListComponent,
        TripEditComponent,
    ],
    imports:[
        CommonModule,
        MaterialModule,
        BrowserAnimationsModule,
        ToastrModule,
        FormsModule,
        ReactiveFormsModule,
        TripsRoutingModule
    ],
    exports:[
        TripCreateComponent,
        TripDetailsComponent,
        TripsListComponent,
        TripEditComponent,
    ]
})
export class TripsModule {}