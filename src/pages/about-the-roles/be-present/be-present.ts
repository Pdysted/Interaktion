import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//two directories is back ../../
import { AboutTheRoles } from '../about-the-roles';
import { HowToUse } from '../../how-to-use/how-to-use';

@Component({
  selector: 'page-be-present',
  templateUrl: 'be-present.html'
})
export class BePresent {

  constructor(public navCtrl: NavController) {

  }

  howToUsePressed () {
    this.navCtrl.setRoot(HowToUse);
  }

  backPressed() {
    this.navCtrl.setRoot(AboutTheRoles);
  }

}
