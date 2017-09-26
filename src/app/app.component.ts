import { Component, ViewChild} from '@angular/core';
import { Platform, MenuController, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SelectRole } from '../pages/select-role/select-role';
import { PickACard } from '../pages/pick-a-card/pick-a-card';
import { The4FoldPath} from '../pages/the-4-fold-path/the-4-fold-path';
import { HowToUse } from '../pages/how-to-use/how-to-use';
import { BuyMoreQuestions } from '../pages/buy-more-questions/buy-more-questions';
import { RestorePurchase } from '../pages/restore-purchase/restore-purchase';
import { Interaktion } from '../pages/interaktion/interaktion';
import { Contact } from '../pages/contact/contact';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();
    this.pages = [
      {title: 'Home', component: HomePage},
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

  initializeApp() {
    this.splashScreen.show();
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

    openAb() {
      this.nav.setRoot(Contact);
  }
}
