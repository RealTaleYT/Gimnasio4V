import { Component,Input,input } from '@angular/core';
const ACTUALIDAD = new Date();
@Component({
  selector: 'app-actividades',
  imports: [],
  templateUrl: './actividades.component.html',
  styleUrl: './actividades.component.scss'
})
export class ActividadesComponent {
  actividades = [
    {
      fecha: ACTUALIDAD.toLocaleDateString() + " " + ACTUALIDAD.toLocaleTimeString(),
      lugar: "Aula01",
      monitor: "Miguel Goyena",
      tipo: "BodyPump"
    },
    {
      fecha: ACTUALIDAD.toLocaleDateString() + " " + ACTUALIDAD.toLocaleTimeString(),
      lugar: "Aula02",
      monitor: "Miguel Goyena",
      tipo: "Pilates"
    }
  ]
}
