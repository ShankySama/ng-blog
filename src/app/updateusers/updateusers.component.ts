import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-updateusers',
  templateUrl: './updateusers.component.html',
  styleUrls: ['./updateusers.component.css']
})
export class UpdateusersComponent implements OnInit {
userid:any;
data:any;


  constructor(private userService:UserServiceService ,private activateRoute:ActivatedRoute) { }
  updateform = new FormGroup({
     name : new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z\s ]+$")]),
     email: new FormControl('',[Validators.required]),
     password: new FormControl('',[Validators.required,Validators.min(8)])
  })

  get updateFormValue(){
    return this.updateform.controls
  }

  onSubmit(){
    this.updateform.value
    this.updateData()
  }


  updateData(){
    this.userService.updateUser(this.userid,this.updateform.value).subscribe((results)=>{
      console.log(results);
      
    })
  }

  // geting data by user id 
   
    getById(id:any){
      this.userService.userById(id).subscribe((data)=>{
        console.log(data);
      
        this.data=Object.values(data)
        console.log(this.data);
        let name = this.data[2]
        let email = this.data[3]
        console.log(name,email);
        
        this.updateform = new FormGroup({
          name : new FormControl(name,[Validators.required,Validators.pattern("^[a-zA-Z\s ]+$")]),
          email: new FormControl(email,[Validators.required]),
          password: new FormControl('',[Validators.required])
       })
        
      })
    }

  ngOnInit(){
    this.activateRoute.params.subscribe((id)=>{
      
       let ids = Object.values(id)[0]
       console.log(ids);
        this.userid = ids
        this.getById(this.userid)
        
   })

 
   

  }

}
