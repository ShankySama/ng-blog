
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  data:any

  constructor(private userService:UserServiceService,private router:Router,private ngbModal:NgbModal) { }

  getUsers(){
    this.userService.userList().subscribe((data)=>{
         console.log(data);
         
     this.data = data
     
    })
  }

  deleteUser(id:any){
    this.userService.deleteUser(id).subscribe((results)=>{
      console.log(results);
      this.getUsers()
      
    })
  }

  deleteConfirmation(content:any){
    this.ngbModal.open(content)
  }

  ngOnInit(){
 this.getUsers()  

  }

}
