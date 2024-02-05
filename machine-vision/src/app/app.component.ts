import { Component, OnInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
      this.initialiseTensorFlow();
  }

  async initialiseTensorFlow() {

    await tf.ready();
    console.log('TensorFlow ready...');

  }

}
