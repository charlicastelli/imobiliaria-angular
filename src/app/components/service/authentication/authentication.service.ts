import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom, Observable } from 'rxjs';
import { ApiUrl } from 'src/app/shared/api/api-url';

import { AuxiliaryService } from './../auxiliary/auxiliary-service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends AuxiliaryService {
  private currentUserSubject!: BehaviorSubject<any>;
  public currentUser$!: Observable<any>;
  

  constructor(
    public override http: HttpClient,
    public override apiUrl: ApiUrl
  ) {
    super(http, apiUrl, 'login');

    let data = localStorage.getItem('user');
    if (data != 'undefined') {
      this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(data!));
    } else {
      this.currentUserSubject = new BehaviorSubject<any>(null);
    }
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  public get authenticatedUser(): any {
    try {
      let userData = localStorage.getItem('user');
      return userData!;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  public get currentUserObject(): BehaviorSubject<any> {
    return this.currentUserSubject;
  }

  async login(campos: any) {
    const observable = this.http.post<any[]>(
      this.apiUrl.djangoApi + 'login/',
      campos
    );
    return await lastValueFrom(observable).then((user) => {
      localStorage.setItem('user', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
    });
  }
}
