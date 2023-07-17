import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import Validation from 'src/app/services/Validation';
import { AuthService } from 'src/app/services/auth.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
    form: FormGroup = new FormGroup ({
      fullname: new FormControl(""),
      username: new FormControl(""),
      age: new FormControl(0),
      email: new FormControl(""),
      password: new FormControl(""),
      confirmPassword: new FormControl(""),
    });
    submitted: boolean = false;

    constructor(private formBuilder: FormBuilder, private authService: AuthService){}


    ngOnInit(): void {
      this.form = this.formBuilder.group({
        fullname: ["", Validators.required],
        username: ["",
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(15)
          ]
        ],
        age: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        password: ["", 
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ["", Validators.required]
      },
      {
        validators: [Validation.match('password', "confirmPassword")]
      }
        )
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const user: User = {
      name: this.form.value.fullname,
      username: this.form.value.username,
      age: this.form.value.age,
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.authService.register(user).subscribe({
      next: result =>{
        console.log(result);
      },
      error: err =>{
        console.log(err)
        console.log(user)
      }
    })
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

    
}
