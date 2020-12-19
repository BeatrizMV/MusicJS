import { Injectable } from '@angular/core';
import { FilterDataValues } from '../interfaces/filterData';
import {Song} from 'src/app/interfaces/cancionDetalles';
import { SongService } from 'src/app/services/song.service';
import { AlbumService } from 'src/app/services/album.service';
import { Album } from '../interfaces/albumDetalles';
import {Observable, EMPTY} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class  FilterService {
  public selectedSongs:Song[] = [];
  public filterActive:boolean;

  inactiveFilter(){
    this.filterActive=false;
  }

  filterSongs(data:FilterDataValues){
    //Devolver una lista de canciones que en la categoría data.selector contenga el valor data.value
    let songs:Observable<Song[]>;
    let albums:Album[];
    switch(data.selector){
      case 'title':
        songs = this.songService.getSongs();
        songs.subscribe(theSongs => {
          theSongs.forEach(song => {
            if(song.title.toLocaleLowerCase().includes(data.value.toLocaleLowerCase())){
              this.selectedSongs.push(song);
            }
          });
        });
        
        break;
      case 'composer':
        songs = this.songService.getSongs();
        songs.subscribe(theSongs => {
          theSongs.forEach(song=>{
            if(this.searchSubstringInArray(song.composer, data.value)){
              console.log(song);
              this.selectedSongs.push(song);
            }
          })
        });
        
        break;
      case 'performer':
        songs = this.songService.getSongs();
        songs.subscribe(theSongs => {
          theSongs.forEach(song=>{
            if(this.searchSubstringInArray(song.performer, data.value)){
              this.selectedSongs.push(song);
            }
          })
        });
        
        break;
      case 'album':
      albums = this.albumService.getAlbums();
      albums.forEach(album => {
        if(album.details.title.toLocaleLowerCase().includes(data.value.toLocaleLowerCase())){
            this.getAllSongsFromAlbum(album.id, this.selectedSongs);
          }
        });
      
      break;
      case 'style':
        albums = this.albumService.getAlbums();
        albums.forEach(album=>{
          if(this.searchSubstringInArray(album.details.style, data.value)){
              this.getAllSongsFromAlbum(album.id, this.selectedSongs);
            }
          });
        
         break;
      default:
          songs = this.songService.getSongs();
          songs.subscribe(theSongs => {
            this.selectedSongs = theSongs;
          });
        break;
    }
    this.filterActive=true;
  }
  private getAllSongsFromAlbum(albumId, selectedSongs:Song[]):void{
    let songs = this.songService.getSongs();
    songs.subscribe(theSongs => {
      theSongs.forEach(song=>{
        if(song.album == albumId){
          this.selectedSongs.push(song);
        }
      })
    });
    
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
