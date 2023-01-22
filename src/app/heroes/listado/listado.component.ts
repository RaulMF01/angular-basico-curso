import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor', 'Batman osi osi']
  heroeb: string = '';

  borrarHeroe(){
    this.heroeb =  this.heroes.shift() || '';
  }
}
