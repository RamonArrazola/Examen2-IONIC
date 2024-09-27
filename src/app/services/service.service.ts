import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Album, AlbumPage, AlbumResponse, SearchResponse, ArtistSearchResponse } from '../Interfaces/index';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

const URL = environment.apiUrl;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private AlbumPage: AlbumPage = {};

  constructor(private http: HttpClient) { }

  private Query<T>(endpoint: string){
    return this.http.get<T>(`${ URL }${ endpoint }`,{
      params: {
        api_key: API_KEY,
        format: 'json'
      }
    })
  }

  private Search(type: string, method: string, tag: string): Observable<Album[]>{
    if(!Object.keys(this.AlbumPage).includes(tag)){
      this.AlbumPage[tag] = {
        page: 0,
        albums: []
      }
    }
    const page = this.AlbumPage[tag].page + 1;
    switch (type) {
      case 'album':
        return this.Query<SearchResponse>(`/?method=${method}&${type}=${tag}&page=${page}`).pipe(
          map(({results}) =>{
            if(results.albummatches.album.length === 0) return this.AlbumPage[tag].albums;
    
            this.AlbumPage[tag] = {
              page: page,
              albums: [...this.AlbumPage[tag].albums, ...results.albummatches.album]
            }
            return this.AlbumPage[tag].albums;
          })
        );
      case 'artist':
        return this.Query<ArtistSearchResponse>(`/?method=${method}&${type}=${tag}&page=${page}`).pipe(
          map(({topalbums}) =>{
            if(topalbums.album.length === 0) return this.AlbumPage[tag].albums;
    
            this.AlbumPage[tag] = {
              page: page,
              albums: [...this.AlbumPage[tag].albums, ...topalbums.album]
            }
            return this.AlbumPage[tag].albums;
          })
        );
      default:
        return this.Query<AlbumResponse>(`/?method=${method}&${type}=${tag}&page=${page}`).pipe(
          map(({albums}) =>{
            if(albums.album.length === 0) return this.AlbumPage[tag].albums;
    
            this.AlbumPage[tag] = {
              page: page,
              albums: [...this.AlbumPage[tag].albums, ...albums.album]
            }
            return this.AlbumPage[tag].albums;
          })
        );
    }
  }

  CustomSearch(type: string, method:string, tag: string, loadMore: Boolean = false){
    if(tag === ''){
      return of([]);
    }
    else{
      if(loadMore){
        this.Search(type, method, tag);
      }
      if(this.AlbumPage[tag]){
        return of(this.AlbumPage[tag].albums);
      }
      return this.Search(type, method, tag);
    }
  }
  
}
