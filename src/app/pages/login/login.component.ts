import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username = new FormControl("", [Validators.required])
  password = new FormControl("", [Validators.required])

  onSubmit(){

  }

}
