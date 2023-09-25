import { OnInit, Component } from '@angular/core';
import { User } from '../Model/user';
import { TokenStorageService } from '../service/Authentication Service/token-storage-service.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    userName: any;
    userRoles: any;
    adress: any;
    email: any ;
nom  : any ;
id : any ;
prenom : any ;
 
    private token: TokenStorageService ;
    constructor() { }
    ngOnInit() {
     this.userName = sessionStorage.getItem("username");
      this.userRoles = sessionStorage.getItem("roles");
      this.email = sessionStorage.getItem("email");
      this.adress = sessionStorage.getItem("adress");
      this.nom = sessionStorage.getItem("nom");
      this.id = sessionStorage.getItem("id");

this.prenom = sessionStorage.getItem("prenom");


     

    }
}