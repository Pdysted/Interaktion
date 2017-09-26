import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Contact } from '../contact/contact';
import { HomePage } from '../home/home';
import { HowToUse } from '../how-to-use/how-to-use';

@Component({
  selector: 'page-interaktion',
  templateUrl: 'interaktion.html'
})
export class Interaktion {

  constructor(public navCtrl: NavController) {

  }

  contactPressed () {
    this.navCtrl.setRoot(Contact);
  }

  howToUsePressed () {
    this.navCtrl.setRoot(HowToUse);
  }

  backPressed() {
    this.navCtrl.setRoot(HomePage);
  }

}
