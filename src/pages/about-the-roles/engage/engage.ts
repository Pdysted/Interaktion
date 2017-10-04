import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//two directories back is ../../
import { AboutTheRoles } from '../about-the-roles';
import { HowToUse } from '../../how-to-use/how-to-use';

@Component({
  selector: 'page-engage',
  templateUrl: 'engage.html'
})
export class Engage {

  constructor(public navCtrl: NavController) {

  }

  howToUsePressed () {
    this.navCtrl.setRoot(HowToUse);
  }

  backPressed() {
    this.navCtrl.setRoot(AboutTheRoles);
  }

}
