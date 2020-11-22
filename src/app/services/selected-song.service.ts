import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Song } from '../interfaces/cancionDetalles';

@Injectable({
  providedIn: 'root'
})
export class SelectedSongService{

  private selectedSong = new BehaviorSubject<Song>(null);
  currentSelectedSong = this.selectedSong.asObservable();

  constructor() { }

  setSelectedSong(newSelectedSong: Song) {
    this.selectedSong.next(newSelectedSong);
  }

}