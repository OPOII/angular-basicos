import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { MainPageComponent } from '../main-page/main-page.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent  {

  @Input() personajes:Personaje[]=[]

  @Input() nuevo: Personaje={
   nombre:'',
   poder:0
 }
 agregar(  ){
  if(this.nuevo.nombre.trim().length===0){
    return;
  }
  console.log(this.nuevo);
  //MainPageComponent.prototype.personajes.push(this.nuevo);
  this.personajes.push(this.nuevo);
  this.nuevo={
    nombre:"",
    poder: 0
  }

}
}
