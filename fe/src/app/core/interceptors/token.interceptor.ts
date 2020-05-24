import {HttpHandler, HttpRequest,HttpInterceptor, HttpEvent} from '@angular/common/http'
import {Observable} from 'rxjs'

import {Injectable} from '@angular/core'
import { AuthService } from '../services/auth.service'

@Injectable()
export class TokenInterceptor implements HttpInterceptor { 

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            withCredentials: true
        });

        return next.handle(request);
    }
}