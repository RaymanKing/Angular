import { Component, OnInit } from '@angular/core';
import { Candidato } from '../candidato.model';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent implements OnInit {

  candidato1 = new Candidato('Pepe','Cudering',21,'75 kg','El Pepe','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJvJwq50a1LaYzXYjXdl1ULUsld_x0uLmTkQ&usqp=CAU');
  candidato2 = new Candidato('Ele','Dominio',25,'65 kg','Eleuve','https://banner2.cleanpng.com/20180330/ipw/kisspng-avatar-kinect-xbox-360-xbox-one-avatar-5abe814f5888c9.3801728815224343833626.jpg');
  candidato3 = new Candidato('Jhon','Putin',20,'85 kg','Putsi','https://banner2.cleanpng.com/20180325/tcw/kisspng-james-cameron-s-avatar-the-game-lips-xbox-360-wii-avatar-5ab752aea3ccb1.0869128615219636946709.jpg');
  candidatos : Array<Candidato> = [this.candidato1, this.candidato2, this.candidato3];
  ind : number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  pintarDatos(indice : number){
    this.ind = indice;
  }

  limpiar(){
    this.ind = -1;
  }

}
