import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  components: any;

  constructor( private menu:MenuController, private data: DataService ) { }
  
  ngOnInit() {
    this.components = this.data.getMenu();
  }

  toggleMenu() {
    this.menu.toggle();
  }

}
