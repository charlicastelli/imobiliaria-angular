import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  public get currentUserObject(): BehaviorSubject<any> {
    return this.currentUserSubject;
  }

  async login(campos: any) {
    return await this.http
      .post<any[]>(this.apiUrl.djangoApi + 'login/', campos)
      .toPromise()
      .then((user) => {
        localStorage.setItem('usuario', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      });
  }
}
