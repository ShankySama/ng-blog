import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor() { }
  addForm = new FormGroup({
    name : new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z\s ]+$")]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
 })

 get addFormValue(){
   return this.addForm.controls
 }

 onSubmit(){
   console.log(this.addForm.value);
   
 }


  ngOnInit(): void {
  }

}
