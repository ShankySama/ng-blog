import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';
import { UpdateusersComponent } from './updateusers/updateusers.component';
<<<<<<< HEAD
import { AdduserComponent } from './adduser/adduser.component';
=======
import { CommentListComponent } from './comment-list/comment-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleAddUpdateComponent } from './article-add-update/article-add-update.component';
>>>>>>> 6437bb6e5c2ab4f519fe08bfbc37e543a20a4c5d

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleDetailComponent,
    LoginComponent,
    SignupComponent,
    UsersComponent,
    UpdateusersComponent,
<<<<<<< HEAD
    AdduserComponent
=======
    DashboardComponent,
    ArticleListComponent,
    ArticleAddUpdateComponent,
    CommentListComponent,
    DashboardComponent
>>>>>>> 6437bb6e5c2ab4f519fe08bfbc37e543a20a4c5d
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
