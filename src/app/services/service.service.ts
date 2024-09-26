import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Album, AlbumPage, NewsResponse } from '../Interfaces/index';
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
    console.log("Query ejecutado");
    return this.http.get<T>(`${ URL }${ endpoint }`,{
      params: {
        api_key: API_KEY,
        format: 'json'
      }
    })
  }

  private getAlbumsByTag(tag: string): Observable<Album[]>{
    if(Object.keys(this.AlbumPage).includes(tag)){
      //VOID
    }
    else {
      this.AlbumPage[tag] = {
        page: 1,
        albums: []
      }
    }
    const page = this.AlbumPage[tag].page + 1;
    return this.Query<NewsResponse>(`/?method=tag.gettopalbums&tag=${tag}&page=${page}`).pipe(
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

  getTopAlbumsByTag(tag: string, loadMore: Boolean = false):Observable<Album[]>{
    if(loadMore){
      this.getAlbumsByTag(tag);
    }
    if(this.AlbumPage[tag]){
      return of(this.AlbumPage[tag].albums);
    }
    return this.getAlbumsByTag(tag);
  }
}
