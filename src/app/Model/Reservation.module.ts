import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class Reservation { 
    private id?: number | undefined;
    public getid(): number | undefined {
        return this.id;
    }
    public setid(value: number | undefined) {
        this.id = value;
    }
    private user: number | any;
    public getuser(): number | any {
        return this.user;
    }
    public setuser(value: number | any) {
        this.user = value;
    }

    private annonce: number | any;
    public getannonce(): number | any {
        return this.annonce;
    }
    public setannonce(value: number | any) {
        this.annonce = value;
    }
    public date_res?: Date | any;
    public getdate_res(): Date | any {
        return this.date_res;
    }
    public setdate_res(value: Date | any) {
        this.date_res = value;
    }



}