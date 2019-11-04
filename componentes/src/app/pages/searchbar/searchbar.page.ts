import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albunes: any[] = [];
  textoBuscar = '';

  constructor( private data:DataService ) { }

  ngOnInit() {
    this.data.getAlbunes().subscribe(albunes => {
      this.albunes = albunes;
    });
  }

  onSearchChange( event ) {
    this.textoBuscar = event.detail.value;
  }

}
