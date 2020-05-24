import { Component, OnInit } from '@angular/core';
import { TripsList } from '../../shared/models/trips-list.model';
import { TripCreate } from '../../shared/models/trips-create.model';
import { TripsService } from 'src/app/core/services/trips.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder,Validators,FormGroup} from '@angular/forms'


@Component({
  selector: 'app-trip-edit',
  templateUrl: './trip-edit.component.html',
  styleUrls: ['./trip-edit.component.scss']
})
export class TripEditComponent implements OnInit {
id: string;
bindingModel: TripCreate
editForm: FormGroup

  constructor(
    private tripsService:TripsService,
    private route: ActivatedRoute,
    private router: Router,
    private toatstr: ToastrService,
    private fb: FormBuilder,

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.tripsService.getById(this.id).subscribe((data)=>{
      this.bindingModel=data;

    });
    
    this.editForm = this.fb.group({
      name: [null, [Validators.required]],
      imagePath: [null, [ Validators.required] ],
      description: [null, [ Validators.required,Validators.minLength(10)] ],
    })


  }

  edit(){
    const body={
      [this.id]: this.bindingModel,
    }

    this.tripsService.editTrip(body, this.id).subscribe((data)=>{
      this.toatstr.success('Trip edited','success')
      this.router.navigate(['/trips/list'])
    })

  }

}
