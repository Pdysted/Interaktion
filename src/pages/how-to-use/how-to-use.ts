import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AboutTheRoles } from '../about-the-roles/about-the-roles';
import { SelectRole } from '../select-role/select-role';
import { PickACard } from '../pick-a-card/pick-a-card';

@Component({
  selector: 'page-how-to-use',
  templateUrl: 'how-to-use.html'
})
export class HowToUse {

  constructor(public navCtrl: NavController) {

  }

  theRolesPressed() {
    this.navCtrl.setRoot(AboutTheRoles);
  }

  selectRolePressed() {
    this.navCtrl.setRoot(SelectRole);
  }

  pickACardPressed() {
    this.navCtrl.setRoot(PickACard);
  }

  backPressed() {
    this.navCtrl.setRoot(HomePage);
  }



}
