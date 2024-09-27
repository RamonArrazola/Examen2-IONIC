import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Album } from '../Interfaces/index';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;
  private _LocalAlbums: Album[] = [];

  get localAlbums(){
    return [...this._LocalAlbums];
  }

  constructor(private storage: Storage) { 
    this.init();
  }

  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
    this.loadFavorites();
  }

  existencia(album: Album){
    return !!this._LocalAlbums.find(localAlbums => localAlbums.name === album.name);
  }

  async loadFavorites(){
    try{
      if (this._storage) {
        const albums = await this._storage.get('album');
        this._LocalAlbums = albums || [];
      }
    }
    catch(error){
    }
  }

  async saveOrRemove(album: Album){

    const exists = this._LocalAlbums.find( localAlbum => localAlbum.name === album.name);
    if(exists){
      this._LocalAlbums = this._LocalAlbums.filter( localAlbum => localAlbum.name !== album.name);
    }
    else {
      this._LocalAlbums = [album, ...this._LocalAlbums];
    }
    if (this._storage) {
      this._storage.set('album', this._LocalAlbums);
    }
  }
}
