import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ForfaitModule { 
  public inclut?: String | undefined;
    public getinclut(): String | undefined {
        return this.inclut;
    }
    public setinclut(value: String | undefined) {
        this.inclut = value;
    }
  public noninclut?: String | undefined;
    public getnoinclut(): String | undefined {
        return this.noninclut;
    }
    public setnoinclut(value: String | undefined) {
        this.noninclut = value;
    }

}