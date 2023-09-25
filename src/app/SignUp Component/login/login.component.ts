import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/service/Authentication Service/auth.service";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html', 
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    loginForm: FormGroup;
    constructor(private authService: AuthService, private router: Router){ }
    
    
    
  
  singup(){
   console.log("hhhhhhhhhhhhhhhhhhhh");
    this.router.navigate(["/signup"]);
    
  }
    
 
    
    
    
    submitted = false;
    errorMessage = '';
    isLoggedin = false;
    isLoginFailed = false;
    roles: any;
    ngOnInit() {
        this.loginForm = new FormGroup({
            userName: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required),
        });
    }
    onSubmit(){
        this.submitted = true;
        this.authService.login(this.loginForm.value.userName, this.loginForm.value.password).subscribe(
            data=>{
                this.isLoggedin = true

                if ( sessionStorage.getItem("roles") == '["ROLE_CLIENT"]')
                {
                this.router.navigate(['/listerannonce'])
  .then(() => {
    window.location.reload();
  });
            
            }
                else if ( sessionStorage.getItem("roles") == '["ROLE_ADMIN"]')
                {
                
                    this.router.navigate(['/addresponsable'])
                    .then(() => {
                      window.location.reload();
                    });
            
            }
            else { this.router.navigate(['/listerannonce'])
            .then(() => {
              window.location.reload();
            });}
            },
            error=>{
                console.log(error);
                this.errorMessage = error;
                this.isLoggedin = false;
                this.isLoginFailed = true;
            }
        );
    }
}