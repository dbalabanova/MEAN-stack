import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import {TripsList} from '../../shared/models/trips-list.model';
import { TripsService } from 'src/app/core/services/trips.service';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.scss']
})
export class TripsListComponent implements OnInit {
  trips$: any
  constructor(
    private tripService: TripsService
  ) { }

  ngOnInit(){
   
   return this.trips$ = this.tripService.getAllTrips()
   
  }
 

}
