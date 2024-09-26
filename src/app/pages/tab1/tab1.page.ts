import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/Interfaces/index';
import { ServiceService } from 'src/app/services/service.service';
import { IonInfiniteScroll } from '@ionic/angular';

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

  public Album: Album[] = [];
  public selected: string =  this.categorias[0];

  constructor(private service: ServiceService) {}

  ngOnInit(){
    this.service.getTopAlbumsByTag(this.selected).subscribe((albums) => {
      this.Album = [...this.Album, ...albums];
    });
  }

  segmentChanged(event: Event){
    console.log(event);
  }
}
