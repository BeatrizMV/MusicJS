import { Component, OnInit, Input } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { AlbumDetails } from '../interfaces/albumDetalles';
import { Song } from '../interfaces/cancionDetalles';
import { SelectedSongService } from '../services/selected-song.service';


@Component({
  selector: 'app-detallescancion',
  templateUrl: './detallescancion.component.html',
  styleUrls: ['./detallescancion.component.css']
})
export class DetallescancionComponent implements OnInit {

  @Input() song: Song;

  getAlbum(id:number):AlbumDetails{
    let details = this.albumService.getAlbumDetails(id);
    return details;
  }

  constructor(private albumService: AlbumService,
              private selectedSongService: SelectedSongService) { }

  ngOnInit(): void {
    this.selectedSongService.currentSelectedSong.subscribe(s => this.song = s);
  }
}
