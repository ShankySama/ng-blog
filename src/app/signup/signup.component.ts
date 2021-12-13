import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  message:any 
  checkerr:any;

  signupform = new FormGroup({
    name : new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z\s ]+$")]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.min(8),Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')])
  })

  onSubmit(content:any){
    this.signupform.value
    console.log(this.signupform.value);
    this.register(content)
    
  }

  get signupFormValue(){
    return this.signupform.controls
  }



  constructor( private signupService:UserServiceService ,private ngbModal:NgbModal,private router:Router) { }

  register(content:any){
    this.signupService.signUp(this.signupform.value).subscribe((data)=>{
      console.log(data);
      this.checkerr =false
     this.ngbModal.open(content, {backdropClass: 'light-blue-backdrop'})
       
     setTimeout(()=>{
       this.router.navigate(['/dashboard'])
     },100)
     

    },(err)=>{
      this.checkerr= true
      this.message = err.error.message;
     this.ngbModal.open(content, {backdropClass: 'light-blue-backdrop'})

      
      
    })
  }

  ngOnInit(): void {

    setTimeout(()=>{
      this.ngbModal.dismissAll()
    },1000)
    
  }

}
