import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  apiprefix="http://localhost:8080/";
  constructor(private http:HttpClient) { }
  addReservation(reservation:any):any
 {console.log(reservation);
 
  return this.http.post(this.apiprefix+"reservation/addreservation",reservation);
}



getReservationbyiduser(id:any):any
{

 return this.http.get(this.apiprefix+"reservation/getReservationbyiduser/"+id);
}
getReservationbyiduserA(id,ida:any):any
{

 return this.http.get(this.apiprefix+"reservation/getReservationbyiduserA/"+id+"/"+ida);
}
getAllReservation():any
{

 return this.http.get(this.apiprefix+"reservation/getallreservation");
}
getallreservationM():any
{

 return this.http.get(this.apiprefix+"reservation/getallreservationM");
}

}
