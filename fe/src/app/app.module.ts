import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
//import {ToastrModule} from 'ngx-toastr'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TripsModule } from './components/trips/trips.module';
import { AuthModule } from './components/auth/auth.module';
import { SharedModule } from './components/shared/shared.module';
import { MaterialModule } from './material.module';
//import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { TokenInterceptor } from './core/interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //BrowserAnimationsModule,
    TripsModule,
    AuthModule,
    SharedModule,
    MaterialModule,
    //ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    //FormsModule,
    //ReactiveFormsModule,
    HttpClientModule,
    AngularFireDatabaseModule
  ],
  providers: [
    //AuthService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  },

],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
