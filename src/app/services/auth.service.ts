import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';

const AUTH_API: String = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(user: User): Observable<User>{
    return this.http.post<User>(AUTH_API + 'signup', user)
  }

  login(user: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>(AUTH_API + 'signin', user)
  }

  logout(): Observable<any>{
    return this.http.post(AUTH_API + 'signout', {}, httpOptions);
  }
}