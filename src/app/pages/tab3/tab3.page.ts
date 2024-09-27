import { Component, OnInit} from '@angular/core';
import { Album } from 'src/app/Interfaces/index';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  bool: boolean = false;
  get albums(): Album[] {
    if (this.storage.localAlbums.length > 0) {
      this.bool = true;
    }
    return this.storage.localAlbums;
  }

  constructor(private storage: StorageService) {}

  ngOnInit(){
    if (this.storage.localAlbums.length > 0) {
      this.bool = true;
    }
    else{
      this.bool = false;
    }
  }
}
