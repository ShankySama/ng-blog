import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ArticleDetailComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    this.commentForm=new FormGroup({
      name : new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z\s ]+$")]),
      email:new FormControl("", [Validators.email,Validators.required, Validators.pattern('^[a-z0-9A-Z._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      message:new FormControl("",[Validators.required,Validators.maxLength(200),Validators.pattern("^[a-zA-Z_,.() ]*$")]),
    })
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

  // public Comments(){
  //   console.log(this.commentForm.value)
  // }

  
  ngOnInit(): void {
  }

  
}
