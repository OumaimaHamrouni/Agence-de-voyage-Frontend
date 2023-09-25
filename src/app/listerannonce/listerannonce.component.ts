import { Component, OnInit } from '@angular/core';
 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AnnonceModule } from '../Model/Annonce.module';
import { AnnonceService } from '../service/annonce.service';


@Component({
  selector: 'app-listerannonce',
  templateUrl: './listerannonce.component.html',
  styleUrls: ['./listerannonce.component.css']
})
export class ListerannonceComponent implements OnInit {
annonces:AnnonceModule;
nbj=0 ;
ch:any;
Isclient:boolean;
  constructor(private annonservices:AnnonceService,private router:Router) { }

  ngOnInit(): void {
    
    
  this.getannonces();
  this.Isclient=sessionStorage.getItem("roles") == '["ROLE_CLIENT"]';
  console.log(this.Isclient);
  
  
   
  }
  private getannonces(){
    this.annonservices.getAnnonceList().subscribe(data=>{
      this.annonces=data ; 
      console.log(this.annonces);
    });}

  private test(date_debut:Date,date_fin:Date){
    
    date_debut=new Date(date_debut);
    date_fin=new Date(date_fin);
    return (date_fin.getTime()-date_debut.getTime())/86400000 ;
  }  

  decouvrirannonce(idannonce):void{
    this.router.navigate(['/consulterannonce',idannonce ])
 
   }

   decouvrirannonceC(idannonce):void{
     console.log("entre");
     
    this.router.navigate(['/consulterannonceClient',idannonce ])
 
   }
   consulterannonceClient
  public search ()
  {
  this.annonservices.searchAnnonce(this.ch).subscribe(data=>{
    this.annonces=data ; 
    console.log(this.annonces);
  });}
//




}
