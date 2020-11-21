import { Component, OnInit, OnChanges, SimpleChanges, Input, Output} from '@angular/core';
import { AlbumService } from '../services/album.service';
import { FilterService } from '../services/filter.service';
import { SongService} from '../services/song.service';
import { Album } from '../interfaces/albumDetalles';
import { Song } from '../interfaces/cancionDetalles';
import {FilterDataValues, FilterDataOptions} from  '../interfaces/filterData';
import { ListacancionesComponent } from '../listacanciones/listacanciones.component';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  asongs: Song[];

  filterOptions:FilterDataOptions[]=[
    {key:'title', name:'Título',},
    {key:'composer', name:'Compositor'},
    {key: 'performer', name: 'Interprete',},
    {key: 'album', name: 'Album',},
    {key: 'style', name: 'Estilo',}
  ];

  filterData: FilterDataValues={selector:'title',value:''};


  filter(){
    if(this.filterData.selector){
      this.filterService.filterSongs(this.filterData);
      this.filterService.filterActive=true;
      this.asongs = this.filterService.selectedSongs;
    }else{
      this.filterService.filterActive=false;
    }
  }


  constructor(
    private filterService: FilterService,
  ) {}

  ngOnInit(): void {
    this.filterService.filterSongs(this.filterData);
    this.asongs = this.filterService.selectedSongs;
  }

}
