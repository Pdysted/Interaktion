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
import { BePresent } from '../pages/about-the-roles/be-present/be-present';
import { CoCreate } from '../pages/about-the-roles/co-create/co-create';
import { Engage } from '../pages/about-the-roles/engage/engage';
import { HostOthers } from '../pages/about-the-roles/host-others/host-others';
import { Card } from '../pages/card/card';
import { SelectRoleCard } from '../pages/select-role/select-role-card/select-role-card';

import {HttpModule} from '@angular/http';
import { EmailComposer } from '@ionic-native/email-composer';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { InAppPurchase } from '@ionic-native/in-app-purchase';
import { Toast } from '@ionic-native/toast';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
    AboutTheRoles,
    BePresent,
    CoCreate,
    Engage,
    HostOthers,
    Card,
    SelectRoleCard 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
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
    AboutTheRoles,
    BePresent,
    CoCreate,
    Engage,
    HostOthers,
    Card,
    SelectRoleCard
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmailComposer,
    CallNumber,
    InAppBrowser,
    InAppPurchase,
    Toast,
    File,
    FilePath
  ]
})
export class AppModule {}
