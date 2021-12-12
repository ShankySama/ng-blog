import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class UserServiceService {
 
  userAuthUrl="http://localhost:3000/v1/auth"
  userUrl="http://localhost:3000/v1"

  constructor(private httpClient:HttpClient) { }
  
//Registering the user in dataBase 

 signUp(data:any){
   return this.httpClient.post(`${this.userAuthUrl}/register`,data);
 }
  // logging the user 

 logIn(data:any){
  return  this.httpClient.post(`${this.userAuthUrl}/login`,data)
 }

 // adding user 

  addUser(data:any){
   return this.httpClient.post(`${this.userUrl}/users`,data)
  }
   // getting all users 

  userList(){
    return this.httpClient.get(`${this.userUrl}/users`)
  }

  // get a  single user 

   userById(id:any)
   {
     return this.httpClient.get(`${this.userUrl}/users/${id}`)
   }

   // updating user 

   updateUser(id:any ,data:any){
   return  this.httpClient.patch(`${this.userUrl}/users/${id}`,data)
   }

  //  deleting user 

  deleteUser(id:any){
   return  this.httpClient.delete(`${this.userUrl}/users/${id}`)
  }

}
