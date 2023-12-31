import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { UserLoggedIn } from '../model/UserLoggedIn';
import { UserLogin } from '../model/UserLogin';

const USER_KEY = 'auth-user'
const USER_KEY_TEST = 'auth-user-test'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public cleanCookie(): void {
    document.cookie = `${USER_KEY}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    window.location.reload()
  }

  private convertUserToJSONString(user: UserLoggedIn): string {
    return JSON.stringify(user);
  }

  private convertJSONStringToUser(jsonString: string): UserLoggedIn {
    return JSON.parse(jsonString);
  }

  public saveUserToCookie(user: UserLoggedIn): void {
    const userJSON = this.convertUserToJSONString(user);
    document.cookie = `${USER_KEY}=${userJSON}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/;`;
  }

  public getUserFromCookie(): UserLoggedIn | null {
    const cookieValue = this.getCookieValue(USER_KEY);
    if (cookieValue) {
      return this.convertJSONStringToUser(cookieValue);
    }
    return null;
  }

  private getCookieValue(name: string): string | null {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName.trim() === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  }


  public isLoggedIn(): boolean{
    const cookieUser = this.getUserFromCookie()
    if (cookieUser){
      return true;
    }
    return false;
  }
}
