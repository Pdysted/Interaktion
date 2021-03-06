import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { HowToUse } from '../how-to-use/how-to-use';

import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [CallNumber]
})
export class Contact {

  constructor(public navCtrl: NavController, private emailComposer:EmailComposer, public callNumber: CallNumber, private iab: InAppBrowser, public toastCtrl: ToastController) {

  }

  howToUsePressed () {
    this.navCtrl.setRoot(HowToUse);
  }

  backPressed() {
    this.navCtrl.setRoot(HomePage);
  }

  emailInteraktion() {
    let email = {
      to: 'info@interaktion.dk',
      cc: '',
      bcc: [],
      attachments: [
      ],
      subject: 'Interaktion app',
      body: '',
      isHtml: true
    };
     this.emailComposer.open(email);
  }

  goToWebsite() {
    const browser = this.iab.create('https://interaktion.dk/');
  }

  dialNumber() {
  this.callNumber.callNumber("30248428", true)
  .then(() => console.log('Launched dialer!'))
  .catch(() => console.log('Error launching dialer'));
  }

}
