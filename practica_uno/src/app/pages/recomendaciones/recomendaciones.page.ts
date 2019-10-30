import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.page.html',
  styleUrls: ['./recomendaciones.page.scss'],
})
export class RecomendacionesPage implements OnInit {

  componentes: Componente[] = [
    {icon: 'md-hand',
    name: 'Ejercicios de brazos',
    redirecTo: '/brazo'
    },

    {icon: 'md-walk',
    name: 'Ejercicios de piernas',
    redirecTo: '/pierna'
    },

    {icon: 'md-man',
    name: 'Ejercicios de estomago',
    redirecTo: '/estomago'
    }
  ];

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmar!',
      message: 'Esta seguro que desea<strong> eliminar</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('cancelar');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('ok');
          }
        }
      ]
    });

    await alert.present();
  }


}

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}