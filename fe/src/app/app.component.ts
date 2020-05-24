import { Component,OnInit } from '@angular/core';
import {AuthService} from './core/services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'myProject';
  email : string;
  password: string;
  constructor (private authService: AuthService){

  }
  signup() {
    this.authService.signUp(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.signIn(this.email, this.password);
    this.email = this.password = '';    
  }

  logout() {
    this.authService.logout();
  }
}
