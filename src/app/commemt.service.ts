import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  baseUrl="http://localhost:3000/v1/comments";
  constructor(private http:HttpClient) { }

   // For posting a comment
    postComment(data:any){
    return this.http.post(`${this.baseUrl}/comments`,data);
  }

    // For updating a comment
    updateComment(id:any,data:any){
      return this.http.patch(`${this.baseUrl}/update/${id}`,data);
    }

      // Getting list of all the comments
  getListOfComments(){
    return this.http.get(`${this.baseUrl}/comments`);
    
  }
      // For getting comments according to id
  getCommentById(id:any){
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  //Deleting the comment (soft delete)
  deleteComment(data:any){
    return this.http.patch(`${this.baseUrl}/delete/${data}`,"");
  }
}


