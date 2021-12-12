import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../Services/user-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedin:any;

  constructor(private userService: UserServiceService, private router :Router,private ngbModal : NgbModal)
   { }

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

   
  logIn(content:any){
    this.userService.logIn(this.loginform.value).subscribe((results)=>{
      var userData:any=results;
      this.loggedin=true;
      localStorage.setItem('userId',userData.user.id);
      this.ngbModal.open(content, {backdropClass: 'light-blue-backdrop'},);
      setTimeout( () => {
        this.router.navigate(['/dashboard']);
        window.location.reload();
      }, 1000);

      
    },(err)=>{
      this.loggedin=false;
     this.ngbModal.open(content, {backdropClass: 'light-blue-backdrop'});
      console.warn(err.error.message);
      
    })
  }

  ngOnInit(): void {
  }

}
