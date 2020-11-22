import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {Song} from 'src/app/interfaces/cancionDetalles';
import { SongService } from 'src/app/services/song.service';
import { AlbumService } from 'src/app/services/album.service';
import { AlbumDetails } from '../interfaces/albumDetalles';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-listacanciones',
  templateUrl: './listacanciones.component.html',
  styleUrls: ['./listacanciones.component.css']
})
export class ListacancionesComponent implements OnInit {

  @Input() songs: Song[]
  //albums: Album[];

  /*Event handler*/
  public songSelected: boolean = false;
  selectedSong: Song;

  onSelect(song: Song): void {
    if(this.selectedSong === song){
      this.selectedSong = null;
      this.songSelected = false;
    }else{
      this.selectedSong = song;
      this.songSelected = true;
    }
  }

  getAlbumDetails(id:number):AlbumDetails{
    let details = this.albumService.getAlbumDetails(id);
    return details;
  }

  constructor(
    private albumService: AlbumService,
    private filterService:FilterService,
    ) { }

  ngOnChanges(changes: SimpleChanges){
    this.selectedSong = null;
    this.songSelected = false;
  }

  ngOnInit(): void {
    this.songs= this.filterService.selectedSongs;
    console.log(this.songs.length);
  }

}
