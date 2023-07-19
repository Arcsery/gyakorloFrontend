import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private usernameSubject: Subject<string> = new Subject<string>();

  constructor() { }

  setUsername(username: string): void{
    this.usernameSubject.next(username);
  }

  getUsername(): Observable<string>{
    return this.usernameSubject.asObservable();
  }
}
