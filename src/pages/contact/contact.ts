import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { HowToUse } from '../how-to-use/how-to-use';

import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';

import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [CallNumber]
})
export class Contact {

  constructor(public navCtrl: NavController, private emailComposer:EmailComposer, public callNumber: CallNumber, public toastCtrl: ToastController) {

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
        //'file://img/logo.png',
        //'res://icon.png',
        //'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
        //'file://README.pdf'
      ],
      subject: 'Interaktion app',
      body: '',
      isHtml: true
    };
     this.emailComposer.open(email);
  }

  dialNumber() {
  this.callNumber.callNumber("30248428", true)
  .then(() => console.log('Launched dialer!'))
  .catch(() => console.log('Error launching dialer'));
  }

}
