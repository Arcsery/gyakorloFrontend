import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { BackendService } from 'src/app/services/backend.service';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  showOverlay: boolean = false
  showEditForm: boolean = false
  showDeleteForm: boolean = false


  users: User[] = []

  roles = [{}]
  jobs = [{}]

  constructor(public layoutService: LayoutService, private backendService: BackendService){}


  ngOnInit(): void {

    this.getUsers()

    this.roles = [
      { name: 'Admin'},
      { name: 'User' },
      { name: 'Moderator'},
  ];

  this.jobs = [
    { name: 'Marketing'},
    { name: 'Programozó' },
    { name: 'Designer'},
];
  }

  getUsers(){
    this.backendService.getAllUsers().subscribe({
      next: (result) =>{
        this.users = result
        console.log(result)
      },
      error: (err) =>{
        console.log(err)
      }
    })
  }

  showEditFormFunc(){
    this.showOverlay = true
    this.showEditForm = true
    if(this.layoutService.state.overlayMenuActive)
    this.layoutService.state.overlayMenuActive = false
  }

  showDeleteFormFunc(){
    this.showOverlay = true
    this.showDeleteForm = true
    if(this.layoutService.state.overlayMenuActive)
    this.layoutService.state.overlayMenuActive = false
  }

}
