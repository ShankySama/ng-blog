import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   
  signupform = new FormGroup({
    name : new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z\s ]+$")]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required])
  })

  onSubmit(){
    this.signupform.value
    console.log(this.signupform.value);
    this.register()
    
  }

  get signupFormValue(){
    return this.signupform.controls
  }



  constructor( private signupService:UserServiceService) { }

  register(){
    this.signupService.signUp(this.signupform.value).subscribe((data)=>{
      console.log(data);
      
    })
  }

  ngOnInit(): void {
  }

}
