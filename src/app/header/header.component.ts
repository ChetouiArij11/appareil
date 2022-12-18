import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuth = false;
  constructor(){}


  ngOnInit(): void {

  }
  onLogin() {
    setTimeout(() => {
      this.isAuth = !this.isAuth;
      this.isAuth = this.isAuth;

    }, 3000);

  }

}
