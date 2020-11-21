import { Injectable } from '@angular/core';
import { FilterDataValues } from '../interfaces/filterData';
import {Song} from 'src/app/interfaces/cancionDetalles';
import { SongService } from 'src/app/services/song.service';
import { AlbumService } from 'src/app/services/album.service';
import { Album } from '../interfaces/albumDetalles';


@Injectable({
  providedIn: 'root'
})
export class  FilterService {
  public selectedSongs:Song[];
  public filterActive:boolean;

  inactiveFilter(){
    this.filterActive=false;
  }

  filterSongs(data:FilterDataValues){
    //Devolver una lista de canciones que en la categoría data.selector contenga el valor data.value
    let songs:Song[];
    let albums:Album[];
    let selectedSongs: Song[]=[];
    switch(data.selector){
      case 'title':
        songs = this.songService.getSongs();
        songs.forEach(song => {
          if(song.title.toLocaleLowerCase().includes(data.value.toLocaleLowerCase())){
            selectedSongs.push(song);
          }
        });
        break;
      case 'composer':
        songs = this.songService.getSongs();
        songs.forEach(song=>{
          if(this.searchSubstringInArray(song.composer, data.value)){
            console.log(song);
            selectedSongs.push(song);
          }
        })
        break;
      case 'performer':
        songs = this.songService.getSongs();
        songs.forEach(song=>{
          if(this.searchSubstringInArray(song.performer, data.value)){
            selectedSongs.push(song);
          }
        })
        break;
      case 'album':
      albums = this.albumService.getAlbums();
      albums.forEach(album => {
        if(album.details.title.toLocaleLowerCase().includes(data.value.toLocaleLowerCase())){
          selectedSongs=this.getAllSongsFromAlbum(album.id, selectedSongs);
        }
      });
      break;
      case 'style':
        albums = this.albumService.getAlbums();
        albums.forEach(album=>{
          if(this.searchSubstringInArray(album.details.style, data.value)){
            selectedSongs=this.getAllSongsFromAlbum(album.id, selectedSongs);
          }
        })
         break;
      default:
          selectedSongs = this.songService.getSongs();
        break;
    }
    this.selectedSongs = selectedSongs;
    this.filterActive=true;
  }
  private getAllSongsFromAlbum(albumId, selectedSongs:Song[]):Song[]{
    let songs = this.songService.getSongs();
    songs.forEach(song=>{
      if(song.album == albumId){
        selectedSongs.push(song);
      }
    })
    return selectedSongs;
  }
  private searchSubstringInArray(array:string[], substring:string):boolean{
    let res:boolean = false; //Casi me vuelvo loco con esto. El return no escapa de la función principal, sino de la subfunción foreach.
    array.forEach(valor => {
      if(valor.toLocaleLowerCase().includes(substring.toLocaleLowerCase())){
        res = true;
      }
    });
    return res;
  }

  constructor(
    private songService: SongService,
    private albumService: AlbumService,
  ) { }
}
