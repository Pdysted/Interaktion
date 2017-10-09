import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PickACard } from '../pick-a-card/pick-a-card';
import { HowToUse } from '../how-to-use/how-to-use';
import { AboutTheRoles } from '../about-the-roles/about-the-roles';

import { EmailComposer } from '@ionic-native/email-composer';


@Component({
  selector: 'page-card',
  templateUrl: 'card.html'
})
export class Card {
  selectedCard:any;
  imgUrl:string;
  role:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer:EmailComposer) {
    this.selectedCard = navParams.get('card');
    console.log("Card page");
    console.log(this.selectedCard.role + "\n" + this.selectedCard.question);

    //Set the border color of the card here too
    switch (this.selectedCard.role) {
      case "Be Present":
          this.imgUrl = "hostyourself";
          this.role = "be_present";
          //#4D3744 $dark-indigo
          break;
      case "Engage":
          this.imgUrl = "participate";
          this.role = "engage";          
          //$dark-green: #36684d;
          break;
      case "Host Others":
          this.imgUrl = "hostothers";
          this.role = "host_others";          
          //$light-blue: #6ab1af;
          break;
      case "Co-Create":
          this.imgUrl = "cocreate";
          this.role = "co-create";          
          //$blue-grey: #8a9d87;
          break;        
    }
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
    this.navCtrl.setRoot(PickACard);
  }

}
