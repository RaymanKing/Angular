import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  nombre : string = "";
  apellido : string = "";
  personas : Array<Persona> = [];

  constructor() { }

  ngOnInit(): void {
  }

  newPersona(){
    if(this.nombre != '' && this.apellido != ''){
      this.personas.push(new Persona(this.nombre, this.apellido));
    }else{
      alert('Porfavor rellena todo los datos!')
    }
  }

}
