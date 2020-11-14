/*Interfaz para la clase mock-albums*/
export interface AlbumDetails {
  title: string;
  description?: string;
  release_date: string;
  ISMN?: string;
  cover_img: string;
  style: string[];
}
export interface Album {
  id: number,
  details:AlbumDetails
}
