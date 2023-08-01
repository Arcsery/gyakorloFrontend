import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/helpers/shared-data.service';
import { User } from 'src/app/model/User';
import { UserLogin } from 'src/app/model/UserLogin';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  form: FormGroup = new FormGroup({
    usernameOrEmail: new FormControl(""),
    password: new FormControl("")
  });
  submitted: boolean = false;
  isLoggedIn: boolean = false;
  roles: string[] = [];

  constructor(private sharedDataService: SharedDataService, private formBuilder: FormBuilder, private authService: AuthService, private storageService: StorageService, private router: Router){}


  ngOnInit(): void {

    if(this.storageService.isLoggedIn()){
      this.isLoggedIn = true
      this.roles = this.storageService.getUser().roles;
    }

    this.form = this.formBuilder.group({
      usernameOrEmail: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  get f(): { [key: string]: AbstractControl}{
    return this.form.controls;
  }

  onSubmit(){

    console.log(this.form.value)

    this.submitted = true;

    if (this.form.invalid){
      return;
    }

    const user: UserLogin = {
      usernameOrEmail: this.form.value.usernameOrEmail,
      password: this.form.value.password}

    this.authService.login(user).subscribe({
      next: result =>{
        this.storageService.saveUser(result);
        this.storageService.saveUserToCookie(result);
        this.isLoggedIn = true;
        this.sharedDataService.setUsername(result.username)
        this.roles = this.storageService.getUser().roles;
        this.router.navigateByUrl("/home").then(() =>{
          window.location.reload()
        })
      },
      error: error =>{
        console.log(error.error.message)
      }
      
    })
  }

}
