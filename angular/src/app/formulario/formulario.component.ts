import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Input() resultado : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
