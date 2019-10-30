import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  fechaNacimiento: Date = new Date();
  customPickerOptions;
  customDate;

  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Guardar',
        handler: ( evento ) => {
          console.log('Guardado');
          console.log(evento);
          console.log(evento.day.value);
          console.log(evento.month.value);
          console.log(evento.year.value);
        }
      }, {
        text: 'log',
        handler: () => {
          console.log('No lo cerrare');
          return false;
        }
      }]
    };
  }

  cambioFecha( event ) {
    console.log('ionChange: ', event);
    console.log('Date: ', new Date(event.detail.value));
  }



}
