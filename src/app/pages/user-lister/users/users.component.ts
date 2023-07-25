import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

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

}
