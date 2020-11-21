import { Component, OnInit} from '@angular/core';
import { AlbumService } from '../services/album.service';
import { FilterService } from '../services/filter.service';
import { SongService} from '../services/song.service';
import { Album } from '../interfaces/albumDetalles';
import { Song } from '../interfaces/cancionDetalles';
import { FilterData } from '../interfaces/filterData';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filterdata:FilterData;

  allsongs: Song[];
  allalbums: Album[];

  submitted = false;

  onSubmit() {
    this.filterService.filterData(this.filterdata);
  }
  constructor(
    private songService: SongService,
    private albumService: AlbumService,
    private filterService: FilterService,
  ) {}

  ngOnInit(): void {
    this.allsongs = this.songService.getSongs();
    this.allalbums = this.albumService.getAlbums();
  }

}
