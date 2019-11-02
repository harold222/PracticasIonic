import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  components: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action sheet',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'appstore',
      name: 'Alert',
      redirecTo: '/alert'
    },
    {
      icon: 'beaker',
      name: 'Avatars',
      redirecTo: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'Button and router',
      redirecTo: '/botones'
    },
    {
      icon: 'card',
      name: 'Cards',
      redirecTo: '/tarjetas'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Check Box',
      redirecTo: '/checkbox'
    },
    {
      icon: 'calendar',
      name: 'Date time',
      redirecTo: '/datetime'
    },
    {
      icon: 'car',
      name: 'Fabs',
      redirecTo: '/fab'
    },
    {
      icon: 'grid',
      name: 'Grid row col',
      redirecTo: '/grid'
    },
    {
      icon: 'infinite',
      name: 'Infinite Scroll',
      redirecTo: '/infinite'
    },
    {
      icon: 'hammer',
      name: 'Input',
      redirecTo: '/input'
    },
    {
      icon: 'list',
      name: 'List',
      redirecTo: '/list'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}
