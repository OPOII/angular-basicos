import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes: string[]=[
    'Spiderman','Ironman','Hulk','Thor','Capitán América'
  ];
  borrado:string='';
  // constructor() { }

  // //Sirve para realizar peticiones HTTP para inicializar coasas antes de que inicie
  // ngOnInit(): void {
  // }
  borrarHeroe(){
    this.borrado=this.heroes.shift() || '';
    // const heroeBorrado=this.heroes.shift();
    // console.log(heroeBorrado);
    // // this.heroes.splice(2,1);
    // this.borrado=heroeBorrado;
    // if(heroeBorrado!=="" && this.heroes.length>0){
    //   this.mostrar=true;
    // }else{
    //   this.mostrar=false;
    // }
  }
}
