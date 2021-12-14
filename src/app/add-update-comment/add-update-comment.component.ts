import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentService } from '../commemt.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-update-comment',
  templateUrl: './add-update-comment.component.html',
  styleUrls: ['./add-update-comment.component.css']
})
export class AddUpdateCommentComponent implements OnInit {
  add:boolean=true;
  update:boolean=false;

  comment:any;
  commentId:any;
  commentName:any;
  commentEmail:any;
  commentMessage:any;
  commentForm:FormGroup;

  
  constructor(private ngbModal:NgbModal, private activatedRoute:ActivatedRoute, 
    private router: Router,
    private modalService: NgbModal,private commentService:CommentService) {
    this.commentForm=new FormGroup({
      name : new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z\s ]+$")]),
      email:new FormControl("", [Validators.email,Validators.required, Validators.pattern('^[a-z0-9A-Z._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      message:new FormControl("",[Validators.required,Validators.maxLength(200),Validators.pattern("^[a-zA-Z_,.() ]*$")]),
    })

}
  
  public hasError = (controlName: string, errorName: string) =>{
    return this.commentForm.controls[controlName].hasError(errorName);
  }
  onSubmit(data:any){
    console.warn(data);
  }

  get validation(){
    return  this.commentForm.controls
    }

    addComment(data:any){
      this.commentService.postComment(data).subscribe((result)=>{

        this.router.navigate(['/comment-list']);
      })
    }
    addModal(data:any){
      this.ngbModal.open(data);
    }

  updateComment(data:any){
    this.commentService.updateComment(this.commentId,data).subscribe((result)=>{
      this.router.navigate(['/comment-list']);
    })
  }

  
  ngOnInit(): void {

        this.activatedRoute.params.subscribe((result)=>{
          this.commentId=result.id; 
        });
    
        if(this.commentId){
            this.add=false;
            this.update=true;
    
            this.commentService.getCommentById(this.commentId).subscribe((result)=>{
              this.comment=result;
              this.commentName=this.comment.name;
              this.commentEmail=this.comment.email;
              this.commentMessage=this.comment.message;
    
              // getting default value to update
              // this.commentForm=new FormGroup({
              //   name:new FormControl(this.commentName,[Validators.required]),
              //   email:new FormControl(this.commentEmail,[Validators.required]),
              //   message:new FormControl(this.commentMessage,[Validators.required])
              // });

              this.commentForm.patchValue({
                name: this.commentName,
                email: this.commentEmail,
                message: this.commentMessage
              })
            })
        }else{
          this.add=true;
            this.update=false;
        }
  }

  
}
