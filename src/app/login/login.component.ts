import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  loginform = new FormGroup({
     email: new FormControl('',[Validators.required,Validators.email]),
     password : new FormControl('',[Validators.required])
  })

  onSubmit(){
     this.loginform.value
     console.log(this.loginform.value);
     
  }
  get loginFormValue(){
    return this.loginform.controls
  }

  ngOnInit(): void {
  }

}
