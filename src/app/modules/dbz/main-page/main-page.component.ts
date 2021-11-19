import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  personajes: Personaje[]=[
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder:8000
    }
  ];

  nuevo:Personaje={
    nombre:'',
    poder: 0
  }  
  agregarNuevoPersonaje(argumento:Personaje){
    this.personajes.push(argumento);
  }

  constructor(private dbzService: DbzService){
    
  }


}
