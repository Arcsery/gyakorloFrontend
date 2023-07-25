import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(public layoutService: LayoutService) {}

    
  ngOnInit() {
    this.items = [
      
        {
            label: 'Navigáció',
            items: [
                {
                    label: '<span class="text-lg ml-2 ">Regisztróció</span>',
                    escape: false,
                    icon: 'pi pi-user-plus',
                    iconClass: 'text-xl',
                    routerLink: '/register'
                },
                {
                    label: '<span class="text-lg ml-2 ">Bejelentkezés</span>',
                    escape: false,
                    icon: 'pi pi-user',
                    iconClass: 'text-xl',
                    routerLink: '/login'
                }
            ]
        },
        {
            label: 'Felhasználók',
            items: [
                {
                    label: '<span class="text-lg ml-2 ">Listázás</span>',
                    escape: false,
                    icon: 'pi pi-list',
                    iconClass: 'text-xl',
                    routerLink: '/users'
                },
            ]
        }
    ];
}

}
