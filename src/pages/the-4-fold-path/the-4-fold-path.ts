import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { HowToUse } from '../how-to-use/how-to-use';
import { AboutTheRoles } from '../about-the-roles/about-the-roles';


@Component({
  selector: 'page-the-4-fold-path',
  templateUrl: 'the-4-fold-path.html'
})
export class The4FoldPath {

  constructor(public navCtrl: NavController) {

  }

  howToUsePressed () {
    this.navCtrl.setRoot(HowToUse);
  }

  openAboutTheRoles() {
    this.navCtrl.setRoot(AboutTheRoles);
  }

  backPressed() {
    this.navCtrl.setRoot(HomePage);
  }

}
