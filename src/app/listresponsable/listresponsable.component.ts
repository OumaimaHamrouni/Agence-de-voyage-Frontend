import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-listresponsable',
  templateUrl: './listresponsable.component.html',
  styleUrls: ['./listresponsable.component.css']
})
export class ListresponsableComponent implements OnInit {
users:User ;
  constructor(private userservice:UserService ,  private router: Router) {} 

  ngOnInit(): void {
    this.allusers();
  }
private allusers(){

this.userservice.getAllUsers().subscribe(data=>{this.users=data,console.log(this.users)});

}

addresponsable(){
  this.router.navigate(["/addresponsable"]);
  
}
}
