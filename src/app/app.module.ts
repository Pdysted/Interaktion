import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SelectRole } from '../pages/select-role/select-role';
import { PickACard }  from '../pages/pick-a-card/pick-a-card';
import { The4FoldPath } from '../pages/the-4-fold-path/the-4-fold-path';
import { HowToUse } from '../pages/how-to-use/how-to-use';
import { BuyMoreQuestions } from '../pages/buy-more-questions/buy-more-questions';
import { RestorePurchase } from '../pages/restore-purchase/restore-purchase';
import { Interaktion } from '../pages/interaktion/interaktion';
import { Contact } from '../pages/contact/contact';

import { AboutTheRoles } from '../pages/about-the-roles/about-the-roles';

import {HttpModule} from '@angular/http';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelectRole,
    PickACard,
    The4FoldPath,
    HowToUse,
    BuyMoreQuestions,
    RestorePurchase,
    Interaktion,
    Contact,
    AboutTheRoles
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SelectRole,
    PickACard,
    The4FoldPath,
    HowToUse,
    BuyMoreQuestions,
    RestorePurchase,
    Interaktion,
    Contact,
    AboutTheRoles
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
