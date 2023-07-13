import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    name = new FormControl("", [Validators.required])
    username = new FormControl("", [Validators.required])
    password = new FormControl("", [Validators.required])
    email = new FormControl("", [Validators.required, Validators.email])
    age = new FormControl("", Validators.required)


    constructor(private backendService: BackendService, private router: Router){

    }

    register(){
      if(this.name.valid && this.username.valid, this.password.valid, this.email.valid, this.age.valid){
        const user: User = {
          name: this.name.value as string,
          username: this.username.value as string,
          password: this.password.value as string,
          email: this.email.value as string,
          age: Number(this.age.value) 
        }

        this.backendService.addUser(user).subscribe({
          next: (response) =>{
            console.log("User added")
            this.router.navigateByUrl('/home')
          },
          error: (error) =>{
            console.log(error)
          }
        })
        
      }
    }

}
