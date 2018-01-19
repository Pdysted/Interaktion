import { Component, ViewChild, } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HowToUse } from '../../how-to-use/how-to-use';
import { AboutTheRoles } from '../../about-the-roles/about-the-roles';
import { SelectRole } from '../select-role';

import { EmailComposer } from '@ionic-native/email-composer';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-select-role-card',
  templateUrl: 'select-role-card.html'
})
export class SelectRoleCard {
  @ViewChild('cardContainer') cardContainer: any;
  selectedRole:any;
  selectedCard: any;
  imgUrl:string;
  role:string;
  cards: Array<{role: string, question:string}>; 
  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer:EmailComposer, private http: Http) {
    this.selectedRole = navParams.get('role');
    console.log(this.selectedRole);
    this.selectedCard = {question: ""};
    switch (this.selectedRole) {
      case "Be Present":
          this.imgUrl = "hostyourself";
          this.role = "be_present";
          break;
      case "Engage":
          this.imgUrl = "participate";
          this.role = "engage";          
          break;
      case "Host Others":
          this.imgUrl = "hostothers";
          this.role = "host_others";          
          break;
      case "Co-Create":
          this.imgUrl = "cocreate";
          this.role = "co-create";          
          break;     
    }
    this.cards = [];
    this.getCards().subscribe(val =>
        this.populateCards(val, this.selectedRole));
  }

getCards() {
    var url = 'assets/data/questions.json'; 
    //if (this.platform.is('cordova') && this.platform.is('android')) {
    //    url = "/android_asset/www/" + url;
    //}
    return this.http.get(url)
        .map((response) => {
          return response.json();
        });
}

public populateCards(val, selectedRole) {
    for (let i = 0; i < val.length; i++) {
    if (val[i].role === selectedRole) {
    this.cards.push({role: val[i].role, question: val[i].question});
    //console.log(val[i].role + "  " + val[i].question);
    }
    }
    this.shuffleCards();
}  


  /**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
public shuffleCards() {
    for (var i = this.cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temp;
    }
    if (this.cards.length > 0) {
    console.log(this.cards);
    this.selectedCard = this.cards[0];
    }
}

public nextCard() {
    //this.selectedCard = this.cards[1];
    console.log(this.cardContainer.nativeElement);
    this.cardContainer.nativeElement.className = "none";
    this.cardContainer.nativeElement.className = "spin";
    
}

noteToSelf() {   
     let email = {
      to: '',
      cc: '',
      bcc: [],
      attachments: [
        //'file://img/logo.png',
        //'res://icon.png',
        //'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
        //'file://README.pdf'
      ],
      subject: 'Interaktion - Note to self',
      body: '',
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
    this.navCtrl.setRoot(SelectRole);
  }

}
