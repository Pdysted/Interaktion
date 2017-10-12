import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NavController, NavParams, Scroll } from 'ionic-angular';
import {Http} from '@angular/http';
//import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';

import { Card } from '../card/card';
import { HomePage } from '../home/home';
import { HowToUse } from '../how-to-use/how-to-use';
import { AboutTheRoles } from '../about-the-roles/about-the-roles';


@Component({
  selector: 'page-pick-a-card',
  templateUrl: 'pick-a-card.html'
})
export class PickACard {
  @ViewChild('scrollElement') scrollElement: Scroll;
  cards: Array<{role: string, question:string}>;  
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http/*, private platform: Platform*/) {
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
    
    var scrollLeft = this.scrollElement._scrollContent.nativeElement.scrollLeft;
    console.log(scrollLeft);
    var elements = this.scrollElement._scrollContent.nativeElement.children[0].children;
    console.log(this.scrollElement._scrollContent.nativeElement.children[0].children);
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      if ((scrollLeft + 116) <= (element.offsetLeft) && (element.offsetLeft) < (scrollLeft + 249)) {
          element.id = "center_card";
      }
      //console.log(elements[i]);
    }
  }



  ngAfterViewInit() {

  
  }
  
}
