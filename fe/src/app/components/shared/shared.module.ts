import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from './footer/footer.component'
import {HeaderComponent} from './header/header.component';
import {LandingComponent} from './landing/landing.component';
import {MaterialModule} from '../../material.module'
import {RouterModule} from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr'





@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LandingComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    LandingComponent
  ]
})
export class SharedModule { }
