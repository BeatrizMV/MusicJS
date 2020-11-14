/*Interfaz para la clase mock-albums*/

import{AlbumDetails} from './albumDetalles';

export interface Album {
  id: number,
  details:AlbumDetails
}
