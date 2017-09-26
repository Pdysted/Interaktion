import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';

import { HomePage } from '../home/home';
import { HowToUse } from '../how-to-use/how-to-use';

@Component({
  selector: 'page-pick-a-card',
  templateUrl: 'pick-a-card.html'
})
export class PickACard {
  cards: Array<{role: string, question:string}>;  
  constructor(public navCtrl: NavController, private http: Http, private platform: Platform) {
    //this.cards = [{role: 'be_present', question: 'What am I grateful for?'}];
    //You need to subscribe to the observable and pass a callback that processes emitted values
    //this.getIt().subscribe(val => console.log(val[0].role));
    this.cards = [];
    this.getIt().subscribe(val =>
      this.populateCards(val));
  }

  public getIt() {
        var url = '/assets/data/questions.json'; 
    
        if (this.platform.is('cordova') && this.platform.is('android')) {
            url = "/android_asset/www/" + url;
        }
    
        return this.http.get(url)
            .map((response) => {
              return response.json();
            });
    }

  public populateCards(val) {
    for (let i = 0; i < val.length; i++) {
    this.cards[i] = {role: val[i].role, question: val[i].question};
    }
  }  

  cardPressed(card) {
    console.log(card.role + "\n" + card.question);
  }

  howToUsePressed () {
    this.navCtrl.setRoot(HowToUse);
  }

  backPressed() {
    this.navCtrl.setRoot(HomePage);
  }
}
