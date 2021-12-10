import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-add-update',
  templateUrl: './article-add-update.component.html',
  styleUrls: ['./article-add-update.component.css']
})
export class ArticleAddUpdateComponent implements OnInit {

  constructor() { }
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
    // api hit
  }
  ngOnInit() {
  }

}
