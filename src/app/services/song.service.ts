import { Injectable } from '@angular/core';
import {Song} from '../interfaces/cancionDetalles';
import {SONGS} from '../../assets/data/mock-songs'
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SongService {
  getSongs(): Song[] {
    this.getAlbums();
    return SONGS
  }

  getAlbums(){

    var album = this.firestore.collection('album_alt').get();
    album.forEach(doc=>{
      doc.forEach(d=>{
        console.log(d.data())
        console.log(d.id)
        console.log(d.metadata)
      });
    })
  }





  constructor(private firestore: AngularFirestore) { }
}
