import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-updateusers',
  templateUrl: './updateusers.component.html',
  styleUrls: ['./updateusers.component.css']
})
export class UpdateusersComponent implements OnInit {

  constructor() { }
  updateform = new FormControl({
     name : new FormControl('',[Validators.required]),
     email: new FormControl('',[Validators.required]),
     password: new FormControl('',[Validators.required])
  })

  onSubmit(){
    this.updateform.value
  }
 get  updateFormValue(){
return this.updateform
 }

  ngOnInit(){
   

  }

}
