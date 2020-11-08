import { Component, OnInit } from '@angular/core';
import {Song} from 'src/app/interfaces/cancionDetalles';
import { SongService } from 'src/app/song.service'

@Component({
  selector: 'app-cancion-detalles',
  templateUrl: './cancion-detalles.component.html',
  styleUrls: ['./cancion-detalles.component.css']
})
export class CancionDetallesComponent implements OnInit {

  public songs: Song[]

  /*Event handler*/
  public selectedSong: Song;
  onSelect(song: Song): void {
    this.selectedSong = song;
  }

  getSongs(): void {
    this.songs = this.songService.getSongs();
  }

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.getSongs();
  }

}
