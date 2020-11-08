import { Injectable } from '@angular/core';
import {Song} from 'src/app/interfaces/cancionDetalles';
import {SONGS} from 'src/app/mock-songs'

@Injectable({
  providedIn: 'root'
})
export class SongService {
  getSongs(): Song[] {
    return SONGS
  }

  constructor() { }
}
