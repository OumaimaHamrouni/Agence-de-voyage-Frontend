import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForfaitService {

  apiprefix="http://localhost:8080/forfait";
  constructor(private http:HttpClient) { 
   
   
  }
  addForfait(forfait:any):any
 {console.log(forfait);
 
  return this.http.post(this.apiprefix+"/addforfait",forfait);
}
deleteForfait(forfait:any):any
{

 return this.http.delete(this.apiprefix+"/deleteforfait/"+forfait.id);
}
updateForfait(forfait:any):any
{console.log(forfait);

 return this.http.put(this.apiprefix+"/updateforfait",forfait);
}
}
