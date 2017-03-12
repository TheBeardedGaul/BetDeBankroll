import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html'
})
export class Accueil {

  static pageName: string = "Accueil";

  constructor(public navCtrl: NavController) {

  }

}
