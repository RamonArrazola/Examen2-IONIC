import { Component, Input } from '@angular/core';
import { Album } from '../../Interfaces/index';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent {

  @Input() Albums: Album[] = [];

  constructor() { }
}
