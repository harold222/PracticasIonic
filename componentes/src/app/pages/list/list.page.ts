import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista', {static: false}) lista;
  usuario: Observable<any>;

  constructor( private data: DataService, private toast: ToastController ) { }

  ngOnInit() {
    this.usuario = this.data.getUsers();
  }

  async presentToast( message: string ) {
    const toast = await this.toast.create({
      message,
      color: 'secondary',
      duration: 1500
    });

    toast.present();
  }

  favorite( user ) {
    this.presentToast('Guardado en favoritos');
    this.lista.closeSlidingItems();
  }

  share( user ) {
    this.presentToast('Compartido...!');
    this.lista.closeSlidingItems();
  }

  borrar( user ) {
    this.presentToast('Borrado el elemento');
    this.lista.closeSlidingItems();
  }

}
