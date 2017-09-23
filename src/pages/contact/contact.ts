import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { HowToUse } from '../how-to-use/how-to-use';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class Contact {

  constructor(public navCtrl: NavController) {

  }

  howToUsePressed () {
    this.navCtrl.setRoot(HowToUse);
  }

  backPressed() {
    this.navCtrl.setRoot(HomePage);
  }

}
