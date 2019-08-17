import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  loginService:LoginService;
  isUserLoggedIn: boolean;
  constructor(loginService:LoginService) {
     this.loginService=loginService;
   }

   ngOnInit() {
    this.isUserLoggedIn = this.loginService.isUserLoggedIn();
  }

}
