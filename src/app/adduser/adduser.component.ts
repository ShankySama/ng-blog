import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
checkerr:any
message:any
  constructor(private userService:UserServiceService, private router:Router,private ngbModal:NgbModal) { }
  addForm = new FormGroup({
    name : new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z\s ]+$")]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required,Validators.min(8),Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')])
 })

 get addFormValue(){
   return this.addForm.controls
 }

 onSubmit(content:any){
   console.log(this.addForm.value);
   this.addUser(content)
   
 }
 addUser(content:any){
   this.userService.addUser(this.addForm.value).subscribe((data)=>{
     console.log(data);
     
     this.checkerr =false
     this.ngbModal.open(content, {backdropClass: 'light-blue-backdrop'})
       
     setTimeout(()=>{
       this.router.navigate(['/users'])
     },100)
     
   },
   (err)=>{
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
