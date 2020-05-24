import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms'
import {Observable} from 'rxjs'
import { TripsService } from 'src/app/core/services/trips.service';
import {Router} from '@angular/router'
import {TripCreate} from '../../shared/models/trips-create.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-trip-create',
  templateUrl: './trip-create.component.html',
  styleUrls: ['./trip-create.component.scss']
})
export class TripCreateComponent implements OnInit {
  bindingModel: TripCreate
  createForm:FormGroup

  constructor(
    private fb: FormBuilder,
    private tripsService: TripsService,
    private router: Router,
    private toastr: ToastrService
    
  ) {
  }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      name: [null, [Validators.required]],
      imagePath: [null, [ Validators.required] ],
      description: [null, [ Validators.required, Validators.minLength(10)] ],
    })
  }

  create(){
    this.tripsService.createTrip(this.createForm.value)
    .subscribe((trip)=>{
      this.toastr.success('Trip created!','success')
      this.router.navigate(['/trips/list'])
    })
  }
 
}
