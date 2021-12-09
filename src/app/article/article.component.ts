import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // for search purpose
  userSearch:boolean=false;
  searchedValue:string='';
  constructor() { }
  // formgripu for seearch
  searchForm=new FormGroup({
    search:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9\-_]{0,40}$')])
   })
   // on search
   onSubmit(data:any){
    this.userSearch=true;
    this.searchedValue=data.search;
     // to do
     // api call and render data
   }
   // on selecting a category from dropdown
   getCategory(data:any){
    this.userSearch=true;
     this.searchedValue=data;
     // to do
     // api call
   }
  //  to stop user entrering infinite search
  stopUser(){
    debugger;
    var value=this.searchForm.controls.search.value;
    if(value.length>20){
      return false;
    }
    else{
      return true;
    }
  }
  ngOnInit(): void {
  }

}
