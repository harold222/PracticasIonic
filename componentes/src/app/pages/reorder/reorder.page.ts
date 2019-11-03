import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {

  personajes = [
    'aquaman', 'Superman', 'Batman', 'Flash', 'Mujer Maravilla'
  ];

  constructor() { }

  ngOnInit() {
  }

  reorder( event ) {
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMover);
    event.detail.complete(this.personajes);
  }

  onClick() {
    console.log(this.personajes);
  }

}
