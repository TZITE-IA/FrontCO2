import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpParams } from '@angular/common/http';
import { DatoNgx } from 'src/app/shared/Interface/grafica.interface';

export const url: string = "https://dtco2.herokuapp.com";

@Injectable({
  providedIn: 'root'
})
export class BackService {
  url = url;

  constructor(private httpClient: HttpClient) { }

  getSensors():Observable<DatoNgx[]> {
    return this.httpClient.get<DatoNgx[]>(this.url);
  }

  getLastestSensors():Observable<DatoNgx[]> {
    return this.httpClient.get<DatoNgx[]>(`${this.url}/last/150`);
  }

}
