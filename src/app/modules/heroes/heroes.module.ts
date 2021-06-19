import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

//Se crea este modulo con los elementos en su carpeta para 
//que sea posible la extracción y reutilización del mismo
//Ademas, para poder hacerle mantenimiento y que no haya ningun problema

@NgModule({
    //Componentes que tengo
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    //solo van los modulos
    imports:[
        CommonModule
    ]
})
export class HeroesModule{}