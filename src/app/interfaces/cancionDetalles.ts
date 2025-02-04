import { AlbumDetails } from "./albumDetalles";
import {Observable} from 'rxjs';

export interface Song {
  id?: string;
  album: any;
  track: number;
  title: string;
  composer: string[];
  performer: string [];
  time: string;
  year?:string;
  localPath: string;
  albumDetails?: any;
}
