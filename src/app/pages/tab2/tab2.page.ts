import { Component} from '@angular/core';
import { Album } from 'src/app/Interfaces/index';
import { ServiceService } from 'src/app/services/service.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{

  options = [
   'Album',
   'Artist'
  ]
  busqueda: string = '';
  selected: string = this.options[0];
  Method: string = 'album.search';
  public Album: Album[] = [];

  constructor(private service: ServiceService) {}
  Select(event: Event){
    this.selected = (event as CustomEvent).detail.value;
    if(this.selected === this.options[0]){
      this.Method = 'album.search';
    }
    else{
      this.Method = 'artist.gettopalbums';
    }
  }
  
  onSearchChange(event: any){
    if(this.busqueda === '') {
      this.Album = [...[]];
      this.busqueda = event.detail.value;
    } else{
      this.busqueda = event.detail.value;
    }
    this.service.CustomSearch(this.selected.toLowerCase(), this.Method, this.busqueda).subscribe((albums) =>{
      this.Album = [...this.Album, ...albums];
    });
  }

  loadData(event: any) {
    this.service.CustomSearch(this.selected.toLowerCase(), this.Method, this.selected as string, event).subscribe((respuesta) => {
      this.Album = [...this.Album, ...respuesta];

      setTimeout(() => {
        (event as InfiniteScrollCustomEvent).target.complete();
      }, 4000);
    });
  }
}
