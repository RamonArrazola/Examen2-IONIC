import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/Interfaces/index';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  Favoritos = [];
  bool: boolean = false;
  public Album: Album[] = [];

  constructor() {}

  ngOnInit(){
    if(this.Favoritos.length > 0){
      this.bool = true;
    }
  }

  loadData(event: any) {
    // this.service.CustomSearch(this.Type, this.Method, this.selected as string, event).subscribe((respuesta) => {
    //   this.Album = [...this.Album, ...respuesta];

    //   setTimeout(() => {
    //     (event as InfiniteScrollCustomEvent).target.complete();
    //   }, 4000);
    // });
  }
}
