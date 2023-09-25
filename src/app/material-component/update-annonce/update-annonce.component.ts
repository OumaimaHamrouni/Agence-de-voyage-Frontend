import { Component, OnInit } from '@angular/core';
import {  NgModule } from '@angular/core';
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
 
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-annonce',
  templateUrl: './update-annonce.component.html',
  styleUrls: ['./update-annonce.component.css']
})
export class UpdateAnnonceComponent implements OnInit {

  availableColors: DemoColor[] = [
     
    { name: 'vous devez Remplir tous les champs ', color: 'warn' }
  ];
  programme=new ProgrammeModule();
  /***tettetettet */
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
  constructor( private annonservices:AnnonceService,private programmeservice:ProgrammeService,private routeractivated:ActivatedRoute,private forfaitservice:ForfaitService,public snackBar: MatSnackBar, private router:Router,fb:FormBuilder,private programmeService:ProgrammeService,private annonceService:AnnonceService)  
  {

   
}
  
  
  sp=false;
 
 update_Annonce()
     { 
    console.log("ttt");
    
     
   
     this.forfaitservice.updateForfait(this.f).toPromise().then(res=>
        {
          
          console.log(res['id']);
        })
      this.annonceService.updateAnnonce(this.a).toPromise().then(res=>
        {
         const formData = new FormData();
            for(let i=0;i<this.dataarray.length;i++){ 
              
              this.programmeService.updateProgramme(this.dataarray[i]).subscribe(data=>
                {
                  console.log("tes")
                });
               
         }
      console.log(res);
     
       
    
          },)
         


console.log(this.sp);

      

console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrr");

  
this.snackBar.open("modification avec sucées","test", {
  duration: 2000,
  panelClass: ['mat-toolbar', 'mat-primary']
});
this.router.navigate(['/listerannonce'])
  .then(() => {
    window.location.reload();
  });
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
ngOnInit(): void {
    this.getannonce();
    console.log(this.routeractivated.snapshot.paramMap.get("annonceid"));
  }
  private getannonce(){
    console.log(this.routeractivated.snapshot.paramMap.get("annonceid"));
    this.annonservices.getAnnonce(this.routeractivated.snapshot.paramMap.get("annonceid")).toPromise().then(res=>{
      this.a=res ; 
      console.log(this.a);
      
      this.programmeservice.getProgrammesByAnnonce(res['id']).subscribe(data=>{
        console.log(data);
        this.dataarray=data ; 
        
        console.log("testes");
        
        
        
      this.f=this.a.forfait;
       
  
      })

    });}

}
