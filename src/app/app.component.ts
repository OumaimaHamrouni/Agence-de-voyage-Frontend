import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/Authentication Service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService){}
  //isLoggedIn = false;
  userName: string = '';
 prenom: string='';
  ngOnInit(): void {
    //this.isLoggedIn = this.authService.isLoggedIn();
  }
  getUserName(){
     return sessionStorage.getItem("username");
  }
 
  getPrenom(){
    return sessionStorage.getItem("prenom");
 }

  onLogOut(){
    this.authService.logout();
  }

  loggedin(){
    return this.authService.isLoggedin()
  }
}