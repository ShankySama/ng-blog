import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleComponent } from './article/article.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateusersComponent } from './updateusers/updateusers.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'',component:ArticleComponent},
  {path:'articles',component:ArticleComponent},
  {path:'article-detail',component:ArticleDetailComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'users',component:UsersComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'update',component:UpdateusersComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
