
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ForfaitModule } from 'src/app/Model/forfait.module';
import { ProgrammeModule } from 'src/app/Model/Programme.module';
import { ProgrammeService } from 'src/app/service/programme.service';
import { AnnonceModule } from '../../../Model/Annonce.module';
import { AnnonceService } from '../../../service/annonce.service';
import {ActivatedRoute,Router} from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { ForfaitService } from 'src/app/service/forfait.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ReservationComponent } from 'src/app/reservation/reservation.component';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-consulter-annonce',
  templateUrl: './consulter-annonce.component.html',
  styleUrls: ['./consulter-annonce.component.css']
})
export class ConsulterAnnonceComponent  implements OnInit {
  annonce:AnnonceModule ;
  programmes:ProgrammeModule;
  dateannonce:Date ;
  datedebut:any;
  datefin:any;

  constructor(@Inject(LOCALE_ID) private locale: string,public dialog:MatDialog,public snackBar: MatSnackBar,private annonservices:AnnonceService,private programmeservice:ProgrammeService,private routeractivated:ActivatedRoute,private router:Router,private forfaitservice:ForfaitService) { }

  ngOnInit(): void {
  this.getannonce();
 

  }
  



  private getannonce(){
    console.log(this.routeractivated.snapshot.paramMap.get("id"));
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
      console.log();
      
      return this.dateannonce.getDay()+'-'+this.dateannonce.getMonth()+'-'+this.dateannonce.getFullYear() ;
    }   

    retourlisteannonce():void{
      this.router.navigate(['/listerannonce'])
    }
  
x=0;
del=false;
    async  supprimerAnnonce(programmes,annonce)
    {console.log(programmes.length);
      console.log(annonce.forfait);
      for (let i = 0; i < programmes.length; i = i + 1) {
      this.programmeservice.deleteProg(programmes[i].id).subscribe(res=>{
        this.x++;
      }
       
        
        )
    }

   	
   
   

if(this.x==(programmes.length))
{ this.del=true
  console.log("jj");
  
  await this.del;
  console.log("jj");
 
}
this.annonservices.deleteAnnonce(annonce).toPromise().then(res=>{
    
      
})

  this.forfaitservice.deleteForfait(annonce.forfait).subscribe(data=>{

  
})
 
  

  
      
      
    
    
    
    
    this.snackBar.open("annonce supprimer avec sucées","test", {
      duration: 2000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
    this.router.navigate(['/listerannonce'])
  .then(() => {
    window.location.reload();
  });

   
}

reserver(annonce)
{ 



  return this.dialog.open(ReservationComponent,{data:annonce, height: '700px'});

}
}

