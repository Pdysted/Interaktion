import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { HowToUse } from '../how-to-use/how-to-use';
import { AboutTheRoles } from '../about-the-roles/about-the-roles';

import { EmailComposer } from '@ionic-native/email-composer';
import { InAppPurchase } from '@ionic-native/in-app-purchase';


@Component({
  selector: 'page-buy-more-questions',
  templateUrl: 'buy-more-questions.html'
})
export class BuyMoreQuestions {

  constructor(public navCtrl: NavController, private emailComposer: EmailComposer, private iap: InAppPurchase) {

  }
  
  buy() {
    this.iap
    .buy('prod1')
    .then((data)=> {
      console.log(data);
      // {
      //   transactionId: ...
      //   receipt: ...
      //   signature: ...
      // }
    })
    .catch((err)=> {
      console.log(err);
    });
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

  openAboutTheRoles() {
    this.navCtrl.setRoot(AboutTheRoles);
  }

  howToUsePressed () {
    this.navCtrl.setRoot(HowToUse);
  }

  backPressed() {
    this.navCtrl.setRoot(HomePage);
  }

}
