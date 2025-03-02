import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Album {
  userId: number;
  id: number;
  title: string;
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private API_URL = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.API_URL);
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.API_URL}/${id}`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.API_URL}/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }

  getPhotos(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
  }
}
