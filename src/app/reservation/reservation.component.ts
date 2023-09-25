import { R } from '@angular/cdk/keycodes';
import { DatePipe } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Reservation } from '../Model/Reservation.module';
import { User } from '../Model/user';
import { ReservationService } from '../service/reservation.service';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,@Inject(LOCALE_ID) private locale: string, public snackBar: MatSnackBar,public dialog:MatDialog,private fb:FormBuilder,private router:Router,private ReservationService:ReservationService) { 

  }
  liste:any={};
  nom:string;
  title:string
  reser:Reservation=new Reservation();
  us:User;
  myDate = new Date();
  i:any;
  id:number;
 
  datedebut:any;
  datefin:any;


 
  ngOnInit(): void {
    console.log(this.data);
    this.liste=this.data;
   console.log(typeof(sessionStorage.getItem("id")));
   
    this.i=sessionStorage.getItem("id");
    this.id=Number.parseInt(this.i);
   this.us=new User(this.id,null,null,null,null,null,null,null);
    this.reser.setannonce(this.data);

    this.reser.setuser(this.us);
    this.reser.setdate_res(null);
    this.datedebut = formatDate(this.data.date_debut,'dd-MM-yyyy',this.locale);
    this.datefin = formatDate(this.data.date_fin,'dd-MM-yyyy',this.locale);

    
  }
  confirmer()
  {
    this.ReservationService.addReservation(this.reser).toPromise().then(res=>
      {
        
        
        this.snackBar.open("réservation effectuée avec sucées","test", {
          duration: 2000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
        this.dialog.closeAll();
      }
  )

}
annuler()
{this.dialog.closeAll();

}
}

