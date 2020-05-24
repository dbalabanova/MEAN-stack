import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import * as firebase from 'firebase'
import {Observable} from 'rxjs'
import {Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';


const baseUrl = 'http://localhost:3000/api'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Object;
  constructor(
    
    private toastr: ToastrService,
    private router: Router,
    private firebaseAuth: AngularFireAuth,
    private http: HttpClient
  ) {

   }
    signUp(email:string, password: string) {
      this.http.post(`${baseUrl}/register`, { email, password })
      .subscribe({
        next: () => {
          this.router.navigate(['/auth/login'])
          this.toastr.success('Signed Up', 'Success')
      },
      error: (err) =>{
        this.toastr.error(err.error.error, 'Warning')
      }
    })
  }
  
  signIn(email: string, password: string) {
    this.http.post(`${baseUrl}/login`, {email, password})
    .subscribe({
      next: (user) => {
        this.user = user
        this.router.navigate(['/'])
        this.toastr.success('Logged in', 'Success')
        },
        error: (err) => {
          this.toastr.error(err.error.error, 'Warning')

          
        }
      })
   }

  logout() {
    this.http.get('`${baseUrl}/logout`').subscribe({
      next: () => {
      this.user=null
      this.toastr.success('Logged out successfully','Success')
      this.router.navigate(['/'])
      },
      error: (err) => {
        this.toastr.error(err.error.error,'Warning')
      }
    })
  }


  getUser() {
    this.http.get(`${baseUrl}/users/currentUser`).subscribe({
      next: (user) =>{
        this.user = user
      },
      error: () => {}
    })
    return this.user
  }

   isAuthenticated(): boolean{

     return this.user!=undefined
  }
}
