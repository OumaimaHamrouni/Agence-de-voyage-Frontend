import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "src/app/Model/user";
import { AuthService } from "src/app/service/Authentication Service/auth.service";



@Component({
    selector: 'app-register',
    templateUrl: './register.component.html', 
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
    registrationForm: FormGroup;
    user = new User(0,'', '', '', [] ,'','','');
    isRegistered = false;
    submitted = false;
    errorMessage = '';
    roles: any = [
        {name:'User', id:1, selected: true}, 
        {name:'Admin', id:2, selected: false},
    ]
    selectedRoles: string[];
    constructor(private authService: AuthService ,  private router: Router){ }
    ngOnInit() {
        this.registrationForm = new FormGroup({
            userName: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            nom: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
            prenom: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
            adress: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
            password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
            roleSelection: this.createRoles(this.roles)
        });
    }
      // Create form array
    createRoles(rolesList): FormArray{
        const arr = rolesList.map(role => {
        return new FormControl(role.selected)
        });
        return new FormArray(arr);
    }
    onSubmit(){
        this.submitted = true;
        this.user.userName = this.registrationForm.value.userName;
        this.user.nom = this.registrationForm.value.nom;
this.user.prenom=this.registrationForm.value.prenom;
this.user.adress= this.registrationForm.value.adress;

        this.user.email = this.registrationForm.value.email;
        this.user.password = this.registrationForm.value.password;
        //console.log(this.getSelectedRoles());
        this.user.roles = this.getSelectedRoles();
        this.registerUser()
    }
    registerUser(){
        this.authService.signupclient(this.user)
        .subscribe(user=> {
            console.log(user);
            this.isRegistered = true;
            this.router.navigate(['/login'])
  .then(() => {
    window.location.reload();
  });
  
        }, error=> {
            console.log(error);
            this.errorMessage = error;
            this.isRegistered = false;
        });
        
    }

    getSelectedRoles():string[]  {
        this.selectedRoles = this.registrationForm.value.roleSelection.map((selected, i) => {
          if(selected){
            return this.roles[i].name;
          }else {
            return '';
          }
        });
        // return selected roles
        return this.selectedRoles.filter(function (element) {
          if (element !== '') {
            return element;
          }
        });
      }



      login(){
         this.router.navigate(["/login"]);
         
       }




}