import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgrammeService {

  apiprefix="http://localhost:8080/";
  constructor(private http:HttpClient) { 
   
   
  }
  addProgramme(programme:any):any
 {console.log(programme);
 
  return this.http.post(this.apiprefix+"programme/addProgramme",programme);
}
getProgrammesByAnnonce(id:any):any{
   
  return this.http.get(this.apiprefix+"programme/findProgrammesByAnnonce/"+id);
 
}
deleteProg(id:any):any{
  
  return this.http.delete(this.apiprefix+"programme/deleteprogrammebyid/"+id);
 
}
updateProgramme(programme:any):any
{console.log(programme);

 return this.http.put(this.apiprefix+"programme/updateProgramme",programme);
}
}
