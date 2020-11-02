import { Component, OnInit } from '@angular/core';
import {Song} from 'src/app/interfaces/cancionDetalles';
import {SONGS} from 'src/app/mock-songs'

@Component({
  selector: 'app-cancion-detalles',
  templateUrl: './cancion-detalles.component.html',
  styleUrls: ['./cancion-detalles.component.css']
})
export class CancionDetallesComponent implements OnInit {

  public song: Song
  public songs = SONGS

  /*Event handler*/
  selectedSong: Song;
  onSelect(song: Song): void {
    this.selectedSong = song;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
