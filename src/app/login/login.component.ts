import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserServiceService, private router :Router) { }

  loginform = new FormGroup({
     email: new FormControl('',[Validators.required,Validators.email]),
     password : new FormControl('',[Validators.required])
  })

  onSubmit(){
     this.loginform.value
     console.log(this.loginform.value);

     // log in
     this.userService.logIn(this.loginform.value).subscribe((results)=>{
       console.log(results);
     this.router.navigate(['/dashboard'])
       
     })
     
  }
  get loginFormValue(){
    return this.loginform.controls
  }

  ngOnInit(): void {
  }

}
