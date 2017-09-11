import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SelectRole } from '../select-role/select-role';
import { PickACard } from '../pick-a-card/pick-a-card';
import { The4FoldPath } from '../the-4-fold-path/the-4-fold-path';
import { HowToUse } from '../how-to-use/how-to-use';
import { BuyMoreQuestions } from '../buy-more-questions/buy-more-questions';
import { RestorePurchase } from '../restore-purchase/restore-purchase';
import { Interaktion } from '../interaktion/interaktion';
import { Contact } from '../contact/contact';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //pushPage: any;
  pages: Array<{title:string, component:any}>;
  constructor(public navCtrl: NavController) {
  //this.pushPage = SelectRole;

  this.pages = [
    {title: 'Select a Role', component: SelectRole},
    {title: 'Pick a Card', component: PickACard},
    {title: 'The 4 Fold Path', component: The4FoldPath},
    {title: 'How to Use', component: HowToUse},
    {title: 'Buy more questions', component: BuyMoreQuestions},
    {title: 'Restore purchase', component: RestorePurchase},
    {title: 'Interaktion', component: Interaktion},
    {title: 'Contact', component: Contact}
  ];
}

openPage(event) {
  var buttonName = event.target.name;
  switch (buttonName) {
    case "select_role":
    this.navCtrl.setRoot(SelectRole);
    break;
    case "pick_a_card":
    this.navCtrl.setRoot(PickACard);
    break;
    case "the_4_fold_path":
    this.navCtrl.setRoot(The4FoldPath);
    break;
    case "how_to_use":
    this.navCtrl.setRoot(HowToUse);
    break;
    case "buy_more_questions":
    this.navCtrl.setRoot(BuyMoreQuestions);
    break;
    case "restore_purchase":
    this.navCtrl.setRoot(RestorePurchase);
    break;
    case "interaktion":
    this.navCtrl.setRoot(Interaktion);
    break;
    case "contact":
    this.navCtrl.setRoot(Contact);
    break;
  }
  }

  //this.navCtrl.setRoot(page.component);
}
