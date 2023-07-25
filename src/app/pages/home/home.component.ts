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

  employees: any =  [];
  

  constructor(private backendService: BackendService, private router: Router, public layoutService: LayoutService){

  }


  ngOnInit(): void {
      this.getUsers();
      
      this.employees = [
        { id: 1, name: 'John Doe', position: 'Developer', department: 'IT' },
        { id: 2, name: 'Jane Smith', position: 'Designer', department: 'Graphics' },
        { id: 3, name: 'Robert Johnson', position: 'Manager', department: 'HR' },
        // Ide írhatja a többi alkalmazott adatait
      ];
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
