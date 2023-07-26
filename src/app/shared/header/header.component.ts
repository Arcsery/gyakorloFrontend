import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedDataService } from 'src/app/helpers/shared-data.service';
import { UserLoggedIn } from 'src/app/model/UserLoggedIn';
import { AuthService } from 'src/app/services/auth.service';
import { LayoutService } from 'src/app/services/layout.service';
import { StorageService } from 'src/app/services/storage.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MenuItem, SelectItem } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  cookieUsername?: any
  loginUsername?: any
  items: MenuItem[] = [];

  constructor(public layoutService:LayoutService, private storageService: StorageService, private authService: AuthService, private sharedDataService: SharedDataService){}
  
  ngOnInit(): void {
    const user: UserLoggedIn | null = this.storageService.getUserFromCookie();


    this.items = [
      
      {
          label: 'John Doe',
          items: [
              {
                  label: '<span class="text-lg ml-2 ">Kijelentkezés</span>',
                  escape: false,
                  icon: 'pi pi-user-plus',
                  iconClass: 'text-xl',
                  routerLink: '/login'
              },
          ]
      },
  ];

    if(user){
      this.cookieUsername = user.username;
    }

    this.sharedDataService.getUsername().subscribe((username: string) => {
      this.loginUsername = username;
    });
  }

  @ViewChild('overlayPanel')
  overlayPanel!: OverlayPanel;

  toggleOverlayPanel(event: Event) {
    this.overlayPanel.toggle(event);
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
