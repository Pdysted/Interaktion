import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NavController, NavParams, Scroll } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import { Card } from '../card/card';
import { HomePage } from '../home/home';
import { HowToUse } from '../how-to-use/how-to-use';
import { AboutTheRoles } from '../about-the-roles/about-the-roles';

import { Toast } from '@ionic-native/toast';


@Component({
  selector: 'page-pick-a-card',
  templateUrl: 'pick-a-card.html'
})
export class PickACard {
  @ViewChild('scrollElement') scrollElement: Scroll;
  cards: Array<{role: string, question:string}>;  
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http/*, private platform: Platform*/, private toast: Toast) {
    //You need to subscribe to the observable and pass a callback that processes emitted values
    //this.getIt().subscribe(val => console.log(val[0].role));
    this.cards = [];
    this.getCards().subscribe(val =>
      this.populateCards(val));

  }



  public getCards() {
        var url = 'assets/data/questions.json'; 

        //if (this.platform.is('cordova') && this.platform.is('android')) {
        //    url = "/android_asset/www/" + url;
        //}
    
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
  console.log('done');
  this.toast.show('Cards have been shuffled', '5000', 'bottom').subscribe(
    toast => {
      console.log(toast);
    }
  );
}

  cardPressed(card) {
    console.log(card.role + "\n" + card.question);
    this.navCtrl.push(Card, {
      card: card
    }
    );
  }

  howToUsePressed () {
    this.navCtrl.setRoot(HowToUse);
  }

  openAboutTheRoles() {
    this.navCtrl.setRoot(AboutTheRoles);
  }

  backPressed() {
    //this.navCtrl.setRoot(HomePage);

    //320 should be replaced with device width 
    //Maybe change the centerEnd to half the card size 
    //To move it closer to the center when scaling it 
    var centerStart = 320 * 0.30;
    var centerEnd = 320 * 0.47;
    var scrollLeft = this.scrollElement._scrollContent.nativeElement.scrollLeft;
    console.log(scrollLeft);
    var elements = this.scrollElement._scrollContent.nativeElement.children[0].children;
    console.log(this.scrollElement._scrollContent.nativeElement.children[0].children);
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      if ((scrollLeft + centerStart) <= (element.offsetLeft) && (element.offsetLeft) < (scrollLeft + centerEnd)) {
          element.id = "center_card";
           console.log((scrollLeft + centerStart) + " <= " + element.offsetLeft);
           console.log(element.offsetLeft + " < " + (scrollLeft + centerEnd));
      }
      //console.log(elements[i]);
    }
  }



  ngAfterViewInit() {

  
  }
  
}
