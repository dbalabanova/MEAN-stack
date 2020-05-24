import { Component, OnInit } from '@angular/core';
import { TripsList } from '../../shared/models/trips-list.model';
import { TripsService } from '../../../core/services/trips.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/services/auth.service';
//import { TripCreate } from '../../shared/models/trips-create.model';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss']
})
export class TripDetailsComponent implements OnInit {
trip: TripsList
id:string
user:any
userId:string

  constructor(
    private tripsService:TripsService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    
    this.id= this.route.snapshot.params['id']
    this.tripsService.getById(this.id).subscribe((data)=>{
    this.trip=data
    this.user = this.authService.getUser()
    this.userId = this.user._id
      
    })
  }

  delete(){
    this.tripsService.delete(this.id).subscribe((data)=>{
    this.toastr.success('Trip deleted', 'success')
    this.router.navigate(['/trips/list'])
    })
  }

  isCreator() {
   return this.trip.creatorId === this.userId
  }
}
