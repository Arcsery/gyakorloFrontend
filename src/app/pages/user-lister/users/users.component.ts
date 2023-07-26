import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  showEditForm: boolean = false

    users = [
  {
    name: "John doe",
    role: "admin"
  },
  {
    name: "John doe",
    role: "admin"
  },
  {
    name: "John doe",
    role: "admin"
  },
  {
    name: "John doe",
    role: "admin"
  },
  {
    name: "John doe",
    role: "admin"
  },

  ]

  cities = [{}]

  constructor(public layoutService: LayoutService){}


  ngOnInit(): void {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ];
  }

  showEditFormFunc(){
    this.showEditForm = true
    if(this.layoutService.state.overlayMenuActive)
    this.layoutService.state.overlayMenuActive = false
  }

}
