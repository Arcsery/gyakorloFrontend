import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedDataService } from 'src/app/helpers/shared-data.service';
import { UserLoggedIn } from 'src/app/model/UserLoggedIn';
import { AuthService } from 'src/app/services/auth.service';
import { LayoutService } from 'src/app/services/layout.service';
import { StorageService } from 'src/app/services/storage.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  cookieUsername?: any
  loginUsername?: any


  constructor(public layoutService:LayoutService, private storageService: StorageService, private authService: AuthService, private sharedDataService: SharedDataService){}
  
  ngOnInit(): void {
    const user: UserLoggedIn | null = this.storageService.getUserFromCookie();

    if(user){
      this.cookieUsername = user.username;
    }

    this.sharedDataService.getUsername().subscribe((username: string) => {
      this.loginUsername = username;
    });
  }

  logout(): void{
      this.authService.logout().subscribe({
        next: result =>{
          console.log("logged out sucessfuly")
          this.storageService.clean()
          this.storageService.cleanCookie()
        },
        error: error =>{
          console.log(error)
        }
      })
  }

}
