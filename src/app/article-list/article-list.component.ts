import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  // to store list of artciles
  articles:Array<any>;

  // for pagination
  page=1;
  pageSize=5;
  constructor(private ngbModal:NgbModal,private articleService:ArticleService) { 
    this.articles = new Array<any>();
  }

  // function for calling article service to get list of articles
  getArticlesList(){
    this.articleService.getListOfArticles().subscribe((result)=>{
      this.articles=Object.values(result);
    })
  }

  // fucntion to open modal for delete
  deleteArticle(data:any){
    this.ngbModal.open(data)
  }

  // funciton to delte 
  delete(data:any){
    this.articleService.deleteArticle(data).subscribe((result)=>{
      console.log('result', result);
      // to refresh component list
      this.getArticlesList();
    })
  }

  ngOnInit(){
    // calliing articles list
    this.getArticlesList();
  }
  
}
