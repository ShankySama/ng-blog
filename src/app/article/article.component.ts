import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  // for all articles
  articles:Array<any>;

  // for pagination
  page=1;
  pageSize=5;

  // for search purpose
  userSearch:boolean=false;
  searchedValue:string='';
  
  constructor(private articleService:ArticleService) { 
    this.articles = new Array<any>();
  }

  // formgripu for seearch
  searchForm=new FormGroup({
    search:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9\-_]{0,40}$')])
   })

   // on search
   onSubmit(data:any){
    this.userSearch=true;
    this.searchedValue=data.search;
    this.articleService.getSearchedArticles(this.searchedValue).subscribe((result)=>{
     this.articles=Object.values(result);
    })
   }

   // on selecting a category from dropdown
   getCategory(data:any){
    this.userSearch=true;
     this.searchedValue=data;
     this.articleService.getArticlesByCategory(this.searchedValue).subscribe((result)=>{
       this.articles=Object.values(result);
     })
   }

  //  to stop user entrering infinite search
  stopUser(){
    var value=this.searchForm.controls.search.value;
    if(value.length>20){
      return false;
    }
    else{
      return true;
    }
  }
  ngOnInit(){
    
    // to get all articles 
    this.articleService.getListOfArticles().subscribe((result)=>{
      this.articles=Object.values(result);
    })
  }

}
