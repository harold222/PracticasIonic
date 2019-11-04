import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;
  superHeroes: Observable<any>;
  publisher = '';

  constructor( private data: DataService) { }

  ngOnInit() {
    this.segment.value = 'todos';
    this.superHeroes = this.data.getHeroes();
  }

  segmentChanged( event ) {
    const valor = event.detail.value;
    if(valor === 'todos') {
      this.publisher = '';
      return;
    }

    this.publisher = valor;
  }

}
