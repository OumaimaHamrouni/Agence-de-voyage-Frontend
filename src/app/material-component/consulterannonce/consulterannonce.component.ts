import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ForfaitModule } from 'src/app/Model/forfait.module';
import { ProgrammeModule } from 'src/app/Model/Programme.module';
import { ProgrammeService } from 'src/app/service/programme.service';
import { AnnonceModule } from '../../Model/Annonce.module';
import { AnnonceService } from '../../service/annonce.service';
import {ActivatedRoute,Router} from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { ForfaitService } from 'src/app/service/forfait.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ignoreElements } from 'rxjs-compat/operator/ignoreElements';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-consulterannonce',
  templateUrl: './consulterannonce.component.html',
  styleUrls: ['./consulterannonce.component.css']
})
export class ConsulterannonceComponent implements OnInit {
  annonce:AnnonceModule ;
  programmes:ProgrammeModule;
  dateannonce:Date ;

  constructor(@Inject(LOCALE_ID) private locale: string, public snackBar: MatSnackBar,private annonservices:AnnonceService,private programmeservice:ProgrammeService,private routeractivated:ActivatedRoute,private router:Router,private forfaitservice:ForfaitService) { }

  ngOnInit(): void {
  this.getannonce();
 

  }
  

  datedebut:any;
  datefin:any;

  private getannonce(){
    //console.log(this.routeractivated.snapshot.paramMap.get("id"));
    this.annonservices.getAnnonce(this.routeractivated.snapshot.paramMap.get("id")).toPromise().then(res=>{
      this.annonce=res ; 
      this.programmeservice.getProgrammesByAnnonce(res['id']).subscribe(data=>{
        this.programmes=data ; 
        
        this.datedebut = formatDate(this.annonce.date_debut,'dd-MM-yyyy',this.locale);
        this.datefin = formatDate(this.annonce.date_fin,'dd-MM-yyyy',this.locale);
       
  
      })

    });}


    public deleteprogramme(programme: any) {
      this.programmeservice.deleteProg(programme).subscribe(res=>{
        this.snackBar.open("programme supprimer avec sucées","test", {
          duration: 2000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
        this.router.navigate(['/listerannonce'])
      .then(() => {
        window.location.reload();
      });
      }
       
        
        )
    }
     
    public dateconvert(date:any):String{
     
      this.dateannonce =new Date(date);
 
      
      return this.dateannonce.getDay()+'-'+this.dateannonce.getMonth()+'-'+this.dateannonce.getFullYear() ;
    }   

    retourlisteannonce():void{
      this.router.navigate(['/listerannonce'])
    }
    modifier(annonceid):void{
     console.log(annonceid );
     
      this.router.navigate(['/modifierAnnonce',annonceid.id]);
    }
 


 supprimerAnnonce(programmes,annonce)
{
    //this.annonservices.deleteAnnonce(annonce).toPromise().then(res=>{
    
      this.forfaitservice.deleteForfait(annonce?.forfait).subscribe(res=>{
        console.log(annonce?.forfait);
        
     // })
      
    this.snackBar.open("annonce supprimer avec sucées","test", {
      duration: 2000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
  
    this.router.navigate(['/listerannonce'])
  .then(() => {
    window.location.reload();
  });

   
    })
  }
        
    }
       
        
  



