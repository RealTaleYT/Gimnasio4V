import { Component } from '@angular/core';
const ACTUALIDAD = new Date();
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Gimnasio4V';
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
