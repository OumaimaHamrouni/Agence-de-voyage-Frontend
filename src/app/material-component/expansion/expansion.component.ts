import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBar,MatSnackBarModule, MatSnackBarConfig } from '@angular/material/snack-bar';
import { TimeoutError } from 'rxjs';
import { AnnonceModule } from 'src/app/Model/Annonce.module';
import { ForfaitModule } from 'src/app/Model/forfait.module';
import { ProgrammeModule } from 'src/app/Model/Programme.module';
import { AnnonceService } from 'src/app/service/annonce.service';
import { ForfaitService } from 'src/app/service/forfait.service';
import { ProgrammeService } from 'src/app/service/programme.service';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { AppComponent } from 'src/app/app.component';
import { DemoColor } from '../chips/chips.component';
 
import { Router } from '@angular/router';

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.scss']
})
 
export class ExpansionComponent  {
  
  availableColors: DemoColor[] = [
     
    { name: 'vous devez Remplir tous les champs ', color: 'warn' }
  ];
  programme=new ProgrammeModule();
  upFile: File;
  files: any = [];
  dataarray=[this.programme];
  panelOpenState = false;
  step = 0;
formg:FormGroup;
  a=new AnnonceModule();
  f=new ForfaitModule();

  setStep(index: number) {
    this.step = index;
  }
  
  
  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  addForm(){
      
 
    
    this.programme=new ProgrammeModule();
    this.dataarray.push(this.programme);

    console.log(this.dataarray);
    
  }
  constructor( public snackBar: MatSnackBar, private router:Router,fb:FormBuilder,private programmeService:ProgrammeService,private annonceService:AnnonceService,private forfaitservice:ForfaitService)  
  {

   
}
  
  
  
  sp=false;
 
 async Ajouter_Annonce()
  {

   if(this.validation(this.a,this.f))
   { 
   
     this.forfaitservice.addForfait(this.f).toPromise().then(res=>
        {
           this.a.setidForfait(res);
          console.log(res['id']);
    
      this.annonceService.addAnnonce(this.a).toPromise().then(res=>
        {
         const formData = new FormData();
            for(let i=0;i<this.dataarray.length;i++){ 
              this.dataarray[i].setannonce(res);
              this.programmeService.addProgramme(this.dataarray[i]).subscribe(data=>
                {
                  console.log("tes")
                });
               
         }
      console.log(res);
     
       
    
          },)
         },)


console.log(this.sp);


/*else 
{
  console.log("f");
  
 if(this.a.getprix() instanceof Number == false)
  {
    this.availableColors[0].name="prix doit être numérique";
    console.log("bon");
    
  }
  console.log("b");
  
  this.sp=true;
  console.log(this.availableColors);
  

}*/
  
await this.snackBar.open("annonce ajouter avec sucées","test", {
  duration: 2000,
  panelClass: ['mat-toolbar', 'mat-primary']
});
this.router.navigate(['/listerannonce'])
  .then(() => {
    window.location.reload();
  });

  }
  }
 
  public url:any;



  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
        console.log(this.url);
        this.a.setimage(this.url) ; 
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  
  readUrl2(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
        console.log(this.url);
        this.programme.setimage(this.url) ; 
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }

validation(a:AnnonceModule,f:ForfaitModule):Boolean
{ 
  if(f.getinclut()!= null && f.getinclut()!= "" 
  && f.getnoinclut()!=null   && f.getnoinclut()!=""   
  && a.getdescription()!=null  && a.getdescription()!=""
  && a.getdestination()!=null
  && a.getdate_debut()!=null
  && a.getdate_fin()!=null
  && a.getimage()!=null
  && a.gettitre()!=null
  && a.getprix()!=null
  && a.getdestination()!=""
  
  && a.getimage()!=""
  && a.gettitre()!=""
  && a.getprix()!=""
  && ! isNaN(Number(a.getprix()))
  && this.testDate(this.a.getdate_debut(),this.a.getdate_fin()))

{this.sp=false;
  return true;
}
else {


  if(f.getinclut()== null 
  || f.getnoinclut()==null   
  || a.getdescription()==null
  || a.getdestination()==null
  || a.getdate_debut()==null
  || a.getdate_fin==null
  || a.getimage()==null
  || a.gettitre()==null
  || a.getprix()==null
 || f.getinclut()== "" 
  || f.getnoinclut()==""   
  || a.getdescription()==""
  || a.getdestination()==""
 
  || a.getimage()==""
  || a.gettitre()==""
  || a.getprix()==""
  )
  {this.availableColors[0].name="vous devez Remplir tous les champs";
    this.sp=true;
  return false;
  
  }
if(isNaN(Number(a.getprix())))
 { console.log( "e");
 
   this.availableColors[0].name="prix doit être numérique";
   this.sp=true;
   return false;

}
if (! this.testDate(this.a.getdate_debut(),this.a.getdate_fin()))
{
  this.availableColors[0].name="date invalid";
  this.sp=true;
  return false;
}
return false;
}




}

day:Number;
private testDate(date_debut:Date,date_fin:Date){
    
  date_debut=new Date(date_debut);
  date_fin=new Date(date_fin);
 this.day=(date_fin.getTime()-date_debut.getTime())/86400000 ;
 if(this.day<0)
 {
   return false;
   
 }
 return true;
}


}