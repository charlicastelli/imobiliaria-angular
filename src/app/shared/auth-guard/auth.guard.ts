import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/components/service/authentication/authentication.service';

Injectable({
  providedIn: 'root',
});
export function AuthGuard(
  authenticationService: AuthenticationService,
  router: Router
) {
  return () => {
    const user = authenticationService.authenticatedUser;
    if (user) {
      return true;
    } else {
      router.navigate(['']);
      return false;
    }
  };
}
