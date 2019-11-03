import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progess-bar',
  templateUrl: './progess-bar.page.html',
  styleUrls: ['./progess-bar.page.scss'],
})
export class ProgessBarPage implements OnInit {

  porcentaje = 0.05;

  constructor() { }

  ngOnInit() {
  }

  rangeChange(event) {
    this.porcentaje = event.detail.value / 100;
  }
}
