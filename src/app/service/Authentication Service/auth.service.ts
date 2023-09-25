import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';

const headers = new HttpHeaders().set('Content-Type', 'application/json');
@Injectable({
  providedIn: 'root'
})
export class AuthService{
  private baseUrl = 'http://localhost:8080/auth/'; 
  isLogged= false;
  constructor(private http: HttpClient,  private router: Router){}
  signupclient(user: User): Observable<any>{
    //console.log('In AuthService');
    return this.http.post(this.baseUrl + 'newClient', user, { headers, responseType: 'text'})
                    .pipe(catchError(this.handleError));
  }

  signupresponsable(user: User): Observable<any>{
    //console.log('In AuthService');
    return this.http.post(this.baseUrl + 'newResponsable', user, { headers, responseType: 'text'})
                    .pipe(catchError(this.handleError));
  }


  login(user: string, password: string): Observable<any> {
  
 // console.log('In AuthService -  login');
 return this.http.post<any>(this.baseUrl + 'login', 
 {userName: user, password:password}, {headers})
 .pipe(catchError(this.handleError),
   map(userData => {
     sessionStorage.setItem("username", user);
 

     let tokenStr = "Bearer " + userData.token;
     console.log("Token---  " + tokenStr);
     sessionStorage.setItem("token", tokenStr);
     console.log(userData);
     sessionStorage.setItem("roles", JSON.stringify(userData.roles));
     sessionStorage.setItem("email", userData["email"]);
     sessionStorage.setItem("adress",userData["adress"]);
          sessionStorage.setItem("id", JSON.stringify(userData.id));
          console.log(userData.id);


     sessionStorage.setItem("nom", userData["nom"]);
     sessionStorage.setItem("prenom", userData["prenom"]);




     return userData;
   })
 ); 
  
  }

  logout(){
    sessionStorage.clear()
    this.router.navigate(['/login']);
  }
  isLoggedin(){
    const loggedin= sessionStorage.getItem("auth-token")
    if(loggedin != " "){
      this.isLogged= true;
    }
    else{
      this.isLogged= false; 
    }
   
    return this.isLogged;
  }

  private handleError(httpError: HttpErrorResponse) {
    let message:string = '';

    if (httpError.error instanceof ProgressEvent) {
      console.log('in progrss event')
      message = "Network error";
    }
    else {
      message = httpError.error.message;
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(message);
  }
}