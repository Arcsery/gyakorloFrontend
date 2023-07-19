import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:8080/api/user/getUsers')
  }

  deleteUser(id: number): Observable<void>{
    return this.http.delete<void>(`http://localhost:8080/api/user/deleteUser/${id}`);
  }
}
