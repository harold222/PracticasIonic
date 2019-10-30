import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor( public alert: AlertController ) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelar');
          }
        }, {
          text: 'Ok',
          handler: (blah) => {
            console.log('Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {

    const input = await this.alert.create({
      header: 'Datos personales',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Ingrese su nombre'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: ( data ) => {
            this.titulo = data.txtNombre;
          }
        }
      ]
    });

    await input.present();
  }


}
