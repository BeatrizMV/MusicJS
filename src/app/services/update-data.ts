import { Injectable } from '@angular/core';

import {Song} from '../interfaces/cancionDetalles';
import {SONGS} from '../../assets/data/mock-songs'
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Album, AlbumDetails } from '../interfaces/albumDetalles';


@Injectable({
  providedIn: 'root'
})
export class UpdateData{

  constructor(private firestore: AngularFirestore) {}

  fs = this.firestore;

  updateData(newData:any){
    var album = this.fs.collection('albums').doc(newData.albumId);
    var song  = this.fs.collection('songs').doc(newData.songId);

    album.update({style: newData.style});
    album.update({title: newData.title});
    song.update({performer: newData.performer});
  }
}
