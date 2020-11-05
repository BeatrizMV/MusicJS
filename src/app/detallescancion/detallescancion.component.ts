import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../interfaces/cancionDetalles';

@Component({
  selector: 'app-detallescancion',
  templateUrl: './detallescancion.component.html',
  styleUrls: ['./detallescancion.component.css']
})
export class DetallescancionComponent implements OnInit {

  @Input() song: Song;

  constructor() { }

  ngOnInit(): void {
  }

}
