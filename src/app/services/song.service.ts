import { Injectable } from '@angular/core';
import {Song} from '../interfaces/cancionDetalles';
import {SONGS} from '../../assets/data/mock-songs'


@Injectable({
  providedIn: 'root'
})
export class SongService {
  getSongs(): Song[] {
    return SONGS
  }

  constructor() { }
}
