import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProgrammeModule { 
  private description?: String | undefined;
  public getDescription(): String | undefined {
    return this.description;
  }
  public setdescription(value: String | undefined) {
    this.description = value;
  }
  private destination?: String | undefined;
  public getdestination(): String | undefined {
    return this.destination;
  }
  public setdestination(value: String | undefined) {
    this.destination = value;
  }
  private jour?: String | undefined;
  public getjour(): String | undefined {
    return this.jour;
  }
  public setjour(value: String | undefined) {
    this.jour = value;
  }
  private titre?: String | undefined;
  public gettitre(): String | undefined {
    return this.titre;
  }
  public settitre(value: String | undefined) {
    this.titre = value;
  }
  private image?: String | undefined;
  public getimage(): String | undefined {
    return this.image;
  }
  public setimage(value: String | undefined) {
    this.image = value;
  }
  private annonce?: number | any;
  public getannonce(): number | any {
    return this.annonce;
  }
  public setannonce(value: number | any) {
    this.annonce = value;
  }

}
