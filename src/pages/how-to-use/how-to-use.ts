import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AboutTheRoles } from '../about-the-roles/about-the-roles';
import { SelectRole } from '../select-role/select-role';
import { PickACard } from '../pick-a-card/pick-a-card';

import { EmailComposer } from '@ionic-native/email-composer';


@Component({
  selector: 'page-how-to-use',
  templateUrl: 'how-to-use.html'
})
export class HowToUse {

  constructor(public navCtrl: NavController, private emailComposer: EmailComposer) {

  }

  noteToSelf() {
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        let email = {
          to: 'max@mustermann.de',
          cc: '',
          bcc: ['john@doe.com', 'jane@doe.com'],
          attachments: [
            //'file://img/logo.png',
            //'res://icon.png',
            //'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
            //'file://README.pdf'
          ],
          subject: 'Test email emne',
          body: 'Test email brødtekst',
          isHtml: true
        };
        //Now we know we can send
        this.emailComposer.open(email);
      }
     });
     let email = {
      to: 'max@mustermann.de',
      cc: '',
      bcc: ['john@doe.com', 'jane@doe.com'],
      attachments: [
        //'file://img/logo.png',
        //'res://icon.png',
        //'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
        //'file://README.pdf'
      ],
      subject: 'Test email emne',
      body: 'Test email brødtekst',
      isHtml: true
    };
     this.emailComposer.open(email);
     
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
