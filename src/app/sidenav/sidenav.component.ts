import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  // for dashboard purpose
  showDashBoard:any;

  constructor(private router:Router) { }
  
  // logout
  logout(){
    localStorage.clear();
    window.location.reload();
    this.router.navigate(['/articles']);
  }

  ngOnInit(){
    let data=localStorage.getItem('userId');
    if(data!=null){
      this.showDashBoard=true;
    }
    else{
      this.showDashBoard=false
    }
  }

}
