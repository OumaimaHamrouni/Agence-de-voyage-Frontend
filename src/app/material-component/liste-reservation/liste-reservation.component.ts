import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/service/reservation.service';
 

@Component({
  selector: 'app-liste-reservation',
  templateUrl: './liste-reservation.component.html',
  styleUrls: ['./liste-reservation.component.css']
})
export class ListeReservationComponent implements OnInit {
  id:number;
  x:any;
  
  USERS :any;
  constructor(private RS:ReservationService,private router:Router) { }

  ngOnInit(): void {
    this.x=sessionStorage.getItem("id");
    this.id=Number(this.x);
    console.log(typeof(this.id));
    
    this.RS.getReservationbyiduser(this.id).subscribe(data=>{
      console.log(data);
      
    this.USERS =data ; 
     
    });}
    decouvrirReservation(r)
    { console.log(r);
    
      this.router.navigate(['/facture',{annonce:r.annonce.id,user:r.user.id}]);
    }

}
