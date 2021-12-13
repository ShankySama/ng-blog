import { Component, OnInit } from '@angular/core';
import { CommentService } from '../commemt.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  comments:Array<any>;
  constructor(private commentService:CommentService,private ngbModal:NgbModal) { 
    this.comments = new Array;
  }

  getComments(){
    this.commentService.getListOfComments().subscribe((result)=>{
      console.log(result);
      
      this.comments=Object.values(result);
      console.log(this.comments);
      
    })
  }
  deleteComment(data:any){
    this.ngbModal.open(data)
  }
  
  delete(data:any){
    this.commentService.deleteComment(data).subscribe((result)=>{
    })
  }

  

  ngOnInit() {
    this.getComments();
    
  }

}
