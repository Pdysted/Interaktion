webpackJsonp([0],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BePresent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_the_roles__ = __webpack_require__(14);
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
        selector: 'page-be-present',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/about-the-roles/be-present/be-present.html"*/'<ion-header>\n  <ion-navbar>\n    <div id="header_container">\n    <img src="assets/logo.png">\n    <ion-title>The 4 Fold Practice</ion-title>\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n   </button>\n  </div>\n  </ion-navbar>\n</ion-header>\n \n <ion-content padding>\n      <ion-title text-center>About the Roles</ion-title>\n      <br><br>\n        <div class="role_button">\n          <img id="hostyourself" class="role_image_small" src="assets/roles-small/hostyourself_small.png">\n          <div><h6>BE PRESENT</h6>\n          Is about hosting yourself and presensing.<br><br>\n          <ul class="role_bullet_list">\n              <li>Being present with yourself to practice and discipline being you</li>\n              <li>To allow you to go into difficult conversations in a ground way</li>\n              <li>To be a little more consciousness every day</li>\n              <br><br>\n              <li>How to lead yourself</li>\n              <li>How to host yourself and your balance</li>\n              <li>How to be balanced and carm - free of fear and hidden agendas</li>\n            </ul>\n        </div>\n        </div>\n        <!--This can be generalized to not use 4 different pages, but send a list as a data,\n        the breaklines might be an issue however-->\n        \n</ion-content>\n      \n      <ion-footer>\n        <ion-toolbar>\n          <div id="footer_container">\n          <button (click)="howToUsePressed()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n          <button><ion-icon name="mail"><br><div class="footer_button_text">Note to self</div></ion-icon></button>\n          <button><ion-icon class="active_footer" name="contacts"><br><div class="footer_button_text">The Roles</div></ion-icon></button>\n          <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>\n        </div>\n        </ion-toolbar>\n      </ion-footer>'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/about-the-roles/be-present/be-present.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], BePresent);

//# sourceMappingURL=be-present.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoCreate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_the_roles__ = __webpack_require__(14);
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
        selector: 'page-co-create',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/about-the-roles/co-create/co-create.html"*/'<ion-header>\n  <ion-navbar>\n    <div id="header_container">\n    <img src="assets/logo.png">\n    <ion-title>The 4 Fold Practice</ion-title>\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n   </button>\n  </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n      <ion-title text-center>About the Roles</ion-title>\n      <br><br>\n        <div class="role_button">\n          <img id="cocreate" class="role_image_small" src="assets/roles-small/cocreate_small.png">\n          <div><h6>Co-Create</h6>\n            Is about being part of a community hosting itself:<br><br>\n            <ul class="role_bullet_list"> \n                <li>To be a commnity of practise</li>\n                <li>To be in learning together</li>\n                <li>To continuously practice to build relationship and skill</li>\n                <br><br>\n                <li>How to host the whole</li>\n                <li>How to keep the overview, focus and attention on the whole</li>\n                <li>How to give space for all to learn something about themselves, each other, to learn and create the best solutions together and to keep both the hight and persistence until you have fullfilled the commen good</li>\n            </ul>\n          </div>\n        </div>\n</ion-content>\n      \n      <ion-footer>\n        <ion-toolbar>\n          <div id="footer_container">\n          <button (click)="howToUsePressed()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n          <button><ion-icon name="mail"><br><div class="footer_button_text">Note to self</div></ion-icon></button>\n          <button><ion-icon class="active_footer" name="contacts"><br><div class="footer_button_text">The Roles</div></ion-icon></button>\n          <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>\n        </div>\n        </ion-toolbar>\n      </ion-footer>'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/about-the-roles/co-create/co-create.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], CoCreate);

//# sourceMappingURL=co-create.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Engage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_the_roles__ = __webpack_require__(14);
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
        selector: 'page-engage',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/about-the-roles/engage/engage.html"*/'<ion-header>\n  <ion-navbar>\n    <div id="header_container">\n    <img src="assets/logo.png">\n    <ion-title>The 4 Fold Practice</ion-title>\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n   </button>\n  </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n      <ion-title text-center>About the Roles</ion-title>\n      <br><br>\n        <div class="role_button">\n          <img id="participate" class="role_image_small" src="assets/roles-small/participate_small.png">\n          <div><h6>Engage</h6>\n          Is about being hosted and practice conversation:<br><br>\n          <ul class="role_bullet_list">  \n              <li>To participate as a student, as a listener</li>\n              <li>To be the ever-curious little child inside</li>\n              <li>To be open</li> \n              <br><br>\n              <li>How to host yourself and give room for others to host you</li>\n              <li>How to participate and contribute - being open, curiuos and listening</li>\n            </ul>\n        </div>\n        </div>\n        \n</ion-content>\n      \n      <ion-footer>\n        <ion-toolbar>\n          <div id="footer_container">\n          <button (click)="howToUsePressed()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n          <button><ion-icon name="mail"><br><div class="footer_button_text">Note to self</div></ion-icon></button>\n          <button><ion-icon class="active_footer" name="contacts"><br><div class="footer_button_text">The Roles</div></ion-icon></button>\n          <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>\n        </div>\n        </ion-toolbar>\n      </ion-footer>'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/about-the-roles/engage/engage.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], Engage);

//# sourceMappingURL=engage.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostOthers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_the_roles__ = __webpack_require__(14);
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
        selector: 'page-host-others',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/about-the-roles/host-others/host-others.html"*/'<ion-header>\n  <ion-navbar>\n    <div id="header_container">\n    <img src="assets/logo.png">\n    <ion-title>The 4 Fold Practice</ion-title>\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n   </button>\n  </div>\n  </ion-navbar>\n</ion-header>\n\n <ion-content padding>\n      <ion-title text-center>About the Roles</ion-title>\n      <br><br>\n        <div class="role_button">\n          <img id="hostothers" class="role_image_small" src="assets/roles-small/hostothers_small.png">\n          <div><h6>Host others</h6>\n          Is about hosting conversations:<br><br>\n          <ul class="role_bullet_list">\n            <li>Calling and inviting</li>\n            <li>Bringing others in</li>\n            <li>Designing</li>\n            <li>Harvesting</li>\n            <br><br>\n            <li>How to be host for others</li>\n            <li>How to host others</li>\n            <li>How to help others to have good, constructive and fulfilling converations and doing a good job that works long term</li>\n          </ul>\n        </div>\n        </div>\n</ion-content>\n      \n      <ion-footer>\n        <ion-toolbar>\n          <div id="footer_container">\n          <button (click)="howToUsePressed()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n          <button><ion-icon name="mail"><br><div class="footer_button_text">Note to self</div></ion-icon></button>\n          <button><ion-icon class="active_footer" name="contacts"><br><div class="footer_button_text">The Roles</div></ion-icon></button>\n          <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>\n        </div>\n        </ion-toolbar>\n      </ion-footer>'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/about-the-roles/host-others/host-others.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HostOthers);

//# sourceMappingURL=host-others.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return The4FoldPath; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_the_roles_about_the_roles__ = __webpack_require__(14);
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
        selector: 'page-the-4-fold-path',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/the-4-fold-path/the-4-fold-path.html"*/'<ion-header>\n  <ion-navbar>\n    <div id="header_container">\n    <img src="assets/logo.png">\n    <ion-title>The 4 Fold Practice</ion-title>\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n   </button>\n  </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-title text-center>The 4 fold path</ion-title>\n  <br>\n  The questions and structure is developed from a practice called The 4 Fold Path. \n  A practice developed by Art of Hosting practioners, and is thought of as a way to teach people to change in intelligent ways.\n  <br><br>\n  <b>A Conscious Practice</b><br>\n  Being truly present, engaging skillfully in conversations, being a good host of conversations and enganging with others in co-creation are all skills that are easily understood, but takes continuous practice to hone.\n  <br><br>\n  And that is the purpose of this app: To help you maintain a conscious practice and enchance your skills. \n  <br><br>\n  <b>Building Capacity</b><br>\n  As we learn to be truly present and engage in conversations that really matter, we become learners.\n  <br><br>\n  As learners many doors are open to us.<br>\n  As we begin to host conversations and connect with others, we become a community of learners.\n  <br><br>\n  As a community we hold a bigger capacity than as individuals. In this way a community becomes \'a community that learns\', and here we enter collective intelligence.\n  <br><br>\n  We multiply our capacity and enter the field of emergence - the center of our true power.\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div id="footer_container">\n    <button (click)="howToUsePressed()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n    <button (click)="openAboutTheRoles()"><ion-icon name="contacts"><br><div class="footer_button_text">The Roles</div></ion-icon></button>\n    <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>\n  </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/the-4-fold-path/the-4-fold-path.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], The4FoldPath);

//# sourceMappingURL=the-4-fold-path.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyMoreQuestions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_the_roles_about_the_roles__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_purchase__ = __webpack_require__(215);
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
    function BuyMoreQuestions(navCtrl, emailComposer, iap) {
        this.navCtrl = navCtrl;
        this.emailComposer = emailComposer;
        this.iap = iap;
    }
    BuyMoreQuestions.prototype.getProducts = function () {
        this.iap.getProducts(['prod1', 'prod2'])
            .then(function (products) {
            console.log(products);
            //  [{ productId: 'com.yourapp.prod1', 
            //'title': '...', 
            //description: '...', 
            //price: '...' }, ...]
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    BuyMoreQuestions.prototype.buyQuestions1 = function () {
        this.iap
            .buy('prod1')
            .then(function (data) {
            console.log(data);
            // {
            //   transactionId: ...
            //   receipt: ...
            //   signature: ...
            // }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
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
        selector: 'page-buy-more-questions',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/buy-more-questions/buy-more-questions.html"*/'<ion-header>\n  <ion-navbar>\n    <div id="header_container">\n    <img src="assets/logo.png">\n    <ion-title>The 4 Fold Practice</ion-title>\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n   </button>\n  </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-title text-center>Buy More Questions</ion-title>\n<br>\nWe hope you enjoy The 4 Fold Practice and find the questions useful to reflect upon.\n<br><br>\nTo help you taking your practice even further, you can get more questions:\n<br><br>\n<div id="aligner">\n<div>Buy 5 questions more pr. role:</div>\n<button ion-button round class="purchase_button">20 Questions for 25 DKK</button>\n<br>\n<div>Buy 13 questions more pr. role:</div>\n<button ion-button round class="purchase_button">52 Questions for 49 DKK</button>\n</div>\n<br><br>  \n<b>Donation</b>\n<br>\n  To honor the founders and practioners that developed the The 4 Fold Path, a donation of 1 DKK will be given time you buy cards. \n  The donation will be granted to a project, person or fund within the work of Art of Hosting. \n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div id="footer_container">\n    <button (click)="howToUsePressed()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n    <button (click)="noteToSelf()"><ion-icon name="mail"><br><div class="footer_button_text">Note to self</div></ion-icon></button>\n    <button (click)="openAboutTheRoles()"><ion-icon name="contacts"><br><div class="footer_button_text">The Roles</div></ion-icon></button>\n    <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>\n  </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/buy-more-questions/buy-more-questions.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_purchase__["a" /* InAppPurchase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_purchase__["a" /* InAppPurchase */]) === "function" && _c || Object])
], BuyMoreQuestions);

var _a, _b, _c;
//# sourceMappingURL=buy-more-questions.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestorePurchase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(18);
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
        selector: 'page-restore-purchase',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/restore-purchase/restore-purchase.html"*/'<ion-header>\n  <ion-navbar>\n    <div id="header_container">\n    <img src="assets/logo.png">\n    <ion-title>The 4 Fold Practice</ion-title>\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n   </button>\n  </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-title text-center>Restore purchase</ion-title>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div id="footer_container">\n    <button (click)="howToUsePressed()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n    <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>    \n  </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/restore-purchase/restore-purchase.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], RestorePurchase);

//# sourceMappingURL=restore-purchase.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Interaktion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(18);
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
        selector: 'page-interaktion',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/interaktion/interaktion.html"*/'<ion-header>\n  <ion-navbar>\n    <div id="header_container">\n    <img src="assets/logo.png">\n    <ion-title>The 4 Fold Practice</ion-title>\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n   </button>\n  </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <br>\n   <ion-title text-center>Interaktion</ion-title>\n   <br><br>\n   INTERAKTION is a consultancy and coaching company rooted in Denmark, \n   hence the Danish name which means interaction.\n   <br><br>\n   <div id="center_text">\n      <div>We have one core skill:</div>\n      <div>Building bridges between people,</div> \n      <div>proces and strategy.</div>\n  </div> \n  <br>\n  Our primary work is on organisational development, corporate communications and leadership development in Denmark as well as abroad.\n  <br><br>\n  We naturally see the opportunities and create coherency for both organisation and employees at strategical, \n  tactical and operational levels, especially working cross-functional and multi cultural.\n  <br><br>\n  <div id="aligner">\n  <button ion-button round id="contact_button" (click)="contactPressed()">Contact</button>\n</div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div id="footer_container">\n    <button (click)="howToUsePressed()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n    <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>    \n  </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/interaktion/interaktion.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], Interaktion);

//# sourceMappingURL=interaktion.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowToUse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_the_roles_about_the_roles__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_role_select_role__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pick_a_card_pick_a_card__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_the_roles_be_present_be_present__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_the_roles_co_create_co_create__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_the_roles_engage_engage__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_the_roles_host_others_host_others__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_email_composer__ = __webpack_require__(32);
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
                    to: 'info@interaktion.dk',
                    cc: '',
                    bcc: [],
                    attachments: [],
                    subject: 'How to Use - Interaktion App',
                    body: '',
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
    HowToUse.prototype.bePresentPressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__about_the_roles_be_present_be_present__["a" /* BePresent */]);
    };
    HowToUse.prototype.coCreatePressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__about_the_roles_co_create_co_create__["a" /* CoCreate */]);
    };
    HowToUse.prototype.engagePressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__about_the_roles_engage_engage__["a" /* Engage */]);
    };
    HowToUse.prototype.hostOthersPressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__about_the_roles_host_others_host_others__["a" /* HostOthers */]);
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
        selector: 'page-how-to-use',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/how-to-use/how-to-use.html"*/'<ion-header>\n  <ion-navbar>\n    <div id="header_container">\n    <img src="assets/logo.png">\n    <ion-title>The 4 Fold Practice</ion-title>\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n   </button>\n  </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-title text-center>How to Use</ion-title>\n  <br>\n  This app is made to help you uncover your true power to hold your ground\n  and not be afraid of change.\n  <br><br>\n  It is thought of as a conscious practise where you can explore\n  and reflect upon questions in four group or roles: Host Yourself,\n  Participate, Host Others, and Co-create.\n  <br><br>\n  <div id="roles_container">\n    <img id="hostyourself" class="role_image_small" (click)="bePresentPressed()" src="assets/roles-small/hostyourself_small.png">\n    <img id="participate" class="role_image_small" (click)="engagePressed()" src="assets/roles-small/participate_small.png">\n    <img id="hostothers" class="role_image_small" (click)="hostOthersPressed()" src="assets/roles-small/hostothers_small.png">\n    <img id="cocreate" class="role_image_small" (click)="coCreatePressed()" src="assets/roles-small/cocreate_small.png">\n  </div>\n  <br><br>\n  You can explore one role at a time or you can choose a card to answer a question\n  you can hold right there, trusting the serendipity.\n  <br><br>\n  Please, explore, learn and enjoy!\n  <br><br><br>\n  <div id="button_container">\n  <button ion-button class="green_button" (click)="selectRolePressed()">Select a Role</button> \n  <button ion-button class="green_button" (click)="pickACardPressed()">Pick a Card</button>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div id="bitt">\n    <button><ion-icon class="active_footer" name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n    <button (click)="noteToSelf()"><ion-icon name="mail"><br><div class="footer_button_text">Note to self</div></ion-icon></button>\n    <button (click)="theRolesPressed()"><ion-icon name="contacts"><br><div class="footer_button_text">The Roles</div></ion-icon></button>\n    <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>\n  </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/how-to-use/how-to-use.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_email_composer__["a" /* EmailComposer */]])
], HowToUse);

//# sourceMappingURL=how-to-use.js.map

/***/ }),

/***/ 123:
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
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutTheRoles; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__be_present_be_present__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__co_create_co_create__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__engage_engage__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__host_others_host_others__ = __webpack_require__(109);
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
        selector: 'page-about-the-roles',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/about-the-roles/about-the-roles.html"*/'<ion-header>\n  <ion-navbar>\n    <div id="header_container">\n    <img src="assets/logo.png">\n    <ion-title>The 4 Fold Practice</ion-title>\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n   </button>\n  </div>\n  </ion-navbar>\n</ion-header>\n \n <ion-content padding>\n      <ion-title text-center>About the Roles</ion-title>\n      <br><br>\n      <div id="role_container">\n        <div class="role_button" (click)="bePresentPressed()">\n          <img id="hostyourself" class="role_image_small" src="assets/roles-small/hostyourself_small.png">\n          <div><h6>BE PRESENT</h6>\n          Is about hosting yourself and presensing.</div>\n        </div>\n        <div class="role_button" (click)="engagePressed()">\n          <img id="participate" class="role_image_small" src="assets/roles-small/participate_small.png">\n          <div><h6>ENGAGE</h6>\n          Is about participation and practice conversation.</div>\n        </div>  \n        <div class="role_button" (click)="hostOthersPressed()">\n          <img id="hostothers" class="role_image_small" src="assets/roles-small/hostothers_small.png">\n          <div><h6>HOST OTHERS</h6>\n          Is about hosting conversations.</div>\n        </div>  \n        <div class="role_button" (click)="coCreatePressed()">\n          <img id="cocreate" class="role_image_small" src="assets/roles-small/cocreate_small.png">\n          <div><h6>CO-CREATE</h6>\n          Is about being a part of a community hosting itself.</div>\n        </div>      \n      </div>\n</ion-content>\n      \n      <ion-footer>\n        <ion-toolbar>\n          <div id="footer_container">\n          <button (click)="howToUsePressed()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n          <button><ion-icon name="mail"><br><div class="footer_button_text">Note to self</div></ion-icon></button>\n          <button><ion-icon class="active_footer" name="contacts"><br><div class="footer_button_text">The Roles</div></ion-icon></button>\n          <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>\n        </div>\n        </ion-toolbar>\n      </ion-footer>'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/about-the-roles/about-the-roles.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], AboutTheRoles);

//# sourceMappingURL=about-the-roles.js.map

/***/ }),

/***/ 165:
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
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_role_select_role__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pick_a_card_pick_a_card__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__the_4_fold_path_the_4_fold_path__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__how_to_use_how_to_use__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__buy_more_questions_buy_more_questions__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__restore_purchase_restore_purchase__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__interaktion_interaktion__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_the_roles_about_the_roles__ = __webpack_require__(14);
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
        selector: 'page-home',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <div id="header_container">\n    <img src="assets/logo.png">\n    <ion-title>The 4 Fold Practice</ion-title>\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n   </button>\n  </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="aligner">\n    <!--Works if it\'s to open a "new" page and keep the first as parent/root-->\n    <!--<li><button ion-button round class="menu_button" [navPush]="pushPage">Select a Role</button></li>-->\n    <!--individual methods to change each page? Is it really nescessary? 3 methods of entry points, menu burger\n    menu side and the footer bar? Seems awfully redundant.-->\n    <div></div>\n    <ion-list id="list" >\n      <li><button ion-button class="menu_button_green" name="select_role" (click)="openSelectRole()"><div class="center_button_text">Select a Role</div></button></li>\n      <li><button ion-button class="menu_button_green" name="pick_a_card" (click)="openPickACard()"><div class="center_button_text">Pick a Card</div></button></li>\n      <br><br>\n      <li><button ion-button class="menu_button_blue" name="the_4_fold_path" (click)="openThe4FoldPath()"><div class="center_button_text">The 4 Fold Path</div></button></li>\n      <li><button ion-button class="menu_button_blue" name="how_to_use" (click)="openHowToUse()"><div class="center_button_text">How to Use</div></button></li>\n      <li><button ion-button class="menu_button_blue" name="buy_more_questions" (click)="openBuyMoreQuestions()"><div class="center_button_text">Buy more questions</div></button></li>\n      <li><button ion-button class="menu_button_blue" name="restore_purchase" (click)="openRestorePurchase()"><div class="center_button_text">Restore purchase</div></button></li>\n      <br>\n      <li><button ion-button class="menu_button_purple" name="interaktion" (click)="openInteraktion()"><div class="center_button_text">Interaktion</div></button></li>\n      <li><button ion-button class="menu_button_purple" name="contact" (click)="openContact()"><div class="center_button_text">Contact</div></button></li>\n    </ion-list>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div id="footer_container">\n    <button (click)="openHowToUse()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n    <button (click)="openAboutTheRoles()"><ion-icon name="contacts"><br><div class="footer_button_text">The Roles</div></ion-icon></button>\n  </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectRoleCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__how_to_use_how_to_use__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_the_roles_about_the_roles__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_role__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SelectRoleCard = (function () {
    function SelectRoleCard(navCtrl, navParams, emailComposer, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
        this.http = http;
        this.selectedRole = navParams.get('role');
        console.log(this.selectedRole);
        this.selectedCard = { question: "" };
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
        this.getCards().subscribe(function (val) {
            return _this.populateCards(val, _this.selectedRole);
        });
    }
    SelectRoleCard.prototype.getCards = function () {
        var url = 'assets/data/questions.json';
        //if (this.platform.is('cordova') && this.platform.is('android')) {
        //    url = "/android_asset/www/" + url;
        //}
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    SelectRoleCard.prototype.populateCards = function (val, selectedRole) {
        for (var i = 0; i < val.length; i++) {
            if (val[i].role === selectedRole) {
                this.cards.push({ role: val[i].role, question: val[i].question });
                //console.log(val[i].role + "  " + val[i].question);
            }
        }
        this.shuffleCards();
    };
    /**
   * Randomize array element order in-place.
   * Using Durstenfeld shuffle algorithm.
   */
    SelectRoleCard.prototype.shuffleCards = function () {
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
    };
    SelectRoleCard.prototype.nextCard = function () {
        //this.selectedCard = this.cards[1];
        console.log(this.cardContainer.nativeElement);
        this.cardContainer.nativeElement.className = "none";
        this.cardContainer.nativeElement.className = "spin";
    };
    SelectRoleCard.prototype.noteToSelf = function () {
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
    SelectRoleCard.prototype.openAboutTheRoles = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__about_the_roles_about_the_roles__["a" /* AboutTheRoles */]);
    };
    SelectRoleCard.prototype.howToUsePressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__how_to_use_how_to_use__["a" /* HowToUse */]);
    };
    SelectRoleCard.prototype.backPressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__select_role__["a" /* SelectRole */]);
    };
    return SelectRoleCard;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('cardContainer'),
    __metadata("design:type", Object)
], SelectRoleCard.prototype, "cardContainer", void 0);
SelectRoleCard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-select-role-card',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/select-role/select-role-card/select-role-card.html"*/'<ion-header>\n    <ion-navbar>\n      <div id="header_container">\n      <img src="assets/logo.png">\n      <ion-title>The 4 Fold Practice</ion-title>\n      <button ion-button menuToggle>\n       <ion-icon name="menu"></ion-icon>\n     </button>\n    </div>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n    <br><br><br>\n    <ion-title text-center>{{selectedRole}}</ion-title>\n    <br><br>\n    <div #cardContainer id="card_container" class="none">\n        <div id="{{role}}">\n            <img class="card-image" src="assets/roles/{{imgUrl}}.png">\n            <div class="card-title">{{selectedCard.question}}</div>\n        </div>\n    </div>\n    <button class="button button-assertive" (click)="nextCard()">Spin</button>\n</ion-content>\n        \n<ion-footer>\n    <ion-toolbar>\n        <div id="footer_container">\n            <button (click)="howToUsePressed()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n            <button (click)="noteToSelf()"><ion-icon name="mail"><br><div class="footer_button_text">Note to self</div></ion-icon></button>\n            <button (click)="openAboutTheRoles()"><ion-icon name="contacts"><br><div class="footer_button_text">The Roles</div></ion-icon></button>\n            <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>\n        </div>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/select-role/select-role-card/select-role-card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */]])
], SelectRoleCard);

//# sourceMappingURL=select-role-card.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pick_a_card_pick_a_card__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_the_roles_about_the_roles__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__ = __webpack_require__(32);
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
        selector: 'page-card',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/card/card.html"*/'<ion-header>\n  <ion-navbar>\n    <div id="header_container">\n    <img src="assets/logo.png">\n    <ion-title>The 4 Fold Practice</ion-title>\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n   </button>\n  </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-title text-center>{{selectedCard.role}}</ion-title>\n  <br><br>\n  <div id="card_container">\n  <div id="{{role}}">\n      <img class="card-image" src="assets/roles/{{imgUrl}}.png">\n      <div class="card-title">{{selectedCard.question}}</div>\n      </div>\n  </div>\n</ion-content>\n  \n  <ion-footer>\n    <ion-toolbar>\n      <div id="footer_container">\n      <button (click)="howToUsePressed()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n      <button (click)="noteToSelf()"><ion-icon name="mail"><br><div class="footer_button_text">Note to self</div></ion-icon></button>\n      <button (click)="openAboutTheRoles()"><ion-icon name="contacts"><br><div class="footer_button_text">The Roles</div></ion-icon></button>\n      <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>\n    </div>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/card/card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */]])
], Card);

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_web_animations_js_web_animations_min__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_web_animations_js_web_animations_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_web_animations_js_web_animations_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(238);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_select_role_select_role__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pick_a_card_pick_a_card__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_the_4_fold_path_the_4_fold_path__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_how_to_use_how_to_use__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_buy_more_questions_buy_more_questions__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_restore_purchase_restore_purchase__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_interaktion_interaktion__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_about_the_roles_about_the_roles__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_about_the_roles_be_present_be_present__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_about_the_roles_co_create_co_create__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_about_the_roles_engage_engage__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_about_the_roles_host_others_host_others__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_card_card__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_select_role_select_role_card_select_role_card__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_email_composer__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_call_number__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_in_app_browser__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_in_app_purchase__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_toast__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_file__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_file_path__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_platform_browser_animations__ = __webpack_require__(287);
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
            __WEBPACK_IMPORTED_MODULE_20__pages_card_card__["a" /* Card */],
            __WEBPACK_IMPORTED_MODULE_21__pages_select_role_select_role_card_select_role_card__["a" /* SelectRoleCard */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_22__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_30__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
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
            __WEBPACK_IMPORTED_MODULE_20__pages_card_card__["a" /* Card */],
            __WEBPACK_IMPORTED_MODULE_21__pages_select_role_select_role_card_select_role_card__["a" /* SelectRoleCard */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_in_app_purchase__["a" /* InAppPurchase */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_28__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_29__ionic_native_file_path__["a" /* FilePath */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_select_role_select_role__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pick_a_card_pick_a_card__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_the_4_fold_path_the_4_fold_path__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_how_to_use_how_to_use__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_buy_more_questions_buy_more_questions__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_restore_purchase_restore_purchase__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_interaktion_interaktion__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__ = __webpack_require__(56);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/app/app.html"*/'\n\n<ion-menu [content]="content">\n\n  <ion-header>\n      <ion-navbar>\n          <div id="header_container">\n          <img src="assets/logo.png">\n          <ion-title>The 4 Fold Practice</ion-title>\n        </div>\n        </ion-navbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectRole; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_role_card_select_role_card__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__how_to_use_how_to_use__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_the_roles_about_the_roles__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_email_composer__ = __webpack_require__(32);
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
    SelectRole.prototype.rolePressed = function (role) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__select_role_card_select_role_card__["a" /* SelectRoleCard */], {
            role: role
        });
    };
    SelectRole.prototype.howToUsePressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__how_to_use_how_to_use__["a" /* HowToUse */]);
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__about_the_roles_about_the_roles__["a" /* AboutTheRoles */]);
    };
    SelectRole.prototype.backPressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return SelectRole;
}());
SelectRole = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-select-role',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/select-role/select-role.html"*/'<ion-header>\n  <ion-navbar>\n    <div id="header_container">\n    <img src="assets/logo.png">\n    <ion-title>The 4 Fold Practice</ion-title>\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n   </button>\n  </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-title text-center>Select a role</ion-title>\n    <br><br>\n    <div id="container">\n      <div id="top_row">\n        <div>\n          <img id="upper_left_arrow" src="assets/arrow.png">\n        </div>\n          <div (click)="rolePressed(\'Host Others\')" class="role_container" >\n            <div class="role_text">Host Others</div>\n            <div class="image_padding">\n              <img class="role_image" src="assets/roles/hostothers.png">\n            </div>\n          </div>\n      <div>\n          <img id="upper_right_arrow" src="assets/arrow.png">\n        </div>\n      </div>\n      <div id ="middle_row">\n          <div (click)="rolePressed(\'Co-Create\')" class="middle_container">\n          <div>Co-Create</div>\n          <div id="left_role" class="image_padding">\n          <img class="role_image" src="assets/roles/cocreate.png">\n          </div>\n        </div>\n          <div (click)="rolePressed(\'Engage\')" class="middle_container">\n          <div>Engage</div>\n          <div id="right_role" class="image_padding">\n          <img class="role_image" src="assets/roles/participate.png">\n          </div>\n        </div>\n      </div>\n      <div id="bottom_row">\n          <div>\n              <img id="lower_left_arrow" src="assets/arrow.png">\n            </div>\n          <div (click)="rolePressed(\'Be Present\')" class="role_container" >\n          <div class="image_padding">\n          <img class="role_image" src="assets/roles/hostyourself.png">\n          </div>\n          <div class="role_text">Be Present</div>\n      </div>\n      <div>\n          <img id="lower_right_arrow" src="assets/arrow.png">\n        </div>\n    </div>\n    </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div id="footer_container">\n    <button (click)="howToUsePressed()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n    <button (click)="noteToSelf()"><ion-icon name="mail"><br><div class="footer_button_text">Note to self</div></ion-icon></button>\n    <button (click)="openAboutTheRoles()"><ion-icon name="contacts"><br><div class="footer_button_text">The Roles</div></ion-icon></button>\n    <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>\n  </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/select-role/select-role.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_email_composer__["a" /* EmailComposer */]])
], SelectRole);

//# sourceMappingURL=select-role.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickACard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__card_card__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_the_roles_about_the_roles__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_toast__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_animations__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_path__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var PickACard = (function () {
    function PickACard(navCtrl, navParams, http, toast, file, filePath, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toast = toast;
        this.file = file;
        this.filePath = filePath;
        this.platform = platform;
        this.visibleState = 'visible';
        //You need to subscribe to the observable and pass a callback that processes emitted values
        //this.getIt().subscribe(val => console.log(val[0].role));
        this.cards = [];
        this.getCards().subscribe(function (val) { return _this.populateCards(val); });
        //this.getCards();
        this.cardsResponse = "";
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
        //this.checkFile();
        /*console.log(x);
        this.http.get(url)
        .map((response) => {
          return response.json();
        }).subscribe(response => this.cardsCallback(response, 1), err => console.log("file was not found"));
        this.http.get(url+"1")
        .map((response) => {
          return response.json();
        }).subscribe(response => this.cardsCallback(response, 2), err => console.log("file was not found"));
        this.http.get(url+"1")
        .map((response) => {
          return response.json();
        }).subscribe(response => this.cardsCallback(response, 3), err => this.populateCards(this.cardsResponse));*/
    };
    PickACard.prototype.checkFile = function () {
        var _this = this;
        this.file.checkFile('assets/data/', 'questions.json').then(function (val) { return _this.toast.show("True ", '5000', 'center').subscribe(function (toast) {
            console.log(toast);
        }); });
        /*this.file.resolveLocalFilesystemUrl('assets/data/questions.json').then(value =>
        this.toast.show("worked? : " , '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
          )).catch((val) => this.toast.show("error? " + this.file.tempDirectory, '5000', 'center').subscribe(
            toast => {
              console.log(toast);
            })
            );*/
        /*}).catch(err => this.toast.show("error? Not ready? " + err, '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          })
          );*/
    };
    PickACard.prototype.cardsCallback = function (response, call) {
        this.cardsResponse += response;
        console.log("Fo" + this.cardsResponse);
        if (call == 3) {
            this.populateCards(response);
        }
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
        this.toast.show('Cards have been shuffled', '5000', 'center').subscribe(function (toast) {
            console.log(toast);
        });
        this.visibleState = (this.visibleState == 'visible') ? 'invisible' : 'visible';
    };
    PickACard.prototype.cardPressed = function (card) {
        console.log(card.role + "\n" + card.question);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__card_card__["a" /* Card */], {
            card: card
        });
    };
    PickACard.prototype.howToUsePressed = function () {
        this.checkFile();
        //this.navCtrl.setRoot(HowToUse);
    };
    PickACard.prototype.openAboutTheRoles = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__about_the_roles_about_the_roles__["a" /* AboutTheRoles */]);
    };
    PickACard.prototype.backPressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        //320 should be replaced with device width 
        //Maybe change the centerEnd to half the card size 
        //To move it closer to the center when scaling it 
        /*var centerStart = 320 * 0.30;
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
        }*/
    };
    PickACard.prototype.ngAfterViewInit = function () {
    };
    return PickACard;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('scrollElement'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Scroll */])
], PickACard.prototype, "scrollElement", void 0);
PickACard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pick-a-card',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/pick-a-card/pick-a-card.html"*/'<ion-header>\n  <ion-navbar>\n    <div id="header_container">\n    <img src="assets/logo.png">\n    <ion-title>The 4 Fold Practice</ion-title>\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n   </button>\n  </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="pick_a_card_style">\n  <div id="aligner">\n    <h3>Pick a card</h3>\n  </div>\n  <ion-scroll scrollX="true">\n  <div class="scroll-item" *ngFor="let card of cards" (click)="cardPressed(card)">\n  <div class="card-title">The 4 Fold Practice</div>\n  <img class="card-image" src="assets/bagside.jpeg">\n  </div>\n  </ion-scroll>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div id="footer_container">\n    <button (click)="howToUsePressed()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n    <button (click)="shuffleCards()"><ion-icon name="shuffle"><br><div class="footer_button_text">Shuffle Cards</div></ion-icon></button>\n    <button (click)="openAboutTheRoles()"><ion-icon name="contacts"><br><div class="footer_button_text">The Roles</div></ion-icon></button>\n    <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>\n  </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/pick-a-card/pick-a-card.html"*/,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["h" /* trigger */])('myvisibility', [
                Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["e" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["f" /* style */])({
                    opacity: 1,
                })),
                Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["e" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["f" /* style */])({
                    class: 'none',
                    opacity: 1
                })),
                Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["g" /* transition */])('* => *', Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["c" /* animate */])('.5s'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
], PickACard);

//# sourceMappingURL=pick-a-card.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(217);
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
    function Contact(navCtrl, emailComposer, callNumber, iab, toastCtrl) {
        this.navCtrl = navCtrl;
        this.emailComposer = emailComposer;
        this.callNumber = callNumber;
        this.iab = iab;
        this.toastCtrl = toastCtrl;
    }
    Contact.prototype.howToUsePressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__how_to_use_how_to_use__["a" /* HowToUse */]);
    };
    Contact.prototype.backPressed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    Contact.prototype.emailInteraktion = function () {
        var email = {
            to: 'info@interaktion.dk',
            cc: '',
            bcc: [],
            attachments: [],
            subject: 'Interaktion app',
            body: '',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    Contact.prototype.goToWebsite = function () {
        var browser = this.iab.create('https://interaktion.dk/');
        browser.executeScript();
    };
    Contact.prototype.dialNumber = function () {
        this.callNumber.callNumber("30248428", true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    return Contact;
}());
Contact = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/home/philip/Desktop/Projects/Interaktion/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <div id="header_container">\n    <img src="assets/logo.png">\n    <ion-title>The 4 Fold Practice</ion-title>\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n   </button>\n  </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-title text-center>Contact us</ion-title>\n  <div>\n  <br><br>\n  Are you curious on more or do you face challenges at work?\n  <br><br>\n  We are here to help you and your organization going from strategy to great and sustainable solutions with great results.\n  <br>\n  The way we do it, is through hosting conversations that matter for everyone.\n  <br><br>\n  Please do not hesitate to contact us. We look forward to hearing from you.\n  <br><br><br><br>\n  </div>\n  \n  <div id="contact_container">\n    <div>\n    Call us <br><br>\n    E-mail us <br><br>\n    Visit us\n  </div>\n    <div id="contact_info">\n      <div (click)="dialNumber()">+45 30 24 84 28</div>\n      <br>\n      <div (click)="emailInteraktion()">info@interaktion.dk</div>\n      <br>\n      <a href="http://www.interaktion.dk">www.interaktion.dk</a>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div id="footer_container">\n    <button (click)="howToUsePressed()"><ion-icon name="information-circle"><br><div class="footer_button_text">How to use</div></ion-icon></button>\n    <button (click)="backPressed()"><ion-icon id="back_button_icon" name="share-alt"><br><div class="footer_button_text">Back</div></ion-icon></button>    \n  </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/philip/Desktop/Projects/Interaktion/src/pages/contact/contact.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _e || Object])
], Contact);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=contact.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.js.map