import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentService } from '../commemt.service';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ArticleDetailComponent implements OnInit {
  articleId:any;
  comments:Array<any>;
  articles:any
  constructor(config: NgbModalConfig,private activatedRoute:ActivatedRoute,private articleService:ArticleService, private modalService: NgbModal,private commentService:CommentService) {
    this.commentForm=new FormGroup({
      name : new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z\s ]+$")]),
      email:new FormControl("", [Validators.email,Validators.required, Validators.pattern('^[a-z0-9A-Z._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      message:new FormControl("",[Validators.required,Validators.maxLength(200),Validators.pattern("^[a-zA-Z_,.() ]*$")]),
    })

    this.comments = new Array<any>();
    config.backdrop = 'static';
    config.keyboard = false;
}
  commentForm:FormGroup;

  public hasError = (controlName: string, errorName: string) =>{
    return this.commentForm.controls[controlName].hasError(errorName);
  }
  
  open(content:any) {
    this.modalService.open(content);
    console.log(this.commentForm.value)
    setTimeout(() => {
      this.modalService.dismissAll()
    }, 1000);
    this.commentForm.reset();
  }
  
  get validation(){
    return  this.commentForm.controls
    }
    addComment(data:any){
      this.commentService.postComment(data).subscribe((result)=>{
        this.commentForm.reset();
      })
    }
    getArticleById(id:any){
      this.articleService.getArticleById(id).subscribe((result)=>{
        // console.log("single result",result)
        this.articles = result
            console.log("check",this.articles.title);
            
      })
    }
  ngOnInit() {
        this.commentService.getListOfComments().subscribe((result)=>{
          this.comments=Object.values(result);
        })

        this.activatedRoute.params.subscribe((id)=>{
          console.log(id);
          var ids = Object.values(id)
          this.articleId = ids
          console.log(this.articleId);
          
          this.getArticleById(this.articleId)
          
        })

  }

  
}
