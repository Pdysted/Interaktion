webpackJsonp([0],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return The4FoldPath; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_the_roles_about_the_roles__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var The4FoldPath = (function () {
    function The4FoldPath(navCtrl) {
        this.navCtrl = navCtrl;
    }
    The4FoldPath.prototype.howToUsePressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__["a" /* HowToUse */]);
    };
    The4FoldPath.prototype.openAboutTheRoles = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__about_the_roles_about_the_roles__["a" /* AboutTheRoles */]);
    };
    The4FoldPath.prototype.backPressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return The4FoldPath;
}());
The4FoldPath = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-the-4-fold-path',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/the-4-fold-path/the-4-fold-path.html"*/'<ion-header>\n  <ion-navbar>\n    <div id="header_container">\n    <img src="assets/logo.png">\n    <ion-title>The 4 Fold Practise</ion-title>\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n   </button>\n  </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-title text-center>The 4 fold path</ion-title>\n  <br>\n  The questions and structure is developed from a practice called The 4 Fold Path.<br>\n  A practice developed by Art of Hosting practioners, and is thought of as a way to teach people to change in intelligent ways.\n  <br><br>\n  <b>A Conscious Practice</b><br>\n  Being truly present, engaging skillfully in conversations, being a good host of conversations and enganging with others in co-creation are all skills that are easily understood, \n  but takes continuous practice to hone.\n  <br><br>\n  And that is the purpose of this app: To help you maintain a conscious practice and enchance your skills. \n  <br><br>\n  <b>Building Capacity</b><br>\n  As we learn to be truly present and engage in conversations that really matter, we become learners.\n  <br><br> \n  As learners many doors are open to us.\n  As we begin to host conversations and connect with others, we become a community of learners.\n  <br><br> \n  As a community we hold a bigger capacity than as individuals. In this way a community becomes \'a community that learns\', and here we enter collective intelligence.\n  <br><br>\n  We multiply our capacity and enter the field of emergence - the center of our true power.\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div id="footer_container">\n    <button (click)="howToUsePressed()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n    <button (click)="openAboutTheRoles()"><ion-icon name="contacts"><br><div class="footer_button_text">The Roles</div></ion-icon></button>\n    <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>\n  </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/the-4-fold-path/the-4-fold-path.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], The4FoldPath);

//# sourceMappingURL=the-4-fold-path.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyMoreQuestions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_the_roles_about_the_roles__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BuyMoreQuestions = (function () {
    function BuyMoreQuestions(navCtrl, emailComposer) {
        this.navCtrl = navCtrl;
        this.emailComposer = emailComposer;
    }
    BuyMoreQuestions.prototype.noteToSelf = function () {
        var _this = this;
        this.emailComposer.isAvailable().then(function (available) {
            if (available) {
                var email_1 = {
                    to: 'max@mustermann.de',
                    cc: '',
                    bcc: ['john@doe.com', 'jane@doe.com'],
                    attachments: [],
                    subject: 'Test email emne',
                    body: 'Test email brødtekst',
                    isHtml: true
                };
                //Now we know we can send
                _this.emailComposer.open(email_1);
            }
        });
        var email = {
            to: 'max@mustermann.de',
            cc: '',
            bcc: ['john@doe.com', 'jane@doe.com'],
            attachments: [],
            subject: 'Test email emne',
            body: 'Test email brødtekst',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    BuyMoreQuestions.prototype.openAboutTheRoles = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__about_the_roles_about_the_roles__["a" /* AboutTheRoles */]);
    };
    BuyMoreQuestions.prototype.howToUsePressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__["a" /* HowToUse */]);
    };
    BuyMoreQuestions.prototype.backPressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return BuyMoreQuestions;
}());
BuyMoreQuestions = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-buy-more-questions',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/buy-more-questions/buy-more-questions.html"*/'<ion-header>\n  <ion-navbar>\n    <div id="header_container">\n    <img src="assets/logo.png">\n    <ion-title>The 4 Fold Practise</ion-title>\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n   </button>\n  </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-title text-center>Buy More Questions</ion-title>\n<br>\nWe hope you enjoy The 4 Fold Practice and find the questions useful to reflect upon.\n<br><br>\nTo help you taking your practice even further, you can get more questions:\n<br><br>\n<div id="aligner">\n<div>Buy 5 questions more pr. role:</div>\n<button ion-button round class="purchase_button">20 Questions for 25 DKK</button>\n<br>\n<div>Buy 13 questions more pr. role:</div>\n<button ion-button round class="purchase_button">52 Questions for 49 DKK</button>\n</div>\n<br><br>  \nDonation\n<br>\n  To honor the founders and practioners that developed the The 4 Fold Path, a donation of 1 DKK will be given time you buy cards. \n  The donation will be granted to a project, person or fund within the work of Art of Hosting. \n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div id="footer_container">\n    <button (click)="howToUsePressed()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n    <button (click)="noteToSelf()"><ion-icon name="mail"><br><div class="footer_button_text">Note to self</div></ion-icon></button>\n    <button (click)="openAboutTheRoles()"><ion-icon name="contacts"><br><div class="footer_button_text">The Roles</div></ion-icon></button>\n    <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>\n  </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/buy-more-questions/buy-more-questions.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */]])
], BuyMoreQuestions);

//# sourceMappingURL=buy-more-questions.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestorePurchase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RestorePurchase = (function () {
    function RestorePurchase(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RestorePurchase.prototype.howToUsePressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__["a" /* HowToUse */]);
    };
    RestorePurchase.prototype.backPressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return RestorePurchase;
}());
RestorePurchase = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-restore-purchase',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/restore-purchase/restore-purchase.html"*/'<ion-header>\n  <ion-navbar>\n    <div id="header_container">\n    <img src="assets/logo.png">\n    <ion-title>The 4 Fold Practise</ion-title>\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n   </button>\n  </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-title text-center>Restore purchase</ion-title>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div id="footer_container">\n    <button (click)="howToUsePressed()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n    <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>    \n  </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/restore-purchase/restore-purchase.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], RestorePurchase);

//# sourceMappingURL=restore-purchase.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Interaktion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__how_to_use_how_to_use__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Interaktion = (function () {
    function Interaktion(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Interaktion.prototype.contactPressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* Contact */]);
    };
    Interaktion.prototype.howToUsePressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__how_to_use_how_to_use__["a" /* HowToUse */]);
    };
    Interaktion.prototype.backPressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    return Interaktion;
}());
Interaktion = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-interaktion',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/interaktion/interaktion.html"*/'<ion-header>\n  <ion-navbar>\n    <div id="header_container">\n    <img src="assets/logo.png">\n    <ion-title>The 4 Fold Practise</ion-title>\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n   </button>\n  </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n   <ion-title text-center>Interaktion</ion-title>\n   <br><br>\n   INTERAKTION is a consultancy and coaching company rooted in Denmark, \n   hence the Danish name which means interaction.\n   <br><br>\n   <div id="center_text">\n      We have one core skill: <br>\n      Building bridges between people, proces and strategy.\n  </div> \n  <br>\n  Our primary work is on organisational development, corporate communications and leadership development in Denmark as well as abroad.\n  <br><br>\n  We naturally see the opportunities and create coherency for both organisation and employees at strategical, \n  tactical and operational levels, especially working cross-functional and multi cultural.\n  <br>\n  <div id="aligner">\n  <button ion-button round id="contact_button" (click)="contactPressed()">Contact</button>\n</div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div id="footer_container">\n    <button (click)="howToUsePressed()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n    <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>    \n  </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/interaktion/interaktion.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], Interaktion);

//# sourceMappingURL=interaktion.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowToUse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_the_roles_about_the_roles__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_role_select_role__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pick_a_card_pick_a_card__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_email_composer__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HowToUse = (function () {
    function HowToUse(navCtrl, emailComposer) {
        this.navCtrl = navCtrl;
        this.emailComposer = emailComposer;
    }
    HowToUse.prototype.noteToSelf = function () {
        var _this = this;
        this.emailComposer.isAvailable().then(function (available) {
            if (available) {
                var email_1 = {
                    to: 'max@mustermann.de',
                    cc: '',
                    bcc: ['john@doe.com', 'jane@doe.com'],
                    attachments: [],
                    subject: 'Test email emne',
                    body: 'Test email brødtekst',
                    isHtml: true
                };
                //Now we know we can send
                _this.emailComposer.open(email_1);
            }
        });
        var email = {
            to: 'max@mustermann.de',
            cc: '',
            bcc: ['john@doe.com', 'jane@doe.com'],
            attachments: [],
            subject: 'Test email emne',
            body: 'Test email brødtekst',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    HowToUse.prototype.theRolesPressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__about_the_roles_about_the_roles__["a" /* AboutTheRoles */]);
    };
    HowToUse.prototype.selectRolePressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__select_role_select_role__["a" /* SelectRole */]);
    };
    HowToUse.prototype.pickACardPressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pick_a_card_pick_a_card__["a" /* PickACard */]);
    };
    HowToUse.prototype.backPressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return HowToUse;
}());
HowToUse = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-how-to-use',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/how-to-use/how-to-use.html"*/'<ion-header>\n  <ion-navbar>\n    <div id="header_container">\n    <img src="assets/logo.png">\n    <ion-title>The 4 Fold Practise</ion-title>\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n   </button>\n  </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-title text-center>How to Use</ion-title>\n  <br>\n  This app is made to help you uncover your true power to hold your ground\n  and not be afraid of change.\n  <br><br>\n  It is thought of as a conscious practise where you can explore\n  and reflect upon questions in four group or roles: Host Yourself,\n  Participate, Host Others, and Co-create.\n  <br><br>\n  <div id="roles_container">\n    <img id="hostyourself" class="role_image_small" src="assets/roles-small/hostyourself_small.png">\n    <img id="participate" class="role_image_small" src="assets/roles-small/participate_small.png">\n    <img id="hostothers" class="role_image_small" src="assets/roles-small/hostothers_small.png">\n    <img id="cocreate" class="role_image_small" src="assets/roles-small/cocreate_small.png">\n  </div>\n  <br><br>\n  You can explore one role at a time or you can choose a card to answer a question\n  you can hold right there, trusting the serendipity.\n  <br><br>\n  Please, explore, learn and enjoy!\n  <br><br>\n  <div id="button_container">\n  <button ion-button class="green_button" (click)="selectRolePressed()">Select a Role</button> \n  <button ion-button class="green_button" (click)="pickACardPressed()">Pick a Card</button>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div id="bitt">\n    <button><ion-icon class="active_footer" name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n    <button (click)="noteToSelf()"><ion-icon name="mail"><br><div class="footer_button_text">Note to self</div></ion-icon></button>\n    <button (click)="theRolesPressed()"><ion-icon name="contacts"><br><div class="footer_button_text">The Roles</div></ion-icon></button>\n    <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>\n  </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/how-to-use/how-to-use.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_email_composer__["a" /* EmailComposer */]])
], HowToUse);

//# sourceMappingURL=how-to-use.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutTheRoles; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__be_present_be_present__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__co_create_co_create__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__engage_engage__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__host_others_host_others__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AboutTheRoles = (function () {
    function AboutTheRoles(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutTheRoles.prototype.bePresentPressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__be_present_be_present__["a" /* BePresent */]);
    };
    AboutTheRoles.prototype.coCreatePressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__co_create_co_create__["a" /* CoCreate */]);
    };
    AboutTheRoles.prototype.engagePressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__engage_engage__["a" /* Engage */]);
    };
    AboutTheRoles.prototype.hostOthersPressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__host_others_host_others__["a" /* HostOthers */]);
    };
    AboutTheRoles.prototype.howToUsePressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__["a" /* HowToUse */]);
    };
    AboutTheRoles.prototype.backPressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return AboutTheRoles;
}());
AboutTheRoles = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about-the-roles',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/about-the-roles/about-the-roles.html"*/'<ion-header>\n    <ion-navbar>\n      <div id="header_container">\n      <img src="assets/logo.png">\n      <ion-title>The 4 Fold Practise</ion-title>\n      <button ion-button menuToggle>\n       <ion-icon name="menu"></ion-icon>\n     </button>\n    </div>\n    </ion-navbar>\n  </ion-header>\n \n <ion-content padding>\n      <ion-title text-center>About the Roles</ion-title>\n      <br><br>\n      <div id="role_container">\n        <div class="role_button" (click)="bePresentPressed()">\n          <img id="hostyourself" class="role_image_small" src="assets/roles-small/hostyourself_small.png">\n          <div><h6>BE PRESENT</h6>\n          Is about hosting yourself and presensing.</div>\n        </div>\n        <div class="role_button" (click)="engagePressed()">\n          <img id="participate" class="role_image_small" src="assets/roles-small/participate_small.png">\n          <div><h6>ENGAGE</h6>\n          Is about participation and practice conversation.</div>\n        </div>  \n        <div class="role_button" (click)="hostOthersPressed()">\n          <img id="hostothers" class="role_image_small" src="assets/roles-small/hostothers_small.png">\n          <div><h6>HOST OTHERS</h6>\n          Is about hosting conversations.</div>\n        </div>  \n        <div class="role_button" (click)="coCreatePressed()">\n          <img id="cocreate" class="role_image_small" src="assets/roles-small/cocreate_small.png">\n          <div><h6>CO-CREATE</h6>\n          Is about being a part of a community hosting itself.</div>\n        </div>      \n      </div>\n</ion-content>\n      \n      <ion-footer>\n        <ion-toolbar>\n          <div id="footer_container">\n          <button (click)="howToUsePressed()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n          <button><ion-icon name="mail"><br><div class="footer_button_text">Note to self</div></ion-icon></button>\n          <button><ion-icon class="active_footer" name="contacts"><br><div class="footer_button_text">The Roles</div></ion-icon></button>\n          <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>\n        </div>\n        </ion-toolbar>\n      </ion-footer>'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/about-the-roles/about-the-roles.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], AboutTheRoles);

//# sourceMappingURL=about-the-roles.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BePresent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_the_roles__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//two directories is back ../../


var BePresent = (function () {
    function BePresent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BePresent.prototype.howToUsePressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__["a" /* HowToUse */]);
    };
    BePresent.prototype.backPressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__about_the_roles__["a" /* AboutTheRoles */]);
    };
    return BePresent;
}());
BePresent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-be-present',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/about-the-roles/be-present/be-present.html"*/'<ion-header>\n    <ion-navbar>\n      <div id="header_container">\n      <img src="assets/logo.png">\n      <ion-title>The 4 Fold Practise</ion-title>\n      <button ion-button menuToggle>\n       <ion-icon name="menu"></ion-icon>\n     </button>\n    </div>\n    </ion-navbar>\n  </ion-header>\n \n <ion-content padding>\n      <ion-title text-center>About the Roles</ion-title>\n      <br><br>\n        <div class="role_button">\n          <img id="hostyourself" class="role_image_small" src="assets/roles-small/hostyourself_small.png">\n          <div><h6>BE PRESENT</h6>\n          Is about hosting yourself and presensing.<br><br>\n          <ul class="role_bullet_list">\n              <li>Being present with yourself to practice and discipline being you</li>\n              <li>To allow you to go into difficult conversations in a ground way</li>\n              <li>To be a little more consciousness every day</li>\n              <br><br>\n              <li>How to lead yourself</li>\n              <li>How to host yourself and your balance</li>\n              <li>How to be balanced and carm - free of fear and hidden agendas</li>\n            </ul>\n        </div>\n        </div>\n        <!--This can be generalized to not use 4 different pages, but send a list as a data,\n        the breaklines might be an issue however-->\n        \n</ion-content>\n      \n      <ion-footer>\n        <ion-toolbar>\n          <div id="footer_container">\n          <button (click)="howToUsePressed()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n          <button><ion-icon name="mail"><br><div class="footer_button_text">Note to self</div></ion-icon></button>\n          <button><ion-icon class="active_footer" name="contacts"><br><div class="footer_button_text">The Roles</div></ion-icon></button>\n          <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>\n        </div>\n        </ion-toolbar>\n      </ion-footer>'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/about-the-roles/be-present/be-present.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], BePresent);

//# sourceMappingURL=be-present.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoCreate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_the_roles__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//two directories is back ../../


var CoCreate = (function () {
    function CoCreate(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CoCreate.prototype.howToUsePressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__["a" /* HowToUse */]);
    };
    CoCreate.prototype.backPressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__about_the_roles__["a" /* AboutTheRoles */]);
    };
    return CoCreate;
}());
CoCreate = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-co-create',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/about-the-roles/co-create/co-create.html"*/'<ion-header>\n    <ion-navbar>\n      <div id="header_container">\n      <img src="assets/logo.png">\n      <ion-title>The 4 Fold Practise</ion-title>\n      <button ion-button menuToggle>\n       <ion-icon name="menu"></ion-icon>\n     </button>\n    </div>\n    </ion-navbar>\n  </ion-header>\n \n <ion-content padding>\n      <ion-title text-center>About the Roles</ion-title>\n      <br><br>\n        <div class="role_button">\n          <img id="cocreate" class="role_image_small" src="assets/roles-small/cocreate_small.png">\n          <div><h6>Co-Create</h6>\n            Is about being part of a community hosting itself:<br><br>\n            <ul class="role_bullet_list"> \n                <li>To be a commnity of practise</li>\n                <li>To be in learning together</li>\n                <li>To continuously practice to build relationship and skill</li>\n                <br><br>\n                <li>How to host the whole</li>\n                <li>How to keep the overview, focus and attention on the whole</li>\n                <li>How to give space for all to learn something about themselves, each other, to learn and create the best solutions together and to keep both the hight and persistence until you have fullfilled the commen good</li>\n            </ul>\n          </div>\n        </div>\n</ion-content>\n      \n      <ion-footer>\n        <ion-toolbar>\n          <div id="footer_container">\n          <button (click)="howToUsePressed()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n          <button><ion-icon name="mail"><br><div class="footer_button_text">Note to self</div></ion-icon></button>\n          <button><ion-icon class="active_footer" name="contacts"><br><div class="footer_button_text">The Roles</div></ion-icon></button>\n          <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>\n        </div>\n        </ion-toolbar>\n      </ion-footer>'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/about-the-roles/co-create/co-create.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], CoCreate);

//# sourceMappingURL=co-create.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Engage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_the_roles__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//two directories back is ../../


var Engage = (function () {
    function Engage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Engage.prototype.howToUsePressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__["a" /* HowToUse */]);
    };
    Engage.prototype.backPressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__about_the_roles__["a" /* AboutTheRoles */]);
    };
    return Engage;
}());
Engage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-engage',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/about-the-roles/engage/engage.html"*/'<ion-header>\n    <ion-navbar>\n      <div id="header_container">\n      <img src="assets/logo.png">\n      <ion-title>The 4 Fold Practise</ion-title>\n      <button ion-button menuToggle>\n       <ion-icon name="menu"></ion-icon>\n     </button>\n    </div>\n    </ion-navbar>\n  </ion-header>\n \n <ion-content padding>\n      <ion-title text-center>About the Roles</ion-title>\n      <br><br>\n        <div class="role_button">\n          <img id="participate" class="role_image_small" src="assets/roles-small/participate_small.png">\n          <div><h6>Engage</h6>\n          Is about being hosted and practice conversation:<br><br>\n          <ul class="role_bullet_list">  \n              <li>To participate as a student, as a listener</li>\n              <li>To be the ever-curious little child inside</li>\n              <li>To be open</li> \n              <br><br>\n              <li>How to host yourself and give room for others to host you</li>\n              <li>How to participate and contribute - being open, curiuos and listening</li>\n            </ul>\n        </div>\n        </div>\n        \n</ion-content>\n      \n      <ion-footer>\n        <ion-toolbar>\n          <div id="footer_container">\n          <button (click)="howToUsePressed()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n          <button><ion-icon name="mail"><br><div class="footer_button_text">Note to self</div></ion-icon></button>\n          <button><ion-icon class="active_footer" name="contacts"><br><div class="footer_button_text">The Roles</div></ion-icon></button>\n          <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>\n        </div>\n        </ion-toolbar>\n      </ion-footer>'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/about-the-roles/engage/engage.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], Engage);

//# sourceMappingURL=engage.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostOthers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_the_roles__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//two directories is back ../../


var HostOthers = (function () {
    function HostOthers(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HostOthers.prototype.howToUsePressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__["a" /* HowToUse */]);
    };
    HostOthers.prototype.backPressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__about_the_roles__["a" /* AboutTheRoles */]);
    };
    return HostOthers;
}());
HostOthers = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-host-others',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/about-the-roles/host-others/host-others.html"*/'<ion-header>\n    <ion-navbar>\n      <div id="header_container">\n      <img src="assets/logo.png">\n      <ion-title>The 4 Fold Practise</ion-title>\n      <button ion-button menuToggle>\n       <ion-icon name="menu"></ion-icon>\n     </button>\n    </div>\n    </ion-navbar>\n  </ion-header>\n \n <ion-content padding>\n      <ion-title text-center>About the Roles</ion-title>\n      <br><br>\n        <div class="role_button">\n          <img id="hostothers" class="role_image_small" src="assets/roles-small/hostothers_small.png">\n          <div><h6>Host others</h6>\n          Is about hosting conversations:<br><br>\n          <ul class="role_bullet_list">\n            <li>Calling and inviting</li>\n            <li>Bringing others in</li>\n            <li>Designing</li>\n            <li>Harvesting</li>\n            <br><br>\n            <li>How to be host for others</li>\n            <li>How to host others</li>\n            <li>How to help others to have good, constructive and fulfilling converations and doing a good job that works long term</li>\n          </ul>\n        </div>\n        </div>\n</ion-content>\n      \n      <ion-footer>\n        <ion-toolbar>\n          <div id="footer_container">\n          <button (click)="howToUsePressed()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n          <button><ion-icon name="mail"><br><div class="footer_button_text">Note to self</div></ion-icon></button>\n          <button><ion-icon class="active_footer" name="contacts"><br><div class="footer_button_text">The Roles</div></ion-icon></button>\n          <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>\n        </div>\n        </ion-toolbar>\n      </ion-footer>'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/about-the-roles/host-others/host-others.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HostOthers);

//# sourceMappingURL=host-others.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pick_a_card_pick_a_card__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_the_roles_about_the_roles__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Card = (function () {
    function Card(navCtrl, navParams, emailComposer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
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
    Card.prototype.noteToSelf = function () {
        var _this = this;
        this.emailComposer.isAvailable().then(function (available) {
            if (available) {
                var email_1 = {
                    to: 'max@mustermann.de',
                    cc: '',
                    bcc: ['john@doe.com', 'jane@doe.com'],
                    attachments: [],
                    subject: 'Test email emne',
                    body: 'Test email brødtekst',
                    isHtml: true
                };
                //Now we know we can send
                _this.emailComposer.open(email_1);
            }
        });
        var email = {
            to: 'max@mustermann.de',
            cc: '',
            bcc: ['john@doe.com', 'jane@doe.com'],
            attachments: [],
            subject: 'Test email emne',
            body: 'Test email brødtekst',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    Card.prototype.openAboutTheRoles = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__about_the_roles_about_the_roles__["a" /* AboutTheRoles */]);
    };
    Card.prototype.howToUsePressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__["a" /* HowToUse */]);
    };
    Card.prototype.backPressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pick_a_card_pick_a_card__["a" /* PickACard */]);
    };
    return Card;
}());
Card = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-card',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/card/card.html"*/'<ion-header>\n    <ion-navbar>\n      <div id="header_container">\n      <img src="assets/logo.png">\n      <ion-title>The 4 Fold Practise</ion-title>\n      <button ion-button menuToggle>\n       <ion-icon name="menu"></ion-icon>\n     </button>\n    </div>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n  <ion-title text-center>{{selectedCard.role}}</ion-title>\n  <br><br>\n  <div id="card_container">\n  <div id="{{role}}">\n      <img class="card-image" src="assets/roles/{{imgUrl}}.png">\n      <div class="card-title">{{selectedCard.question}}</div>\n      </div>\n  </div>\n</ion-content>\n  \n  <ion-footer>\n    <ion-toolbar>\n      <div id="footer_container">\n      <button (click)="howToUsePressed()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n      <button (click)="noteToSelf()"><ion-icon name="mail"><br><div class="footer_button_text">Note to self</div></ion-icon></button>\n      <button (click)="openAboutTheRoles()"><ion-icon name="contacts"><br><div class="footer_button_text">The Roles</div></ion-icon></button>\n      <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>\n    </div>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/card/card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */]])
], Card);

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_role_select_role__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pick_a_card_pick_a_card__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__the_4_fold_path_the_4_fold_path__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__how_to_use_how_to_use__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__buy_more_questions_buy_more_questions__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__restore_purchase_restore_purchase__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__interaktion_interaktion__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_the_roles_about_the_roles__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HomePage = (function () {
    function HomePage(navCtrl) {
        //this.pushPage = SelectRole;
        this.navCtrl = navCtrl;
        this.pages = [
            { title: 'Select a Role', component: __WEBPACK_IMPORTED_MODULE_2__select_role_select_role__["a" /* SelectRole */] },
            { title: 'Pick a Card', component: __WEBPACK_IMPORTED_MODULE_3__pick_a_card_pick_a_card__["a" /* PickACard */] },
            { title: 'The 4 Fold Path', component: __WEBPACK_IMPORTED_MODULE_4__the_4_fold_path_the_4_fold_path__["a" /* The4FoldPath */] },
            { title: 'How to Use', component: __WEBPACK_IMPORTED_MODULE_5__how_to_use_how_to_use__["a" /* HowToUse */] },
            { title: 'Buy more questions', component: __WEBPACK_IMPORTED_MODULE_6__buy_more_questions_buy_more_questions__["a" /* BuyMoreQuestions */] },
            { title: 'Restore purchase', component: __WEBPACK_IMPORTED_MODULE_7__restore_purchase_restore_purchase__["a" /* RestorePurchase */] },
            { title: 'Interaktion', component: __WEBPACK_IMPORTED_MODULE_8__interaktion_interaktion__["a" /* Interaktion */] },
            { title: 'Contact', component: __WEBPACK_IMPORTED_MODULE_9__contact_contact__["a" /* Contact */] }
        ];
    }
    /*openPage(event) {
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
    }*/
    //Temporary solution to the navigation issue, should be replaced with a controller
    //Instead of this mess of redundancy, for shame  this.navCtrl.setRoot(page.component);
    //An advantage to this could be the reusability in the footer menu, I guess
    HomePage.prototype.openSelectRole = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__select_role_select_role__["a" /* SelectRole */]);
    };
    HomePage.prototype.openPickACard = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pick_a_card_pick_a_card__["a" /* PickACard */]);
    };
    HomePage.prototype.openThe4FoldPath = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__the_4_fold_path_the_4_fold_path__["a" /* The4FoldPath */]);
    };
    HomePage.prototype.openHowToUse = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__how_to_use_how_to_use__["a" /* HowToUse */]);
    };
    HomePage.prototype.openBuyMoreQuestions = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__buy_more_questions_buy_more_questions__["a" /* BuyMoreQuestions */]);
    };
    HomePage.prototype.openRestorePurchase = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__restore_purchase_restore_purchase__["a" /* RestorePurchase */]);
    };
    HomePage.prototype.openInteraktion = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__interaktion_interaktion__["a" /* Interaktion */]);
    };
    HomePage.prototype.openContact = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__contact_contact__["a" /* Contact */]);
    };
    HomePage.prototype.openAboutTheRoles = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__about_the_roles_about_the_roles__["a" /* AboutTheRoles */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <div id="header_container">\n    <img src="assets/logo.png">\n    <ion-title>The 4 Fold Practise</ion-title>\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n   </button>\n  </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="aligner">\n    <!--Works if it\'s to open a "new" page and keep the first as parent/root-->\n    <!--<li><button ion-button round class="menu_button" [navPush]="pushPage">Select a Role</button></li>-->\n    <!--individual methods to change each page? Is it really nescessary? 3 methods of entry points, menu burger\n    menu side and the footer bar? Seems awfully redundant.-->\n    <div></div>\n    <ion-list id="list" >\n      <li><button ion-button class="menu_button_green" name="select_role" (click)="openSelectRole()">Select a Role</button></li>\n      <li><button ion-button class="menu_button_green" name="pick_a_card" (click)="openPickACard()">Pick a Card</button></li>\n      <br><br>\n      <li><button ion-button class="menu_button_blue" name="the_4_fold_path" (click)="openThe4FoldPath()">The 4 Fold Path</button></li>\n      <li><button ion-button class="menu_button_blue" name="how_to_use" (click)="openHowToUse()">How to Use</button></li>\n      <li><button ion-button class="menu_button_blue" name="buy_more_questions" (click)="openBuyMoreQuestions()">Buy more questions</button></li>\n      <li><button ion-button class="menu_button_blue" name="restore_purchase" (click)="openRestorePurchase()">Restore purchase</button></li>\n      <br>\n      <li><button ion-button class="menu_button_purple" name="interaktion" (click)="openInteraktion()">Interaktion</button></li>\n      <li><button ion-button class="menu_button_purple" name="contact" (click)="openContact()">Contact</button></li>\n    </ion-list>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div id="footer_container">\n    <button (click)="openHowToUse()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n    <button (click)="openAboutTheRoles()"><ion-icon name="contacts"><br><div class="footer_button_text">The Roles</div></ion-icon></button>\n  </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_select_role_select_role__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pick_a_card_pick_a_card__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_the_4_fold_path_the_4_fold_path__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_how_to_use_how_to_use__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_buy_more_questions_buy_more_questions__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_restore_purchase_restore_purchase__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_interaktion_interaktion__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_about_the_roles_about_the_roles__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_about_the_roles_be_present_be_present__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_about_the_roles_co_create_co_create__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_about_the_roles_engage_engage__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_about_the_roles_host_others_host_others__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_card_card__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_email_composer__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_select_role_select_role__["a" /* SelectRole */],
            __WEBPACK_IMPORTED_MODULE_8__pages_pick_a_card_pick_a_card__["a" /* PickACard */],
            __WEBPACK_IMPORTED_MODULE_9__pages_the_4_fold_path_the_4_fold_path__["a" /* The4FoldPath */],
            __WEBPACK_IMPORTED_MODULE_10__pages_how_to_use_how_to_use__["a" /* HowToUse */],
            __WEBPACK_IMPORTED_MODULE_11__pages_buy_more_questions_buy_more_questions__["a" /* BuyMoreQuestions */],
            __WEBPACK_IMPORTED_MODULE_12__pages_restore_purchase_restore_purchase__["a" /* RestorePurchase */],
            __WEBPACK_IMPORTED_MODULE_13__pages_interaktion_interaktion__["a" /* Interaktion */],
            __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__["a" /* Contact */],
            __WEBPACK_IMPORTED_MODULE_15__pages_about_the_roles_about_the_roles__["a" /* AboutTheRoles */],
            __WEBPACK_IMPORTED_MODULE_16__pages_about_the_roles_be_present_be_present__["a" /* BePresent */],
            __WEBPACK_IMPORTED_MODULE_17__pages_about_the_roles_co_create_co_create__["a" /* CoCreate */],
            __WEBPACK_IMPORTED_MODULE_18__pages_about_the_roles_engage_engage__["a" /* Engage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_about_the_roles_host_others_host_others__["a" /* HostOthers */],
            __WEBPACK_IMPORTED_MODULE_20__pages_card_card__["a" /* Card */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_select_role_select_role__["a" /* SelectRole */],
            __WEBPACK_IMPORTED_MODULE_8__pages_pick_a_card_pick_a_card__["a" /* PickACard */],
            __WEBPACK_IMPORTED_MODULE_9__pages_the_4_fold_path_the_4_fold_path__["a" /* The4FoldPath */],
            __WEBPACK_IMPORTED_MODULE_10__pages_how_to_use_how_to_use__["a" /* HowToUse */],
            __WEBPACK_IMPORTED_MODULE_11__pages_buy_more_questions_buy_more_questions__["a" /* BuyMoreQuestions */],
            __WEBPACK_IMPORTED_MODULE_12__pages_restore_purchase_restore_purchase__["a" /* RestorePurchase */],
            __WEBPACK_IMPORTED_MODULE_13__pages_interaktion_interaktion__["a" /* Interaktion */],
            __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__["a" /* Contact */],
            __WEBPACK_IMPORTED_MODULE_15__pages_about_the_roles_about_the_roles__["a" /* AboutTheRoles */],
            __WEBPACK_IMPORTED_MODULE_16__pages_about_the_roles_be_present_be_present__["a" /* BePresent */],
            __WEBPACK_IMPORTED_MODULE_17__pages_about_the_roles_co_create_co_create__["a" /* CoCreate */],
            __WEBPACK_IMPORTED_MODULE_18__pages_about_the_roles_engage_engage__["a" /* Engage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_about_the_roles_host_others_host_others__["a" /* HostOthers */],
            __WEBPACK_IMPORTED_MODULE_20__pages_card_card__["a" /* Card */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_email_composer__["a" /* EmailComposer */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_select_role_select_role__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pick_a_card_pick_a_card__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_the_4_fold_path_the_4_fold_path__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_how_to_use_how_to_use__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_buy_more_questions_buy_more_questions__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_restore_purchase_restore_purchase__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_interaktion_interaktion__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Select a Role', component: __WEBPACK_IMPORTED_MODULE_5__pages_select_role_select_role__["a" /* SelectRole */] },
            { title: 'Pick a Card', component: __WEBPACK_IMPORTED_MODULE_6__pages_pick_a_card_pick_a_card__["a" /* PickACard */] },
            { title: 'The 4 Fold Path', component: __WEBPACK_IMPORTED_MODULE_7__pages_the_4_fold_path_the_4_fold_path__["a" /* The4FoldPath */] },
            { title: 'How to Use', component: __WEBPACK_IMPORTED_MODULE_8__pages_how_to_use_how_to_use__["a" /* HowToUse */] },
            { title: 'Buy more questions', component: __WEBPACK_IMPORTED_MODULE_9__pages_buy_more_questions_buy_more_questions__["a" /* BuyMoreQuestions */] },
            { title: 'Restore purchase', component: __WEBPACK_IMPORTED_MODULE_10__pages_restore_purchase_restore_purchase__["a" /* RestorePurchase */] },
            { title: 'Interaktion', component: __WEBPACK_IMPORTED_MODULE_11__pages_interaktion_interaktion__["a" /* Interaktion */] },
            { title: 'Contact', component: __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* Contact */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.splashScreen.show();
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.openAb = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* Contact */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/app/app.html"*/'<ion-header>\n  <ion-navbar>\n    <div id="header_container">\n    <img src="assets/logo.png">\n    <ion-title>The 4 Fold Practise</ion-title>\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n   </button>\n  </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickACard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__card_card__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__how_to_use_how_to_use__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_the_roles_about_the_roles__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Platform } from 'ionic-angular';




var PickACard = (function () {
    function PickACard(navCtrl, navParams, http /*, private platform: Platform*/) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http; /*, private platform: Platform*/
        //You need to subscribe to the observable and pass a callback that processes emitted values
        //this.getIt().subscribe(val => console.log(val[0].role));
        this.cards = [];
        this.getCards().subscribe(function (val) {
            return _this.populateCards(val);
        });
    }
    PickACard.prototype.getCards = function () {
        var url = 'assets/data/questions.json';
        //if (this.platform.is('cordova') && this.platform.is('android')) {
        //    url = "/android_asset/www/" + url;
        //}
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PickACard.prototype.populateCards = function (val) {
        for (var i = 0; i < val.length; i++) {
            this.cards[i] = { role: val[i].role, question: val[i].question };
        }
    };
    /**
   * Randomize array element order in-place.
   * Using Durstenfeld shuffle algorithm.
   */
    PickACard.prototype.shuffleCards = function () {
        for (var i = this.cards.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
        console.log('done');
    };
    PickACard.prototype.cardPressed = function (card) {
        console.log(card.role + "\n" + card.question);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__card_card__["a" /* Card */], {
            card: card
        });
    };
    PickACard.prototype.howToUsePressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__how_to_use_how_to_use__["a" /* HowToUse */]);
    };
    PickACard.prototype.openAboutTheRoles = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__about_the_roles_about_the_roles__["a" /* AboutTheRoles */]);
    };
    PickACard.prototype.backPressed = function () {
        //this.navCtrl.setRoot(HomePage);
        var scrollLeft = this.scrollElement._scrollContent.nativeElement.scrollLeft;
        console.log(scrollLeft);
        var elements = this.scrollElement._scrollContent.nativeElement.children[0].children;
        console.log(this.scrollElement._scrollContent.nativeElement.children[0].children);
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            if ((scrollLeft + 116) <= (element.offsetLeft) && (element.offsetLeft) < (scrollLeft + 249)) {
                element.id = "center_card";
            }
            //console.log(elements[i]);
        }
    };
    PickACard.prototype.ngAfterViewInit = function () {
    };
    return PickACard;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('scrollElement'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Scroll */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Scroll */]) === "function" && _a || Object)
], PickACard.prototype, "scrollElement", void 0);
PickACard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pick-a-card',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/pick-a-card/pick-a-card.html"*/'<ion-header>\n  <ion-navbar>\n    <div id="header_container">\n    <img src="assets/logo.png">\n    <ion-title>The 4 Fold Practise</ion-title>\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n   </button>\n  </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="pick_a_card_style">\n  <div id="aligner">\n    <h3>Pick a card</h3>\n  </div>\n  <ion-scroll #scrollElement scrollX="true" (click)="backPressed()">\n  <div class="scroll-item" *ngFor="let card of cards" (click)="cardPressed(card)">\n  <div class="card-title">The 4 Fold Practice</div>\n  <img class="card-image" src="assets/bagside.jpeg">\n  </div>\n  </ion-scroll>\n  <div id="pointer"><div></div></div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div id="footer_container">\n    <button (click)="howToUsePressed()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n    <button (click)="shuffleCards()"><ion-icon name="shuffle"><br><div class="footer_button_text">Shuffle Cards</div></ion-icon></button>\n    <button (click)="openAboutTheRoles()"><ion-icon name="contacts"><br><div class="footer_button_text">The Roles</div></ion-icon></button>\n    <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>\n  </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/pick-a-card/pick-a-card.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] /*, private platform: Platform*/ !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] /*, private platform: Platform*/) === "function" && _d || Object])
], PickACard);

var _a, _b, _c, _d;
//# sourceMappingURL=pick-a-card.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectRole; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_the_roles_about_the_roles__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SelectRole = (function () {
    function SelectRole(navCtrl, emailComposer) {
        this.navCtrl = navCtrl;
        this.emailComposer = emailComposer;
    }
    SelectRole.prototype.howToUsePressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__["a" /* HowToUse */]);
    };
    SelectRole.prototype.noteToSelf = function () {
        var _this = this;
        this.emailComposer.isAvailable().then(function (available) {
            if (available) {
                var email_1 = {
                    to: 'max@mustermann.de',
                    cc: '',
                    bcc: ['john@doe.com', 'jane@doe.com'],
                    attachments: [],
                    subject: 'Test email emne',
                    body: 'Test email brødtekst',
                    isHtml: true
                };
                //Now we know we can send
                _this.emailComposer.open(email_1);
            }
        });
        var email = {
            to: 'max@mustermann.de',
            cc: '',
            bcc: ['john@doe.com', 'jane@doe.com'],
            attachments: [],
            subject: 'Test email emne',
            body: 'Test email brødtekst',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    SelectRole.prototype.openAboutTheRoles = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__about_the_roles_about_the_roles__["a" /* AboutTheRoles */]);
    };
    SelectRole.prototype.backPressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return SelectRole;
}());
SelectRole = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-select-role',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/select-role/select-role.html"*/'<ion-header>\n  <ion-navbar>\n    <div id="header_container">\n    <img src="assets/logo.png">\n    <ion-title>The 4 Fold Practise</ion-title>\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n   </button>\n  </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-title text-center>Select a role</ion-title>\n    <br><br>\n    <div id="container">\n      <div id="top_row">\n        <div>\n          <img id="upper_left_arrow" src="assets/arrow.png">\n        </div>\n          <div>\n          <div>Host Others</div>\n          <div class="image_padding">\n          <img class="role_image" src="assets/roles/hostothers.png">\n        </div>\n      </div>\n      <div>\n          <img id="upper_right_arrow" src="assets/arrow.png">\n        </div>\n      </div>\n      <div id ="middle_row">\n          <div class="middle_container">\n          <div>Co-Create</div>\n          <div id="left_role" class="image_padding">\n          <img class="role_image" src="assets/roles/cocreate.png">\n          </div>\n        </div>\n          <div class="middle_container">\n          <div>Engage</div>\n          <div id="right_role" class="image_padding">\n          <img class="role_image" src="assets/roles/participate.png">\n          </div>\n        </div>\n      </div>\n      <div id ="bottom_row">\n          <div>\n              <img id="lower_left_arrow" src="assets/arrow.png">\n            </div>\n          <div>\n          <div class="image_padding">\n          <img class="role_image" src="assets/roles/hostyourself.png">\n          </div>\n          <div>Be Present</div>\n      </div>\n      <div>\n          <img id="lower_right_arrow" src="assets/arrow.png">\n        </div>\n    </div>\n    </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div id="footer_container">\n    <button (click)="howToUsePressed()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n    <button (click)="noteToSelf()"><ion-icon name="mail"><br><div class="footer_button_text">Note to self</div></ion-icon></button>\n    <button (click)="openAboutTheRoles()"><ion-icon name="contacts"><br><div class="footer_button_text">The Roles</div></ion-icon></button>\n    <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>\n  </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/select-role/select-role.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */]])
], SelectRole);

//# sourceMappingURL=select-role.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Contact = (function () {
    function Contact(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Contact.prototype.howToUsePressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__["a" /* HowToUse */]);
    };
    Contact.prototype.backPressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return Contact;
}());
Contact = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <div id="header_container">\n    <img src="assets/logo.png">\n    <ion-title>The 4 Fold Practise</ion-title>\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n   </button>\n  </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-title text-center>Contact us</ion-title>\n  <br><br>\n  Are you curious on more or do you face challenges at work?\n  <br><br>\n  We are here to help you and your organization going from strategy to great and sustainable solutions with great results.\n  <br>\n  The way we do it, is through hosting conversations that matter for everyone.\n  <br><br>\n  Please do not hesitate to contact us. We look forward to hearing from you.\n  <br><br><br>\n  \n  <div id="contact_container">\n    <div>\n    Call us <br>\n    E-mail us <br>\n    Visit us\n  </div>\n    <div id="contact_info">\n      +45 30 24 84 28<br>\n      info@interaktion.dk<br>\n      www.interaktion.dk\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div id="footer_container">\n    <button (click)="howToUsePressed()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n    <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>    \n  </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], Contact);

//# sourceMappingURL=contact.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map