import { Injectable } from '@angular/core';
import {Song} from '../interfaces/cancionDetalles';
import {SONGS} from '../../assets/data/mock-songs'
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
// import { SIGBREAK } from 'constants';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Album, AlbumDetails } from '../interfaces/albumDetalles';


@Injectable({
  providedIn: 'root'
})
export class SongService {
  getSongs(): Observable<Song[]> {
    //this.getSongsFB();
    return this.getSongsFB2();
  }


  /*
  album: number;
  track: number;
  title: string;
  composer: string[];
  performer: string [];
  time: string;
  year?:string;
  localPath: string;
   */

   //Este método devuelve todos los documentos de la colección "song" y se suscribe de manera q recibe los cambios
   //q se producen en cualquier documento de la base de datos.
   getSongsFB(){
    var songs: Song[];
    this.firestore.collection('songs').snapshotChanges().subscribe(song =>{
      song.map(song =>{
        console.log(song.payload.doc.data())
      })
    })
  }

  /*
  Este método devuelve un array "song" con los datos de la colección "song" y tb se suscribe.
  He cambiado atributo album en los documentos para que sea un "reference" a los documentos de la colección albums.
  El valor que devuelve no es una cadena pero se le peude pasar directametne como referencia a firestore.
  */
  getSongsFB2(){
    return this.firestore.collection('songs').snapshotChanges().pipe(map(snaps =>{
      return snaps.map(snap =>{
        return <Song>{
          album: snap.payload.doc.get('album'),
          track: snap.payload.doc.get('track'),
          composer: snap.payload.doc.get('composer'),
          performer: snap.payload.doc.get('performer'),
          time: snap.payload.doc.get('time'),
          title: snap.payload.doc.get('title'),
          year: snap.payload.doc.get('year'),
          localPath: snap.payload.doc.get('localPath'),
          albumDetails: snap.payload.doc.get('album'), 
        }
      })
    }))
  }

  constructor(private firestore: AngularFirestore) { }
}
