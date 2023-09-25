import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AnnonceModule { 


    constructor() { }
    
    public titre?: string | undefined;
    public gettitre(): string | undefined {
        return this.titre;
    }
    public settitre(value: string | undefined) {
        this.titre = value;
    }
    public destination?: String | undefined;
    public getdestination(): String | undefined {
        return this.destination;
    }
    public setdestination(value: String | undefined) {
        this.destination = value;
    }
    public date_debut?: Date | any;
    public getdate_debut(): Date | any {
        return this.date_debut;
    }
    public setdate_debut(value: Date | any) {
        this.date_debut = value;
    }
    public date_fin?: Date | any;
    public getdate_fin(): Date | any {
        return this.date_fin;
    }
    public setdate_fin(value: Date | any) {
        this.date_fin = value;
    }

    public description?: String | undefined;
    public getdescription(): String | undefined {
        return this.description;
    }
    public setdescription(value: String | undefined) {
        this.description = value;
    }
    public prix?: number | any;
    public getprix(): number | any {
        return this.prix;
    }
    public setprix(value: number | any) {
        this.prix = value;
    }
    public image?: String | undefined;
    public getimage(): String | undefined {
        return this.image;
    }
    public setimage(value: String | undefined) {
        this.image = value;
    }
    public forfait?: number | any;
    public getidForfait(): number | any {
        return this.forfait;
    }
    public setidForfait(value: number | any) {
        this.forfait = value;
    }
}