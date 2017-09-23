import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { HowToUse } from '../how-to-use/how-to-use';

@Component({
  selector: 'page-restore-purchase',
  templateUrl: 'restore-purchase.html'
})
export class RestorePurchase {

  constructor(public navCtrl: NavController) {

  }

  howToUsePressed () {
    this.navCtrl.setRoot(HowToUse);
  }

  backPressed() {
    this.navCtrl.setRoot(HomePage);
  }
}
