import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/components/service/authentication/authentication.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const user = this.authenticationService.currentUserValue;
    if (user && user.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Token ${user.token}`,
        },
      });
    }
    return next.handle(request);
  }
}
