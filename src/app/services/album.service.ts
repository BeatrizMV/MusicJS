import { Injectable } from '@angular/core';

import{Album} from '../interfaces/albumDetalles';
import { AlbumDetails } from '../interfaces/albumDetalles';
import {ALBUMS} from '../../assets/data/mock-albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  getAlbumDetails(id:number): AlbumDetails {
    let details: AlbumDetails;
    ALBUMS.forEach(album => {
      if(album.id == id){details = album.details; return details;}
    });
    return details;
  }

  getAlbums(): Album[]{
    return ALBUMS;
  }
  constructor() { }
}
