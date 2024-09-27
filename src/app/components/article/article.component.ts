import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/Interfaces';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  @Input() album!: Album
  @Input() i: number = 0; 
  Fav = false; 
  carga: boolean = false;
  

  constructor(private storage: StorageService) { }

  ngOnInit(){
    this.Fav = this.storage.existencia(this.album);

    setTimeout(() => {
      this.carga = true;
    }, 2000);

  }

  OnClick(){
    this.Fav = !this.Fav;
    this.storage.saveOrRemove(this.album);
  }
}
