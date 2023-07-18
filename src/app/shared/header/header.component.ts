import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  currentUser?: any

  constructor(private storageService: StorageService, private authService: AuthService){}

  logout(): void{
    if(this.storageService.isLoggedIn()){
      this.authService.logout().subscribe({
        next: result =>{
          console.log("logged out sucessfuly")
          this.storageService.clean()
        },
        error: error =>{
          console.log(error)
        }
      })
    }
  }

}
