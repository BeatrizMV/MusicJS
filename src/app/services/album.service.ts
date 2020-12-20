import { Injectable } from '@angular/core';

import{Album} from '../interfaces/albumDetalles';
import { AlbumDetails } from '../interfaces/albumDetalles';
import {ALBUMS} from '../../assets/data/mock-albums';

import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  getAlbumDetails(id:number): AlbumDetails {
    let details: AlbumDetails;
    this.getAlbums().subscribe(theAlbums => {
      theAlbums.forEach(album => {
        if (album.id == id) { details = album.details; return details; }
      });
    });

    return details;



  }

  getAlbums(): Observable<Album[]>{
    //return ALBUMS;
    return this.firestore.collection('albums').snapshotChanges().pipe(map(snaps => {
      return snaps.map(snap => {
        return <Album>{
          id: snap.payload.doc.get('id'),
          details: {
            id: snap.payload.doc.get('id'),
            title: snap.payload.doc.get('title'),
            release_date: snap.payload.doc.get('release_date'),
            cover_img: snap.payload.doc.get('cover_img'),
            style: snap.payload.doc.get('style'),
            localPath: snap.payload.doc.get('localPath'),
          }
        };
      });
    }))
  }
  constructor(private firestore: AngularFirestore) { }
}
