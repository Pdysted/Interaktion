import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//two directories is back ../../
import { AboutTheRoles } from '../about-the-roles';
import { HowToUse } from '../../how-to-use/how-to-use';

@Component({
  selector: 'page-host-others',
  templateUrl: 'host-others.html'
})
export class HostOthers {

  constructor(public navCtrl: NavController) {

  }

  howToUsePressed () {
    this.navCtrl.setRoot(HowToUse);
  }

  backPressed() {
    this.navCtrl.setRoot(AboutTheRoles);
  }

}
