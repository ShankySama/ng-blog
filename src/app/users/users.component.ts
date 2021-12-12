
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  data:any

  constructor(private userService:UserServiceService) { }

  getUsers(){
    this.userService.userList().subscribe((data)=>{
         console.log(data);
         
     this.data = data
     
    })
  }

  deleteUser(id:any){
    this.userService.deleteUser(id).subscribe((results)=>{
      console.log(results);
      
    })
  }

  ngOnInit(){
 this.getUsers()  

  }

}
