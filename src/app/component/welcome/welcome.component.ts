import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {



  message:string ='some welcome message'
  name:string=''
  activatedRoute: ActivatedRoute
  constructor(activatedRoute:ActivatedRoute) { 
    this.activatedRoute=activatedRoute
  }

  ngOnInit() {
    console.log(this.message);
    console.log(this.activatedRoute.snapshot.params['userName'])
    this.name=this.activatedRoute.snapshot.params['userName']
  }

}
