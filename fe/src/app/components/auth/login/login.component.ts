import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms'
import {Router} from '@angular/router'
import {AuthService} from '../../../core/services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide=true
  formLogin: FormGroup
  // email= new FormGroup (null, [Validators.required, Validators.email])
  // password=new FormGroup (null,[ Validators.required] ) 

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    this.formLogin = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [ Validators.required] ],
    })
  }

  login(){
    const email=this.formLogin.value.email
    const password = this.formLogin.value.password
    this.authService.signIn(email,password)

  }

  
}
