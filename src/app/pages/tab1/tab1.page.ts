import { Component, OnInit, ViewChild } from '@angular/core';
import { Album } from 'src/app/Interfaces/index';
import { ServiceService } from 'src/app/services/service.service';
import { InfiniteScrollCustomEvent, IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public categorias: string[] = [
    'progressive metal',
    'rock',
    'indie',
    'jazz',
    'punk',
    'blues',
    'alternative',
    'rap'
  ];

  public Method: string = 'tag.gettopalbums';
  public Type: string = 'tag';
  public Album: Album[] = [];
  public selected: string =  this.categorias[0];
  // @ViewChild(IonSegment) segment! : IonSegment;

  constructor(private service: ServiceService) {}

  ngOnInit(){
    this.service.CustomSearch(this.Type, this.Method, this.selected).subscribe((albums) => {
      this.Album = [...this.Album, ...albums];
    });
  }

  segmentChanged(event: Event){
    this.selected = (event as CustomEvent).detail.value;
    this.service.CustomSearch(this.Type, this.Method, this.selected).subscribe((albums) =>{
      this.Album = [...albums];
    });
  }

  loadData(event: any) {
    this.service.CustomSearch(this.Type, this.Method, this.selected as string, event).subscribe((respuesta) => {
      this.Album = [...this.Album, ...respuesta];

      setTimeout(() => {
        (event as InfiniteScrollCustomEvent).target.complete();
      }, 4000);
    });
  }
}
