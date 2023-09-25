import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {  ElementRef } from '@angular/core';
 import{  jsPDF} from 'jspdf';
 import html2canvas from 'html2canvas';

import { ActivatedRoute, Route } from '@angular/router';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnnonceModule } from 'src/app/Model/Annonce.module';
import { ReservationService } from 'src/app/service/reservation.service';
 
 
@Component({
  selector: 'app-facture-pdf',
  templateUrl: './facture-pdf.component.html',
  styleUrls: ['./facture-pdf.component.css']
})
export class FacturePdfComponent implements OnInit{@ViewChild('htmlData') htmlData!: ElementRef;

x:any;
a:AnnonceModule;
USERS :any;
o:any;
ida:any;
id:any;
  constructor(private RS:ReservationService,private routeractivated:ActivatedRoute) { }

  ngOnInit(): void {
   this.x=sessionStorage.getItem("id");
    this.id=Number.parseInt(this.x);
    this.ida=this.routeractivated.snapshot.paramMap.get("annonce"); 
    this.id=this.routeractivated.snapshot.paramMap.get("user");
     
    
    this.RS.getReservationbyiduserA(this.id,this.ida).subscribe(data=>{
     this.USERS=data;
      console.log(data);
      
      
     
    });}
  




  public openPDF(): void {
    console.log("te");
    
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }
  private test(date_debut:Date,date_fin:Date){
    
    date_debut=new Date(date_debut);
    date_fin=new Date(date_fin);
    return (date_fin.getTime()-date_debut.getTime())/86400000 ;
  } 

  //public downloadPDF():void { let DATA = this.htmlData.nativeElement; let doc = new jsPDF('p','pt', 'a4'); let handleElement = { '#editor':function(element,renderer){ return true; } }; doc.fromHTML(DATA.innerHTML,15,15,{ 'width': 200, 'elementHandlers': handleElement }); doc.save('angular-demo.pdf'); }
}
