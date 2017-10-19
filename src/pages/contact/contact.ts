import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { HowToUse } from '../how-to-use/how-to-use';

import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [CallNumber]
})
export class Contact {

  constructor(public navCtrl: NavController, private callNumber: CallNumber) {

  }

  howToUsePressed () {
    this.navCtrl.setRoot(HowToUse);
  }

  backPressed() {
    this.navCtrl.setRoot(HomePage);
  }

  dialNumber() {
  this.callNumber.callNumber("+45 30 24 84 28", true)
  .then(() => console.log('Launched dialer!'))
  .catch(() => console.log('Error launching dialer'));
  }

}
