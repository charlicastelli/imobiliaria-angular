import { AuxiliaryService } from './../auxiliary/auxiliary-service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrl } from 'src/app/shared/api/api-url';

@Injectable({
  providedIn: 'root'
})
export class ImoveisService extends AuxiliaryService {

  constructor(public override http: HttpClient, public override apiUrl: ApiUrl) {
    super(http, apiUrl, 'imoveis/');
   }
}
