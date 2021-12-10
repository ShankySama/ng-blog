import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updateusers',
  templateUrl: './updateusers.component.html',
  styleUrls: ['./updateusers.component.css']
})
export class UpdateusersComponent implements OnInit {

  constructor() { }
  updateform = new FormGroup({
     name : new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z\s ]+$")]),
     email: new FormControl('',[Validators.required]),
     password: new FormControl('',[Validators.required])
  })

  get updateFormValue(){
    return this.updateform.controls
  }

  onSubmit(){
    this.updateform.value
  }
   
    

  ngOnInit(){
   

  }

}
