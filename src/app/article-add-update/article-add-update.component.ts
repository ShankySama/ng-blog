import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-article-add-update',
  templateUrl: './article-add-update.component.html',
  styleUrls: ['./article-add-update.component.css']
})
export class ArticleAddUpdateComponent implements OnInit {
  // to update an existing article
  article:any;
  articleId:any;
  articleTitle:any;
  articleCategory:any;
  articleContent:any;
  articleAuthor:any;
  // for add/update visibility purpose
  addbtn:boolean=true;
  updatebtn:boolean=false;

  constructor(private ngbModal:NgbModal, private articleService:ArticleService, private activatedRoute:ActivatedRoute) { }
  
  // formgrup
  articleForm=new FormGroup({
    title:new FormControl('',[Validators.required]),
    category:new FormControl('',[Validators.required]),
    content:new FormControl('',[Validators.required]),
    author:new FormControl('',[Validators.required])
  });

  // to get controls 
  get validation(){
    return this.articleForm.controls;
  }

  // on submiting form 
  onSubmit(data:any){
    console.warn(data);
  }

  //openModal for add and update
  addUpdate(data:any){
    this.ngbModal.open(data);
  }
  
  //update an article
  updateArticle(data:any){
    this.articleService.updateArticle(this.articleId,data).subscribe((result)=>{
    })
  }

  // add an article
  addArticle(data:any){
    this.articleService.createArticle(data).subscribe((result)=>{
      this.articleForm.reset();
    })
  }
  ngOnInit() {

    // getting article id from params
    this.activatedRoute.params.subscribe((result)=>{
      this.articleId=result.id;
    });

    if(this.articleId!=":id"){

        // hiding add button and visible update button
        this.addbtn=false;
        this.updatebtn=true;

        // to get article data by id
        this.articleService.getArticleById(this.articleId).subscribe((result)=>{

          // assigning values to variables
          this.article=result;
          this.articleTitle=this.article.title;
          this.articleCategory=this.article.category;
          this.articleContent=this.article.content;
          this.articleAuthor=this.article.author;

          // getting default value to update
          this.articleForm=new FormGroup({
            title:new FormControl(this.articleTitle,[Validators.required]),
            category:new FormControl(this.articleCategory,[Validators.required]),
            content:new FormControl(this.articleContent,[Validators.required]),
            author:new FormControl(this.articleAuthor,[Validators.required])
          });
        })
    }
    
  }

}
