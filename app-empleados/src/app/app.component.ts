import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {

    firebase.initializeApp({
      apiKey: "AIzaSyD3YZQLOok4-z47sMG9J3HYa3awaQgeJIc",
      authDomain: "proyecto-ivan-perez.firebaseapp.com",

    });
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  logout(){
    this.loginService.logout();
  }

}