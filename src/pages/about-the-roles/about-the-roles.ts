import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { HowToUse } from '../how-to-use/how-to-use';

import { BePresent } from './be-present/be-present';
import { CoCreate } from './co-create/co-create';
import { Engage } from './engage/engage';
import { HostOthers } from './host-others/host-others';

@Component({
  selector: 'page-about-the-roles',
  templateUrl: 'about-the-roles.html'
})
export class AboutTheRoles {

  constructor(public navCtrl: NavController) {

  }

  bePresentPressed() {
    this.navCtrl.setRoot(BePresent);    
  }

  coCreatePressed() {
    this.navCtrl.setRoot(CoCreate);    
  }

  engagePressed() {
    this.navCtrl.setRoot(Engage);    
  }

  hostOthersPressed() {
    this.navCtrl.setRoot(HostOthers);    
  }

  howToUsePressed () {
    this.navCtrl.setRoot(HowToUse);
  }

  backPressed() {
    this.navCtrl.setRoot(HomePage);
  }

}
