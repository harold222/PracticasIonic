import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista', {static: false}) lista;
  usuario: Observable<any>;

  constructor( private data: DataService ) { }

  ngOnInit() {
    this.usuario = this.data.getUsers();
  }

  favorite( user ) {
    console.log('favorite: ', user);
    this.lista.closeSlidingItems();
  }

  share( user ) {
    console.log('share: ', user);
    this.lista.closeSlidingItems();
  }

  borrar( user ) {
    console.log(user);
    this.lista.closeSlidingItems();
  }

}
