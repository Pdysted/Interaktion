import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { HowToUse } from '../how-to-use/how-to-use';
import { AboutTheRoles } from '../about-the-roles/about-the-roles';

import { EmailComposer } from '@ionic-native/email-composer';


@Component({
  selector: 'page-select-role',
  templateUrl: 'select-role.html'
})
export class SelectRole {

  constructor(public navCtrl: NavController, private emailComposer: EmailComposer) {

  }

  howToUsePressed () {
    this.navCtrl.setRoot(HowToUse);
  }

  noteToSelf() {
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        let email = {
          to: 'max@mustermann.de',
          cc: 'erika@mustermann.de',
          bcc: ['john@doe.com', 'jane@doe.com'],
          attachments: [
            'file://img/logo.png',
            'res://icon.png',
            'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
            'file://README.pdf'
          ],
          subject: 'Cordova Icons',
          body: 'How are you? Nice greetings from Leipzig',
          isHtml: true
        };
        //Now we know we can send
        this.emailComposer.open(email);
      }
     });
  }

  openAboutTheRoles() {
    this.navCtrl.setRoot(AboutTheRoles);
  }

  backPressed() {
    this.navCtrl.setRoot(HomePage);
  }

}
