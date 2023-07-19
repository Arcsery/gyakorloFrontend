import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { UserLoggedIn } from '../model/UserLoggedIn';

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
    return this.http.post<User>(AUTH_API + 'signup',user, httpOptions)
  }

  login(user: UserLogin): Observable<UserLoggedIn>{
    return this.http.post<UserLoggedIn>(AUTH_API + 'signin', user, httpOptions)
  }

  logout(): Observable<any>{
    return this.http.post(AUTH_API + 'signout', {}, httpOptions);
  }
}
