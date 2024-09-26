import { Component, Input } from '@angular/core';
import { Album } from 'src/app/Interfaces';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent{

  @Input() album!: Album
  @Input() i: number = 0; 

  constructor() { }

  OnClick(){
    console.log("Click");
  }

}
