import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent  {

  @Input() nuevo: Personaje={
   nombre:'',
   poder:0
 }
 //@Output() nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();


 //Creo el constructor para poder usar el servicio en cualquier parte de la clase

 constructor(private dbzService: DbzService){

 }

 agregar(  ){
  if(this.nuevo.nombre.trim().length===0){
    return;
  }
  this.dbzService.addCharacters(this.nuevo);
  //this.nuevoPersonaje.emit(this.nuevo);
  //MainPageComponent.prototype.personajes.push(this.nuevo);
  this.nuevo={
    nombre:"",
    poder: 0
  }
  

}
}
