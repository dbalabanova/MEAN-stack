import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import {map} from 'rxjs/operators'
import {TripsList} from '../../components/shared/models/trips-list.model';
import {TripCreate} from '../../components/shared/models/trips-create.model';

const baseUrl = 'http://localhost:3000/api/trips'

@Injectable({
  providedIn: 'root'
})
export class TripsService {
  
  constructor(
    private http:HttpClient,
    ) { }

  getAllTrips() {
    return this.http.get(`${baseUrl}`)
}

  createTrip(body: TripCreate){
  return this.http.post(`${baseUrl}/create`,body)
  }

  getById(tripId:string){
  return this.http.get<TripsList>(`${baseUrl}/${tripId}`)
}

  editTrip(body,tripId){
  return this.http.put(`${baseUrl}/${tripId}`,body)
}

  delete (tripId:string){
  return this.http.delete(`${baseUrl}/${tripId}`)
  
}
}
