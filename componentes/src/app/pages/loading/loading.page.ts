import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  load: any;

  constructor(public loading: LoadingController) { }

  ngOnInit() {

    setTimeout(() => {
      this.load.dismiss();
    }, 1500);

    this.presentLoading('Cargando');
  }

  async presentLoading( mensaje: string ) {
    this.load = await this.loading.create({
      message: mensaje
    });
    return this.load.present();
  }

}
