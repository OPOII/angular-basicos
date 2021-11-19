import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService{

    private _personajes: Personaje[]=[
        {
          nombre: 'Goku',
          poder: 15000,
        },
        {
          nombre: 'Vegeta',
          poder:8000
        }
      ];
    
    get personajes(): Personaje[]{
        //Operador Spread, se usa para evitar que se envie el arreglo por referencia y se manipule
        return [...this._personajes];
    }
    constructor(){
    }
    addCharacters(personaje: Personaje){
        this._personajes.push(personaje);
    }
}