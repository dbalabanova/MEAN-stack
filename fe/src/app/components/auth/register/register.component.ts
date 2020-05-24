import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms'
import {Router} from '@angular/router'
import {AuthService} from '../../../core/services/auth.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide=true
  formRegister: FormGroup

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.formRegister= this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [ Validators.required] ],
    })
  }

  register(){
    const email=this.formRegister.value.email
    const password = this.formRegister.value.password
    this.authService.signUp(email,password)
    
  }
}
