import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {Song} from 'src/app/interfaces/cancionDetalles';
import { SongService } from 'src/app/services/song.service';
import { AlbumService } from 'src/app/services/album.service';
import { AlbumDetails } from '../interfaces/albumDetalles';
import { FilterService } from '../services/filter.service';
import { SelectedSongService } from '../services/selected-song.service';

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
      /*Comentado este bloque para que no deseleccione, ya que 
       al volver a hacer click en la misma cancion y convertir
       selectedSong en null, hay errores de null pointer en el 
       componente detallescancion.
       He observado que en Spotify no deselecciona, por lo que 
       tiene sentido que lo hagamos como ellos.
      */
      //this.selectedSong = null;
      //this.setSelectedSong(null);
      //this.songSelected = false;
    }else{
      //this.selectedSong = song;
      this.setSelectedSong(song);
      this.songSelected = true;
    }
  }

  setSelectedSong(song: Song) {
    this.selectedSongService.setSelectedSong(song);
  }

  getAlbumDetails(id:number):AlbumDetails{
    let details = this.albumService.getAlbumDetails(id);
    return details;
  }

  constructor(
    private albumService: AlbumService,
    private filterService:FilterService,
    private selectedSongService:SelectedSongService
    ) { }

  ngOnChanges(changes: SimpleChanges){
    this.selectedSong = null;
    this.songSelected = false;
  }

  ngOnInit(): void {
    this.songs= this.filterService.selectedSongs;
    console.log(this.songs.length);
    this.selectedSongService.currentSelectedSong.subscribe(s => this.selectedSong = s);
  }

}
