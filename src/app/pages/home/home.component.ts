import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { BackendService } from 'src/app/services/backend.service';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  users: User[] = [];

  constructor(private backendService: BackendService, private router: Router, public layoutService: LayoutService){

  }


  ngOnInit(): void {
      this.getUsers();
  }

  getUsers(){
    this.backendService.getAllUsers().subscribe(
      {
        next: (result) =>{
          this.users = result;
        },
        error: (error) =>{
          console.log('hiba: ', error)
        }
      }
    )
  }


  deleteUser(id: any){
    this.backendService.deleteUser(id).subscribe({
      next: (response) =>{
        window.location.reload()
        console.log("User deleted")
      },
      error: (error) =>{
        console.log(error)
      }
    })
  }

}
