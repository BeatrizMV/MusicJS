import { Component, OnInit, Input } from '@angular/core';
import { AlbumService } from '../album.service';
import { AlbumDetails } from '../interfaces/albumDetalles';
import { Song } from '../interfaces/cancionDetalles';


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

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
  }

}
