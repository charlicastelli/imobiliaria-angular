import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { ApiUrl } from './../../../shared/api/api-url';

export class AuxiliaryService {
  constructor(
    public http: HttpClient,
    public apiUrl: ApiUrl,
    public entityDjango: String
  ) {}

  async search(id: number) {
    if (id) {
      const observable = this.http.get<any[]>(
        this.apiUrl.djangoApi + this.entityDjango + id + '/'
      );
      return await lastValueFrom(observable);
    } else {
      const observable = this.http.get<any[]>(
        this.apiUrl.djangoApi + this.entityDjango
      );
      return await lastValueFrom(observable);
    }
  }

  async create(fields: any) {
    const observable = this.http.post<any[]>(
      this.apiUrl.djangoApi + this.entityDjango,
      fields
    );
    return await lastValueFrom(observable);
  }

  async toUpdate(fields: any) {
    const observable = this.http.patch<any[]>(
      this.apiUrl.djangoApi + this.entityDjango + fields.id + '/',
      fields
    );
    return await lastValueFrom(observable);
  }

  async remove(id: number) {
    const observable = this.http.delete<any[]>(
      this.apiUrl.djangoApi + this.entityDjango + id + '/'
    );
    return await lastValueFrom(observable);
  }
}
