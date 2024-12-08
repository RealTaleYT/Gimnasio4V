import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadesComponent } from "./actividades/actividades/actividades.component";
import { NavbarComponent } from "./navbar/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [ActividadesComponent, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Gimnasio4V';
}
