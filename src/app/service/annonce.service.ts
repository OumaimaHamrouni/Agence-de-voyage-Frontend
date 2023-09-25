import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnnonceModule } from '../Model/Annonce.module';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  apiprefix="http://localhost:8080/";
  constructor(private http:HttpClient) { 
   
   
  }
  addAnnonce(annonce:any):any
 {console.log(annonce);
 
  return this.http.post(this.apiprefix+"annonce/addannonce",annonce);
}
getAnnonceList():Observable<AnnonceModule>{
  return this.http.get<AnnonceModule>(this.apiprefix+"annonce/getallannonce");
  
}

getAnnonce(id):any{
  console.log() ;
  return this.http.get(this.apiprefix+"annonce/getannonce/"+id);
 
}
deleteAnnonce(a:any):any{
  console.log(a) ;
  return this.http.delete(this.apiprefix+"annonce/deleteannonce/"+a.id);
 
}
updateAnnonce(annonce:any):any
{console.log(annonce);

 return this.http.put(this.apiprefix+"annonce/updateannonce",annonce);
}
searchAnnonce(ch:any):any{
  console.log() ;
  return this.http.get(this.apiprefix+"annonce/searchannonce/"+ch);
 
}
}
