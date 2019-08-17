import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  router:Router;  
  loginService: LoginService;
  constructor(router:Router, loginService:LoginService) { 
    this.router = router;
    this.loginService = loginService;
  }
  private loggedIn = false;


  toggleDisplay() {
  	this.loggedIn = !this.loggedIn;
  }

  logout() {
    this.loginService.logout().subscribe(
      res => {
        location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
        this.loggedIn=true;
      },
      error => {
        this.loggedIn=false;
      //  this.showLogin();
      }
    );
  }
  showLogin(){
    this.router.navigate(['login']);
  }
}