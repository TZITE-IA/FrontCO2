import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from './back.service';

interface Access {
  acess: boolean,
  error: string
}

export interface Usuario{
  user: string,
  pwd : string
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  access(user : Usuario): Observable<Access> {
    return this.httpClient.post<Access>(url+"/login/validate",user)
  }
}
