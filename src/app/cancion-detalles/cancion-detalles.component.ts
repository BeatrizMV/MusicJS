
import { Component, OnInit } from '@angular/core';
import {Song} from 'src/app/interfaces/cancionDetalles';
import { SongService } from 'src/app/song.service'
import {Album} from '../interfaces/album';
import { AlbumService } from 'src/app/album.service';
import { AlbumDetails } from '../interfaces/albumDetalles';

@Component({
  selector: 'app-cancion-detalles',
  templateUrl: './cancion-detalles.component.html',
  styleUrls: ['./cancion-detalles.component.css']
})
export class CancionDetallesComponent implements OnInit {

  songs: Song[]
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

  getSongs(): void {
    this.songs = this.songService.getSongs();
    //this.albums = this.albumService.getAlbums();
  }
  getAlbumDetails(id:number):AlbumDetails{
    let details = this.albumService.getAlbumDetails(id);
    return details;
  }

  constructor(
    private songService: SongService,
    private albumService: AlbumService
    ) { }

  ngOnInit(): void {
    this.getSongs();
  }

}
