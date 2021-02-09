import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  @Output() resultado = new EventEmitter<number>();
  numero1 : number = 0;
  numero2 : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  operacion(ope: number){
    if(ope == 1){
      this.resultado.emit(this.numero1 + this.numero2);
    }else if(ope == 2){
      this.resultado.emit(this.numero1 - this.numero2);
    }else if(ope == 3){
      this.resultado.emit(this.numero1 * this.numero2);
    }else{
      this.resultado.emit(this.numero1 / this.numero2);
    }
  }
}
