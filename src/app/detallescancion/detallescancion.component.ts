import { Component, OnInit, Input } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { AlbumDetails } from '../interfaces/albumDetalles';
import { Song } from '../interfaces/cancionDetalles';
import { SelectedSongService } from '../services/selected-song.service';
import { UpdateData } from '../services/update-data';


@Component({
  selector: 'app-detallescancion',
  templateUrl: './detallescancion.component.html',
  styleUrls: ['./detallescancion.component.css']
})
export class DetallescancionComponent implements OnInit {

  @Input() song: Song;
  currentAlbumDetails: AlbumDetails;
  album_id: string;

  editable:boolean = false;
  edit(){
    if(this.editable){
      this.editable=false;
    }
    else{
      this.editable = true;
    }
  }
  save(value:any){
    this.updateDataService.updateData(value);
    this.edit();
  }
  cancel(){
    this.edit();
  }
  getAlbum():void{
    /*let details = this.albumService.getAlbumDetails(id);
    return details; */
    this.albumService.getAlbums().subscribe(theAlbums => {
      theAlbums.forEach(album => {
        if(this.song){
          if(album.id == this.song.album.id){
            this.currentAlbumDetails = album.details;
          }
        }
      });
    });
  }

  constructor(private albumService: AlbumService,
              private selectedSongService: SelectedSongService,
              private updateDataService: UpdateData) { }

  ngOnInit(): void {
    this.selectedSongService.currentSelectedSong.subscribe(s => {
      this.song = s;
      this.getAlbum();
    });
  }
}
