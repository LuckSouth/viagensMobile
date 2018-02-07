webpackJsonp([28],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FotoServicoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FotoServicoProvider = (function () {
    function FotoServicoProvider(camera) {
        this.camera = camera;
    }
    FotoServicoProvider.prototype.getFoto = function (type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var options = {
                quality: 100,
                destinationType: _this.camera.DestinationType.DATA_URL,
                encodingType: _this.camera.EncodingType.JPEG,
                mediaType: _this.camera.MediaType.PICTURE,
                sourceType: type == "picture" ? _this.camera.PictureSourceType.CAMERA : _this.camera.PictureSourceType.SAVEDPHOTOALBUM,
                correctOrientation: true
            };
            _this.exibirImagem = true;
            console.log(Date());
            _this.camera.getPicture(options).then(function (imageData) {
                _this.ultimaFoto = 'data:image/jpeg;base64,' + imageData;
                resolve(_this.ultimaFoto);
            }, function (err) {
                reject(err);
            });
        });
    };
    return FotoServicoProvider;
}());
FotoServicoProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */]])
], FotoServicoProvider);

//# sourceMappingURL=foto-servico.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RotasAbastecimentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_foto_servico_foto_servico__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abastecimento_pagamento_abastecimento_pagamento__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abastecimento_odometro_abastecimento_odometro__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__abastecimento_bomba_1_abastecimento_bomba_1__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__abastecimento_bomba_2_abastecimento_bomba_2__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_storage_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_dados_dados__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RotasAbastecimentoPage = (function () {
    function RotasAbastecimentoPage(navCtrl, navParams, toastCtrl, foto, storageProvider, dados) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.foto = foto;
        this.storageProvider = storageProvider;
        this.dados = dados;
        this.contador = 1;
        this.fotoBomba1 = "asda";
        this.fotoBomba2 = "asda";
        this.fotoOdometro = "asdasd";
        this.abastecimento = "";
    }
    RotasAbastecimentoPage.prototype.salvar = function () {
        this.dados.abastecimento(this.abastecimentoPagamento.storageProvider.abastecimento.motorista, this.abastecimentoPagamento.storageProvider.abastecimento.tipoAbastecimento, this.abastecimentoPagamento.storageProvider.abastecimento.postoAbastecimento, this.abastecimentoPagamento.storageProvider.abastecimento.dataAbastecimento, this.abastecimentoPagamento.storageProvider.abastecimento.tipoPagmtAbastecimento, this.abastecimentoPagamento.storageProvider.abastecimento.odometro, this.abastecimentoPagamento.storageProvider.abastecimento.litrosBomb1, this.abastecimentoPagamento.storageProvider.abastecimento.precoBomb1, this.abastecimentoPagamento.storageProvider.abastecimento.litrosBomb2, this.abastecimentoPagamento.storageProvider.abastecimento.precoBomb2);
        console.log("salvar chamado");
    };
    RotasAbastecimentoPage.prototype.ngAfterViewInit = function () {
        this.slides.lockSwipes(true);
        if (this.contador == 1) {
            return this.abastecimentoPagamento.valida();
        }
        if (this.contador == 2) {
            return this.abastecimentoOdometro.valida();
        }
        if (this.contador == 3) {
            if (this.fotoOdometro != undefined) {
                return true;
            }
        }
        if (this.contador == 4) {
            return this.abastecimentoBomba1.valida();
        }
        if (this.contador == 5) {
            if (this.fotoBomba1 != undefined) {
                return true;
            }
        }
        if (this.contador == 6) {
            return this.abastecimentoBomba2.valida();
        }
        if (this.contador == 7) {
            if (this.fotoBomba2 != undefined) {
                return true;
            }
        }
    };
    RotasAbastecimentoPage.prototype.toBack = function () {
        this.slides.lockSwipes(false);
        this.contador -= 1;
        this.slides.slidePrev(400);
        if (this.contador == 0) {
            this.navCtrl.pop();
        }
        if (this.contador == 3 || this.contador == 5 || this.contador == 7) {
            this.cameraButton = true;
        }
        else {
            this.cameraButton = false;
        }
        this.slides.lockSwipes(true);
    };
    RotasAbastecimentoPage.prototype.toGo = function () {
        this.slides.lockSwipes(false);
        this.slides.slideTo(this.contador, 400);
        this.contador += 1;
        if (this.contador == 8) {
            this.salvar();
            // this.storageProvider.adicionarAbastecimento();
            var toast = this.toastCtrl.create({
                message: 'Abastecimento adicionada com sucesso',
                duration: 2000
            });
            toast.present();
            this.navCtrl.pop();
        }
        if (this.contador == 3 || this.contador == 5 || this.contador == 7) {
            this.cameraButton = true;
        }
        else {
            this.cameraButton = false;
        }
        this.slides.lockSwipes(true);
    };
    RotasAbastecimentoPage.prototype.mostrar = function () {
        var _this = this;
        this.foto.getFoto('picture')
            .then(function (responses) {
            if (_this.contador == 3) {
                _this.fotoOdometro = _this.foto.ultimaFoto;
                console.log(_this.fotoOdometro);
            }
            if (_this.contador == 5) {
                _this.fotoBomba1 = _this.foto.ultimaFoto;
                console.log(_this.fotoBomba1);
            }
            if (_this.contador == 7) {
                _this.fotoBomba2 = _this.foto.ultimaFoto;
                console.log(_this.fotoBomba2);
            }
        });
    };
    return RotasAbastecimentoPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
], RotasAbastecimentoPage.prototype, "slides", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__abastecimento_pagamento_abastecimento_pagamento__["a" /* AbastecimentoPagamentoPage */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__abastecimento_pagamento_abastecimento_pagamento__["a" /* AbastecimentoPagamentoPage */])
], RotasAbastecimentoPage.prototype, "abastecimentoPagamento", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__abastecimento_odometro_abastecimento_odometro__["a" /* AbastecimentoOdometroPage */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__abastecimento_odometro_abastecimento_odometro__["a" /* AbastecimentoOdometroPage */])
], RotasAbastecimentoPage.prototype, "abastecimentoOdometro", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__abastecimento_bomba_1_abastecimento_bomba_1__["a" /* AbastecimentoBomba1Page */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__abastecimento_bomba_1_abastecimento_bomba_1__["a" /* AbastecimentoBomba1Page */])
], RotasAbastecimentoPage.prototype, "abastecimentoBomba1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__abastecimento_bomba_2_abastecimento_bomba_2__["a" /* AbastecimentoBomba2Page */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__abastecimento_bomba_2_abastecimento_bomba_2__["a" /* AbastecimentoBomba2Page */])
], RotasAbastecimentoPage.prototype, "abastecimentoBomba2", void 0);
RotasAbastecimentoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-rotas-abastecimento',template:/*ion-inline-start:"/home/fernando/viagensMobile/src/pages/modulo-viagens/abastecimento/rotas-abastecimento/rotas-abastecimento.html"*/'<ion-content>\n\n    <div class="fixed-content">\n\n        <!-- Início de slides -->\n        <ion-slides>\n\n            <ion-slide>\n                <page-abastecimento-pagamento class="a"></page-abastecimento-pagamento>\n            </ion-slide>\n\n            <ion-slide>\n                <page-abastecimento-odometro></page-abastecimento-odometro>\n            </ion-slide>\n\n            <ion-slide>\n                <page-abastecimento-foto-odometro></page-abastecimento-foto-odometro>\n                <div class="img">\n                    <img class="image" src="{{fotoOdometro}}" />\n                </div>\n            </ion-slide>\n\n            <ion-slide>\n                <page-abastecimento-bomba-1></page-abastecimento-bomba-1>\n            </ion-slide>\n\n            <ion-slide>\n                <page-abastecimento-foto-bomba-1></page-abastecimento-foto-bomba-1>\n                <div class="img2">\n                    <img class="image" src="{{fotoBomba1}}" />\n                </div>\n            </ion-slide>\n\n            <ion-slide>\n                <page-abastecimento-bomba-2></page-abastecimento-bomba-2>\n            </ion-slide>\n\n            <ion-slide>\n                <page-abastecimento-foto-bomba-2></page-abastecimento-foto-bomba-2>\n                <div class="img3">\n                    <img class="image" src="{{fotoBomba2}}" /> \n                </div>\n            </ion-slide>\n        </ion-slides>\n        <!-- fim de slides -->\n\n\n        <!-- Botão passar -->\n        <ion-fab right bottom>\n            <button ion-fab color="tijuca" [disabled]="!ngAfterViewInit()" (click)="toGo()">\n                <ion-icon name="ios-arrow-forward"></ion-icon>\n            </button>\n        </ion-fab>\n\n        <!-- Botão câmera -->\n        <ion-fab>\n            <button *ngIf="cameraButton" class="button-camera" color = "tijuca" ion-button outline>\n                <ion-icon name="ios-camera" (click)="mostrar()"></ion-icon>\n            </button>\n        </ion-fab>\n\n        <!-- Botão voltar -->\n        <ion-fab left bottom>\n            <button ion-fab color="tijuca" (click)="toBack()">\n                <ion-icon color="warning" name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-fab>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/fernando/viagensMobile/src/pages/modulo-viagens/abastecimento/rotas-abastecimento/rotas-abastecimento.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_foto_servico_foto_servico__["a" /* FotoServicoProvider */],
        __WEBPACK_IMPORTED_MODULE_7__providers_storage_storage__["a" /* StorageProvider */],
        __WEBPACK_IMPORTED_MODULE_8__providers_dados_dados__["a" /* DadosProvider */]])
], RotasAbastecimentoPage);

//# sourceMappingURL=rotas-abastecimento.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbastecimentoPagamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AbastecimentoPagamentoPage = (function () {
    function AbastecimentoPagamentoPage(navCtrl, storageProvider) {
        this.navCtrl = navCtrl;
        this.storageProvider = storageProvider;
    }
    AbastecimentoPagamentoPage.prototype.valida = function () {
        if (this.storageProvider.abastecimento.tipoAbastecimento.length < 3 || this.storageProvider.abastecimento.postoAbastecimento == "" || this.storageProvider.abastecimento.dataAbastecimento == "" || this.storageProvider.abastecimento.tipoPagmtAbastecimento == "") {
            return false;
        }
        else {
            return true;
        }
    };
    return AbastecimentoPagamentoPage;
}());
AbastecimentoPagamentoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-abastecimento-pagamento',template:/*ion-inline-start:"/home/fernando/viagensMobile/src/pages/modulo-viagens/abastecimento/abastecimento-pagamento/abastecimento-pagamento.html"*/'<ion-header>\n  <ion-toolbar color="tijuca">\n    <ion-title padding>Pagamento</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-list>\n  <ion-item>\n    <ion-label>Tipo</ion-label>\n    <ion-select [(ngModel)]="storageProvider.abastecimento.tipoAbastecimento" (click)="valida()">\n      <ion-option value="externo">Externo</ion-option>\n      <ion-option value="int">Interno</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked><span class="input">Posto</span></ion-label>\n    <ion-input type="text" [(ngModel)]="storageProvider.abastecimento.postoAbastecimento" (ngModelChange)="valida()"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked><span class="input">Data</span></ion-label>\n    <ion-input type="date" [(ngModel)]="storageProvider.abastecimento.dataAbastecimento" (click)="valida()"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked><span class="input">Tipo de pagamento</span></ion-label>\n    <ion-select [(ngModel)]="storageProvider.abastecimento.tipoPagmtAbastecimento" (click)="valida()">\n      <ion-option value="Dinheiro">Dinheiro</ion-option>\n      <ion-option value="crédito">Crédito</ion-option>\n      <ion-option value="Débito"> Débito</ion-option>\n      <ion-option value="Cheque">Cheque</ion-option>\n    </ion-select>\n  </ion-item>\n\n\n</ion-list>'/*ion-inline-end:"/home/fernando/viagensMobile/src/pages/modulo-viagens/abastecimento/abastecimento-pagamento/abastecimento-pagamento.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */]])
], AbastecimentoPagamentoPage);

//# sourceMappingURL=abastecimento-pagamento.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbastecimentoOdometroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AbastecimentoOdometroPage = (function () {
    function AbastecimentoOdometroPage(navCtrl, storageProvider) {
        this.navCtrl = navCtrl;
        this.storageProvider = storageProvider;
    }
    AbastecimentoOdometroPage.prototype.valida = function () {
        if (this.storageProvider.abastecimento.odometro == "") {
            return false;
        }
        else {
            return true;
        }
    };
    return AbastecimentoOdometroPage;
}());
AbastecimentoOdometroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-abastecimento-odometro',template:/*ion-inline-start:"/home/fernando/viagensMobile/src/pages/modulo-viagens/abastecimento/abastecimento-odometro/abastecimento-odometro.html"*/'<ion-header>\n\n  <ion-toolbar color = "tijuca">\n    <ion-title padding>Ôdometro</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n <ion-item>\n    <ion-label stacked><span class="input">Km</span></ion-label>\n    <ion-input type="number" min="0" [(ngModel)]="storageProvider.abastecimento.odometro" (ngModelChange)="valida()"></ion-input>\n  </ion-item> '/*ion-inline-end:"/home/fernando/viagensMobile/src/pages/modulo-viagens/abastecimento/abastecimento-odometro/abastecimento-odometro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */]])
], AbastecimentoOdometroPage);

//# sourceMappingURL=abastecimento-odometro.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbastecimentoBomba1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AbastecimentoBomba1Page = (function () {
    function AbastecimentoBomba1Page(navCtrl, navParams, storageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storageProvider = storageProvider;
    }
    AbastecimentoBomba1Page.prototype.valida = function () {
        if (this.storageProvider.abastecimento.precoBomb1 == "" || this.storageProvider.abastecimento.litrosBomb1 == "") {
            return false;
        }
        else {
            return true;
        }
    };
    return AbastecimentoBomba1Page;
}());
AbastecimentoBomba1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-abastecimento-bomba-1',template:/*ion-inline-start:"/home/fernando/viagensMobile/src/pages/modulo-viagens/abastecimento/abastecimento-bomba-1/abastecimento-bomba-1.html"*/'<ion-header>\n    <ion-toolbar color = "tijuca">\n        <ion-title padding color = "tijuca">Bomba 1</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-item>\n    <ion-label stacked><span class="input">Litros</span></ion-label>\n    <ion-input type="number" [(ngModel)]="storageProvider.abastecimento.litrosBomb1" (ngModelChange)="valida()"></ion-input>\n</ion-item>\n<ion-item>\n    <ion-label stacked><span class="input">Preço/L</span></ion-label>\n    <ion-input type="number" min = "0"[(ngModel)]="storageProvider.abastecimento.precoBomb1" (ngModelChange)="valida()"></ion-input>\n</ion-item>'/*ion-inline-end:"/home/fernando/viagensMobile/src/pages/modulo-viagens/abastecimento/abastecimento-bomba-1/abastecimento-bomba-1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */]])
], AbastecimentoBomba1Page);

//# sourceMappingURL=abastecimento-bomba-1.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbastecimentoBomba2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AbastecimentoBomba2Page = (function () {
    function AbastecimentoBomba2Page(navCtrl, navParams, alertCtrl, viewCtrl, storageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.storageProvider = storageProvider;
    }
    AbastecimentoBomba2Page.prototype.valida = function () {
        if (this.storageProvider.abastecimento.litrosBomb2 == "" || this.storageProvider.abastecimento.precoBomb2 == "") {
            return false;
        }
        else {
            return true;
        }
    };
    return AbastecimentoBomba2Page;
}());
AbastecimentoBomba2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-abastecimento-bomba-2',template:/*ion-inline-start:"/home/fernando/viagensMobile/src/pages/modulo-viagens/abastecimento/abastecimento-bomba-2/abastecimento-bomba-2.html"*/'<ion-header>\n\n    <ion-toolbar color = "tijuca">\n        <ion-title padding>Bomba 2</ion-title>\n    </ion-toolbar>\n\n</ion-header>\n<ion-item>\n    <ion-label stacked><span class="input">Litros</span></ion-label>\n    <ion-input type="number" min="0" [(ngModel)]="storageProvider.abastecimento.litrosBomb2" (ngModelChange)="valida()"></ion-input>\n</ion-item>\n<ion-item>\n    <ion-label stacked><span class="input">Preço/L</span></ion-label>\n    <ion-input type="number" min="0" [(ngModel)]="storageProvider.abastecimento.precoBomb2" (ngModelChange)="valida()"></ion-input>\n</ion-item>'/*ion-inline-end:"/home/fernando/viagensMobile/src/pages/modulo-viagens/abastecimento/abastecimento-bomba-2/abastecimento-bomba-2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */]])
], AbastecimentoBomba2Page);

//# sourceMappingURL=abastecimento-bomba-2.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeralPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geral_dados_viagem_geral_dados_viagem__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geral_dados_motorista_geral_dados_motorista__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GeralPage = (function () {
    function GeralPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.geralDadosViagem = __WEBPACK_IMPORTED_MODULE_2__geral_dados_viagem_geral_dados_viagem__["a" /* GeralDadosViagemPage */];
        this.geralDadosMotorista = __WEBPACK_IMPORTED_MODULE_3__geral_dados_motorista_geral_dados_motorista__["a" /* GeralDadosMotoristaPage */];
    }
    return GeralPage;
}());
GeralPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'geral-page',template:/*ion-inline-start:"/home/fernando/viagensMobile/src/pages/modulo-viagens/geral/geral-page/geral-page.html"*/'<ion-header>\n  <ion-navbar color = "tijuca"> \n      <ion-title>\n        Dados Gerais \n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-tabs  color = "tijuca">\n    <ion-tab [root]="geralDadosViagem" tabTitle="Viagem" tabIcon="ios-compass"></ion-tab>\n    <ion-tab [root]="geralDadosMotorista" tabTitle="Motorista" tabIcon="ios-contact"></ion-tab>\n  </ion-tabs>\n\n</ion-content>'/*ion-inline-end:"/home/fernando/viagensMobile/src/pages/modulo-viagens/geral/geral-page/geral-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], GeralPage);

//# sourceMappingURL=geral-page.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeralDadosViagemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeralDadosViagemPage = (function () {
    function GeralDadosViagemPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return GeralDadosViagemPage;
}());
GeralDadosViagemPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'geral-dados-viagem',template:/*ion-inline-start:"/home/fernando/viagensMobile/src/pages/modulo-viagens/geral/geral-dados-viagem/geral-dados-viagem.html"*/'<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Veículo principal</ion-label>\n      <ion-input type="text" [(ngModel)]="vei" disabled="" value="AFG-3301"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>N. da Viagem</ion-label>\n      <ion-input type="number" [(ngModel)]="via" disabled="" value="1"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Km Saída</ion-label>\n      <ion-input type="text" [(ngModel)]="km" disabled="" value="12560 Km"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Data Saída</ion-label>\n      <ion-input type="date" [(ngModel)]="data" disabled="" value="0"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Observações</ion-label>\n      <ion-input type="text" [(ngModel)]="obs" disabled=""></ion-input>\n    </ion-item>\n\n    \n  </ion-list>\n  \n</ion-content>'/*ion-inline-end:"/home/fernando/viagensMobile/src/pages/modulo-viagens/geral/geral-dados-viagem/geral-dados-viagem.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], GeralDadosViagemPage);

//# sourceMappingURL=geral-dados-viagem.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeralDadosMotoristaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeralDadosMotoristaPage = (function () {
    function GeralDadosMotoristaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return GeralDadosMotoristaPage;
}());
GeralDadosMotoristaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'geral-dados-motorista',template:/*ion-inline-start:"/home/fernando/viagensMobile/src/pages/modulo-viagens/geral/geral-dados-motorista/geral-dados-motorista.html"*/'<ion-content padding>\n    <ion-list>\n\n  <ion-item>\n    <ion-label floating>Motorista</ion-label>\n    <ion-input type="text" [(ngModel)]="mot" disabled="" value="Cleber"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Receitas R$</ion-label>\n    <ion-input type="text" [(ngModel)]="outr" disabled="" value="R$ 100"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Despesas R$</ion-label>\n    <ion-input type="text" [(ngModel)]="out" disabled="" value="R$ 1000"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Adiantamento Comissão</ion-label>\n    <ion-input type="text" [(ngModel)]="adi" disabled="" value="R$ 1000"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Comissão Gerencial</ion-label>\n    <ion-input type="text" [(ngModel)]="com" disabled="" value="10%"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label floating>Valor do Vale</ion-label>\n    <ion-input type="text" [(ngModel)]="val" disabled="" value="R$ 150"></ion-input>\n  </ion-item>\n\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/fernando/viagensMobile/src/pages/modulo-viagens/geral/geral-dados-motorista/geral-dados-motorista.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], GeralDadosMotoristaPage);

//# sourceMappingURL=geral-dados-motorista.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DespesasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dados_dados__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viagens_viagens__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DespesasPage = (function () {
    function DespesasPage(navCtrl, navParams, toastCtrl, storageProvider, dados) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.storageProvider = storageProvider;
        this.dados = dados;
        this.despesa = "";
        this.motorista = "bino";
    }
    DespesasPage.prototype.viagens = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__viagens_viagens__["a" /* ViagensPage */]);
    };
    DespesasPage.prototype.amountChange = function () {
        this.storageProvider.despesas.valorDespesas = this.storageProvider.detectAmount(this.storageProvider.despesas.valorDespesas);
    };
    DespesasPage.prototype.valida = function () {
        if (this.storageProvider.despesas.despesas == "" || this.storageProvider.despesas.dataDespesas == "" || this.storageProvider.despesas.valorDespesas == "") {
            return false;
        }
        else {
            return true;
        }
    };
    DespesasPage.prototype.showAlert = function () {
        var toast = this.toastCtrl.create({
            message: 'Gastos adicionado com sucesso',
            duration: 2000
        });
        toast.present();
        this.navCtrl.pop();
    };
    DespesasPage.prototype.salvar = function () {
        this.dados.despesa(this.storageProvider.despesas.motorista, this.storageProvider.despesas.despesas, this.storageProvider.despesas.dataDespesas, this.storageProvider.despesas.valorDespesas);
        this.navCtrl.pop();
    };
    return DespesasPage;
}());
DespesasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-despesas',template:/*ion-inline-start:"/home/fernando/viagensMobile/src/pages/modulo-viagens/despesas/despesas/despesas.html"*/'<ion-header>\n  <ion-navbar color = "tijuca">\n    <ion-title>Despesas da Viagem</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    \n      <ion-item>\n        <ion-select placeholder="Despesas" [(ngModel)]="storageProvider.despesas.despesas" required #iptDespesa="ngModel">\n          <ion-option value="Lanche">Lanche</ion-option>\n          <ion-option value="Almoço">Almoço</ion-option>\n          <ion-option value="Jantar">Jantar</ion-option>\n          <!-- <ion-option value="4">Almoçado</ion-option> \n          <ion-option value="5">Borracharia</ion-option>\n          <ion-option value="6">Corrente</ion-option>\n          <ion-option value="7">Lavagem de veículos</ion-option>\n          <ion-option value="8">Conserto de pneu</ion-option>\n          <ion-option value="9">Carga/Descarga</ion-option>\n          <ion-option value="10">Moto taxi</ion-option> -->\n        </ion-select>\n      </ion-item>\n    \n  <ion-item>\n        <ion-input type="date" placeholder="Data" [(ngModel)]="storageProvider.despesas.dataDespesas" required #iptData="ngModel"></ion-input>\n      </ion-item> \n      <ion-item>\n        <ion-input type="float" placeholder="0,00" [brmasker]="{money: true}" [(ngModel)]="storageProvider.despesas.valorDespesas"></ion-input>\n      </ion-item> \n  </ion-list> \n  <button ion-button full (click)="salvar()" [disabled]="!valida()" color = "tijuca" >Adicionar</button>\n</ion-content>'/*ion-inline-end:"/home/fernando/viagensMobile/src/pages/modulo-viagens/despesas/despesas/despesas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_dados_dados__["a" /* DadosProvider */]])
], DespesasPage);

//# sourceMappingURL=despesas.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RotasArlaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__arla_pag_arla_pag__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__arla_posto_arla_posto__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dados_dados__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RotasArlaPage = (function () {
    function RotasArlaPage(navCtrl, navParams, toastCtrl, storageProvider, dados) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.storageProvider = storageProvider;
        this.dados = dados;
        this.contador = 1;
        this.fotoArla = "dsfsdf";
    }
    RotasArlaPage.prototype.salvar = function () {
        this.dados.arla(this.arlaPagPage.storageProvider.arla.motorista, this.arlaPagPage.storageProvider.arla.litrosArla, this.arlaPagPage.storageProvider.arla.litrosPrecoArla, this.arlaPagPage.storageProvider.arla.selectArla, this.arlaPagPage.storageProvider.arla.tipoArla, this.arlaPagPage.storageProvider.arla.postoArla, this.arlaPagPage.storageProvider.arla.dataArla, this.arlaPagPage.storageProvider.arla.km);
        console.log("salvar chamado");
    };
    RotasArlaPage.prototype.ngAfterViewInit = function () {
        this.slides.lockSwipes(true);
        if (this.contador == 1) {
            return this.arlaPagPage.valida();
        }
        if (this.contador == 2) {
            if (this.fotoArla != undefined) {
                return true;
            }
        }
        if (this.contador == 3) {
            return this.arlaPostoPage.valida();
        }
    };
    RotasArlaPage.prototype.toBack = function () {
        this.slides.lockSwipes(false);
        this.contador -= 1;
        this.slides.slidePrev(400);
        if (this.contador == 2) {
            this.cameraButton = true;
        }
        else {
            this.cameraButton = false;
        }
        if (this.contador == 0) {
            this.navCtrl.pop();
        }
        this.slides.lockSwipes(true);
    };
    RotasArlaPage.prototype.toGo = function () {
        this.slides.lockSwipes(false);
        this.slides.slideTo(this.contador, 400);
        this.contador += 1;
        if (this.contador == 4) {
            this.salvar();
            //Armazenar no Storage
            // this.storageProvider.adicionarArla();
            var toast = this.toastCtrl.create({
                message: 'Arla32 adicionada com sucesso',
                duration: 2000
            });
            toast.present();
            this.navCtrl.pop();
        }
        if (this.contador == 2) {
            this.cameraButton = true;
        }
        else {
            this.cameraButton = false;
        }
        this.slides.lockSwipes(true);
    };
    return RotasArlaPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
], RotasArlaPage.prototype, "slides", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__arla_pag_arla_pag__["a" /* ArlaPagPage */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__arla_pag_arla_pag__["a" /* ArlaPagPage */])
], RotasArlaPage.prototype, "arlaPagPage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__arla_posto_arla_posto__["a" /* ArlaPostoPage */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__arla_posto_arla_posto__["a" /* ArlaPostoPage */])
], RotasArlaPage.prototype, "arlaPostoPage", void 0);
RotasArlaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-rotas-arla',template:/*ion-inline-start:"/home/fernando/viagensMobile/src/pages/modulo-viagens/arla-32/rotas-arla/rotas-arla.html"*/'<ion-content>\n    <div class="fixed-content">\n\n        <ion-slides pager>\n            <ion-slide>\n                <arla-pag-page></arla-pag-page>\n            </ion-slide>\n            <ion-slide>\n                <page-fotoarla></page-fotoarla>\n                <div class="img">\n                    <img class="image" src="{{fotoReceitas}}" />\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <arla-posto-page></arla-posto-page>\n            </ion-slide>\n        </ion-slides>\n\n        <ion-fab right bottom>\n            <button ion-fab color="tijuca" (click)="toGo()" [disabled]="!ngAfterViewInit()">\n                <ion-icon name="ios-arrow-forward"></ion-icon>\n            </button>\n        </ion-fab>\n\n        <ion-fab>\n            <button *ngIf="cameraButton" class="button-camera" ion-button outline color="tijuca">\n                <ion-icon name="ios-camera" (click)="mostrar()"></ion-icon>\n            </button>\n        </ion-fab>\n\n        <ion-fab left bottom>\n            <button ion-fab color="tijuca" (click)="toBack()">\n                <ion-icon color="warning" name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-fab>\n\n    </div>\n</ion-content>'/*ion-inline-end:"/home/fernando/viagensMobile/src/pages/modulo-viagens/arla-32/rotas-arla/rotas-arla.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_dados_dados__["a" /* DadosProvider */]])
], RotasArlaPage);

//# sourceMappingURL=rotas-arla.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArlaPagPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArlaPagPage = (function () {
    function ArlaPagPage(navCtrl, navParams, alertCtrl, storageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.storageProvider = storageProvider;
    }
    ArlaPagPage.prototype.valida = function () {
        if (this.storageProvider.arla.litrosArla == "" || this.storageProvider.arla.litrosPrecoArla == "" || this.storageProvider.arla.selectArla == "") {
            return false;
        }
        else {
            return true;
        }
    };
    ArlaPagPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Adicionado',
            subTitle: 'Arla32 Adicionado',
            buttons: ['OK']
        });
        alert.present();
    };
    return ArlaPagPage;
}());
ArlaPagPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'arla-pag-page',template:/*ion-inline-start:"/home/fernando/viagensMobile/src/pages/modulo-viagens/arla-32/arla-pag/arla-pag.html"*/'<ion-header>\n  <ion-toolbar color = "tijuca">\n    <ion-title padding>Dados</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-list>\n\n  <ion-item>\n    <ion-input type="number0" placeholder="Litros" min="0" [(ngModel)]="storageProvider.arla.litrosArla" (ngModelChange)="valida()"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input type="number" placeholder="Litro(R$)" [(ngModel)]="storageProvider.arla.litrosPrecoArla" (ngModelChange)="valida()"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input type="number" [brmasker]="{money: true}" placeholder="Total(R$)" disabled=""></ion-input><!-- [(ngModel)]="total" (ngModelChange)="valida()" -->\n  </ion-item>\n\n  <ion-item>\n    <ion-select placeholder="Forma Pagamento" [(ngModel)]="storageProvider.arla.selectArla" (click)="valida()">\n      <ion-option value="ext">Boleto Bancário</ion-option>\n      <ion-option value="cre">Cartão de Crédito</ion-option>\n      <ion-option value="deb">Cartão de Débito</ion-option>\n      <ion-option value="che">Cheque</ion-option>\n<!--  <ion-option value="ter">Cheque Terceiro</ion-option> -->\n<!--  <ion-option value="cob">Cobrança em Carteira</ion-option> \n      <ion-option value="dep">Depósito Bancário</ion-option>\n      <ion-option value="des">Despesa</ion-option>\n      <ion-option value="desv">Despesav</ion-option>-->\n      <ion-option value="din">Dinheiro</ion-option>\n<!--  <ion-option value="moe">Moedas</ion-option> -->\n    </ion-select>\n  </ion-item>\n</ion-list>'/*ion-inline-end:"/home/fernando/viagensMobile/src/pages/modulo-viagens/arla-32/arla-pag/arla-pag.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */]])
], ArlaPagPage);

//# sourceMappingURL=arla-pag.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArlaPostoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArlaPostoPage = (function () {
    function ArlaPostoPage(navCtrl, navParams, storageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storageProvider = storageProvider;
    }
    ArlaPostoPage.prototype.valida = function () {
        if (this.storageProvider.arla.km == "" || this.storageProvider.arla.dataArla == "" || this.storageProvider.arla.postoArla == "") {
        }
        else {
            return true;
        }
    };
    return ArlaPostoPage;
}());
ArlaPostoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'arla-posto-page',template:/*ion-inline-start:"/home/fernando/viagensMobile/src/pages/modulo-viagens/arla-32/arla-posto/arla-posto.html"*/'<ion-header>\n  <ion-toolbar color = "tijuca">\n    <ion-title padding>Arla 32</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-list>\n\n  <ion-item>\n        <ion-select palceholder="Tipo Abastecimento" [(ngModel)]="storageProvider.arla.tipoArla" (ngModelChange)="valida()">\n      <ion-option value="ext">Externo</ion-option>\n      <ion-option value="int">Interno</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-input type="text" placeholder="Posto Combustivel" [(ngModel)]="storageProvider.arla.postoArla" (ngModelChange)="valida()"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input type="date" placeholder="Data" [(ngModel)]="storageProvider.arla.dataArla" (ngModelChange)="valida()"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-input type="number" min="0" placeholder="Kilometragem"  [(ngModel)]="storageProvider.arla.km" (ngModelChange)="valida()"></ion-input>\n  </ion-item>\n\n</ion-list>'/*ion-inline-end:"/home/fernando/viagensMobile/src/pages/modulo-viagens/arla-32/arla-posto/arla-posto.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */]])
], ArlaPostoPage);

//# sourceMappingURL=arla-posto.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RotasReceitasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_foto_servico_foto_servico__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__receita_fornecedor_receita_fornecedor__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__receitas_foto_receitas_foto__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_dados_dados__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RotasReceitasPage = (function () {
    function RotasReceitasPage(navCtrl, navParams, toastCtrl, foto, storageProvider, dados) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.foto = foto;
        this.storageProvider = storageProvider;
        this.dados = dados;
        // @ViewChild(Receitas) receitas: Receitas;
        this.contador = 1;
        this.fotoReceitas = "dsfsdf";
    }
    RotasReceitasPage.prototype.salvar = function () {
        this.dados.receitas(this.storageProvider.receitas.motorista, this.storageProvider.receitas.fornecedorOrigem, this.storageProvider.receitas.fornecedorDestino, this.storageProvider.receitas.produto, this.storageProvider.receitas.tipoPagmt, this.storageProvider.receitas.idUnidadeMedida, this.storageProvider.receitas.qntFaturado, this.storageProvider.receitas.qntDescarregado, this.storageProvider.receitas.valorUnitario, this.storageProvider.receitas.idSubUnidade);
        console.log("Receitas chamado");
    };
    RotasReceitasPage.prototype.ngAfterViewInit = function () {
        this.slides.lockSwipes(true);
        if (this.contador == 1) {
            return this.ReceitasFornecedor.valida();
        }
        if (this.contador == 2) {
            if (this.fotoReceitas != undefined) {
                return true;
            }
        }
    };
    RotasReceitasPage.prototype.toBack = function () {
        this.slides.lockSwipes(false);
        this.contador -= 1;
        this.slides.slidePrev(400);
        if (this.contador == 2) {
            this.cameraButton = true;
        }
        else {
            this.cameraButton = false;
        }
        if (this.contador == 0) {
            this.navCtrl.pop();
        }
        this.slides.lockSwipes(true);
    };
    RotasReceitasPage.prototype.toGo = function () {
        this.slides.lockSwipes(false);
        this.slides.slideTo(this.contador, 400);
        this.contador += 1;
        if (this.contador == 4) {
            this.salvar();
            //Armazenar no Storage
            // this.storageProvider.adicionarReceitas();
            // Toast
            var toast = this.toastCtrl.create({
                message: 'Receita adicionada com sucesso',
                duration: 2000
            });
            toast.present();
            this.navCtrl.pop();
        }
        if (this.contador == 2) {
            this.cameraButton = true;
        }
        else {
            this.cameraButton = false;
        }
        this.slides.lockSwipes(true);
    };
    RotasReceitasPage.prototype.mostrar = function () {
        var _this = this;
        this.foto.getFoto('picture')
            .then(function (responses) {
            if (_this.contador == 2) {
                _this.fotoReceitas = _this.foto.ultimaFoto;
                console.log(_this.fotoReceitas);
            }
        });
    };
    return RotasReceitasPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
], RotasReceitasPage.prototype, "slides", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__receita_fornecedor_receita_fornecedor__["a" /* ReceitasFornecedorPage */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__receita_fornecedor_receita_fornecedor__["a" /* ReceitasFornecedorPage */])
], RotasReceitasPage.prototype, "ReceitasFornecedor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__receitas_foto_receitas_foto__["a" /* ReceitasFotoPage */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__receitas_foto_receitas_foto__["a" /* ReceitasFotoPage */])
], RotasReceitasPage.prototype, "ReceitasFoto", void 0);
RotasReceitasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-rotas-receitas',template:/*ion-inline-start:"/home/fernando/viagensMobile/src/pages/modulo-viagens/receitas/rotas-receitas/rotas-receitas.html"*/'<ion-content>\n    <div class="fixed-content">\n\n        <ion-slides>\n            <ion-slide>\n                <page-receita-fornecedor></page-receita-fornecedor>\n            </ion-slide>\n            <ion-slide>\n                <page-receitas-foto></page-receitas-foto>\n                <div class="img">\n                    <img class="image" src="{{fotoReceitas}}" />\n                </div>\n            </ion-slide> \n        </ion-slides>\n\n        <ion-fab right bottom>\n            <button ion-fab color="tijuca" [disabled]="!ngAfterViewInit()" (click)="toGo()">\n                <ion-icon name="ios-arrow-forward"></ion-icon>\n            </button>\n        </ion-fab>\n        <ion-fab>\n            <button *ngIf="cameraButton" class="button-camera" ion-button outline color="tijuca">\n                <ion-icon name="ios-camera" (click)="mostrar()"></ion-icon>\n            </button>\n        </ion-fab>\n        <ion-fab left bottom>\n            <button ion-fab color="tijuca" (click)="toBack()">\n                <ion-icon color="warning" name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-fab>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/fernando/viagensMobile/src/pages/modulo-viagens/receitas/rotas-receitas/rotas-receitas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_foto_servico_foto_servico__["a" /* FotoServicoProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_dados_dados__["a" /* DadosProvider */]])
], RotasReceitasPage);

//# sourceMappingURL=rotas-receitas.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceitasFornecedorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReceitasFornecedorPage = (function () {
    function ReceitasFornecedorPage(navCtrl, navParams, storageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storageProvider = storageProvider;
    }
    ReceitasFornecedorPage.prototype.valida = function () {
        if (this.storageProvider.receitas.fornecedorOrigem == "" || this.storageProvider.receitas.fornecedorDestino == "" || this.storageProvider.receitas.produto == "" || this.storageProvider.receitas.tipoPagmt == "") {
            return false;
        }
        else {
            return true;
        }
    };
    return ReceitasFornecedorPage;
}());
ReceitasFornecedorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-receita-fornecedor',template:/*ion-inline-start:"/home/fernando/viagensMobile/src/pages/modulo-viagens/receitas/receita-fornecedor/receita-fornecedor.html"*/'<ion-header color = "tijuca">\n  \n  <ion-toolbar color = "tijuca">\n    <ion-title padding color = "tijuca">Fornecedor</ion-title>\n</ion-toolbar>\n\n\n</ion-header>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Fornecedor / Origem</ion-label>\n      <ion-input type="text" [(ngModel)]="storageProvider.receitas.fornecedorOrigem" (ngModelChange)="valida()"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Fornecedor / Destino</ion-label>\n      <ion-input type="text" [(ngModel)]="storageProvider.receitas.fornecedorDestino" (ngModelChange)="valida()"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Produto</ion-label>\n      <ion-input type="text" name="produto" [(ngModel)]="storageProvider.receitas.produto" (ngModelChange)="valida()"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Tipo de Pagamento</ion-label>\n      <ion-select [(ngModel)]="storageProvider.receitas.tipoPagmt" (click)="valida()">\n        <ion-option value="proprio">Próprio</ion-option>\n        <ion-option value="tercerizado">Tercerizado</ion-option>\n        <ion-option value="quarterizado">Quarterizado</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n'/*ion-inline-end:"/home/fernando/viagensMobile/src/pages/modulo-viagens/receitas/receita-fornecedor/receita-fornecedor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */]])
], ReceitasFornecedorPage);

//# sourceMappingURL=receita-fornecedor.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceitasFotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReceitasFotoPage = (function () {
    function ReceitasFotoPage(navCtrl, navParams, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    ReceitasFotoPage.prototype.showToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Receita adicionada com sucesso',
            duration: 3000
        });
        toast.present();
    };
    return ReceitasFotoPage;
}());
ReceitasFotoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-receitas-foto',template:/*ion-inline-start:"/home/fernando/viagensMobile/src/pages/modulo-viagens/receitas/receitas-foto/receitas-foto.html"*/'<ion-header>\n\n  <ion-toolbar color = "tijuca">\n    <ion-title padding color = "tijuca">Foto</ion-title>\n</ion-toolbar>\n</ion-header>\n '/*ion-inline-end:"/home/fernando/viagensMobile/src/pages/modulo-viagens/receitas/receitas-foto/receitas-foto.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], ReceitasFotoPage);

//# sourceMappingURL=receitas-foto.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelatoriosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__despesas_relatorios_despesas_relatorios__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__receitas_relatorios_receitas_relatorios__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__arla_relatorios_arla_relatorios__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__abastecimento_relatorios_abastecimento_relatorios__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RelatoriosPage = (function () {
    function RelatoriosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.relatoriosDespesas = __WEBPACK_IMPORTED_MODULE_2__despesas_relatorios_despesas_relatorios__["a" /* DespesasRelatoriosPage */];
        this.relatoriosReceitas = __WEBPACK_IMPORTED_MODULE_3__receitas_relatorios_receitas_relatorios__["a" /* ReceitasRelatoriosPage */];
        this.relatoriosArla = __WEBPACK_IMPORTED_MODULE_4__arla_relatorios_arla_relatorios__["a" /* ArlaRelatoriosPage */];
        this.relatoriosAbastecimento = __WEBPACK_IMPORTED_MODULE_5__abastecimento_relatorios_abastecimento_relatorios__["a" /* AbastecimentoRelatoriosPage */];
    }
    return RelatoriosPage;
}());
RelatoriosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-relatorios',template:/*ion-inline-start:"/home/fernando/viagensMobile/src/pages/modulo-viagens/relatorios/relatorios-page/relatorios.html"*/'<ion-header>\n\n  <ion-navbar color="tijuca">\n    <ion-title>Relatórios</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n\n  <ion-tabs color="tijuca">\n    <ion-tab [root]="relatoriosDespesas" tabTitle="Despesas" tabIcon="md-cash"></ion-tab>\n    <ion-tab [root]="relatoriosReceitas" tabTitle="Receitas" tabIcon="md-clipboard"></ion-tab>\n    <ion-tab [root]="relatoriosArla" tabTitle="Arla" tabIcon="ios-leaf"></ion-tab>\n    <ion-tab [root]="relatoriosAbastecimento" tabTitle="Abastecimento" tabIcon="ios-water"></ion-tab>\n  </ion-tabs>\n\n</ion-content>'/*ion-inline-end:"/home/fernando/viagensMobile/src/pages/modulo-viagens/relatorios/relatorios-page/relatorios.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], RelatoriosPage);

//# sourceMappingURL=relatorios.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DespesasRelatoriosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DespesasRelatoriosPage = (function () {
    function DespesasRelatoriosPage(navCtrl, navParams, storageProvider) {
        // this.storages = this.storageProvider.listar();
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storageProvider = storageProvider;
    }
    DespesasRelatoriosPage.prototype.ionViewDidEnter = function () {
        this.storages = this.storageProvider.listar();
        console.log(this.storages);
        this.storages = this.storageProvider.listarDespesa();
        this.tamanho = this.storageProvider.tamanhoArla();
    };
    return DespesasRelatoriosPage;
}());
DespesasRelatoriosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-despesas-relatorios',template:/*ion-inline-start:"/home/fernando/viagensMobile/src/pages/modulo-viagens/relatorios/despesas-relatorios/despesas-relatorios.html"*/'<ion-content padding>\n\n  <span *ngIf= "tamanho < 1" class="vazio"> Nenhum dado encontrado</span>\n  \n    <ion-card *ngFor="let storage of storages">\n        <ion-card-header>\n          <span id="titulo">Despesas</span>\n          <br>\n  \n        </ion-card-header>\n  \n        <ion-card-content>\n          <span id="local">{{storage.despesas}}</span>\n          <br>\n          <span id="valor">{{storage.dataDespesas}}</span>\n          <br>\n          <span id="horario">{{storage.valorDespesas}}</span>\n          <br>\n         \n        </ion-card-content>\n    </ion-card>\n  \n  </ion-content>'/*ion-inline-end:"/home/fernando/viagensMobile/src/pages/modulo-viagens/relatorios/despesas-relatorios/despesas-relatorios.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */]])
], DespesasRelatoriosPage);

//# sourceMappingURL=despesas-relatorios.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceitasRelatoriosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReceitasRelatoriosPage = (function () {
    function ReceitasRelatoriosPage(navCtrl, navParams, storageProvider) {
        // this.storages = this.storageProvider.listar();
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storageProvider = storageProvider;
    }
    ReceitasRelatoriosPage.prototype.ionViewDidEnter = function () {
        this.tamanho = this.storageProvider.tamanhoArla();
        this.storages = this.storageProvider.listarReceitas();
    };
    return ReceitasRelatoriosPage;
}());
ReceitasRelatoriosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-receitas-relatorios',template:/*ion-inline-start:"/home/fernando/viagensMobile/src/pages/modulo-viagens/relatorios/receitas-relatorios/receitas-relatorios.html"*/'<ion-content padding>\n\n  <span *ngIf="tamanho < 1" class="vazio"> Nenhum dado encontrado</span>\n\n\n  <ion-card *ngFor="let storage of storages">\n    <ion-card-header>\n      <span id="titulo">Receitas</span>\n      <br>\n\n    </ion-card-header>\n\n    <ion-card-content>\n      <span id="local">{{storage.fornecedorOrigem}}</span>\n      <br>\n      <span id="valor">{{storage.fornecedorDestino}} </span>\n      <br>\n      <span id="horario">{{storage.produto}}</span>\n      <br>\n      <span id="local">{{storage.tipoPagmt}}</span>\n      <br>\n      <span id="valor">{{storage.idUnidadeMedida}} </span>\n      <br>\n      <span id="horario">{{storage.idUnidadeBandeja}}</span>\n      <br>\n      <span id="local">{{storage.caixa}}</span>\n      <br>\n      <span id="valor">{{storage.qntFaturado}} </span>\n      <br>\n      <span id="horario">{{storage.qntDescarregado}}</span>\n      <br>\n      <span id="local">{{storage.valorUnitario}}</span>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/home/fernando/viagensMobile/src/pages/modulo-viagens/relatorios/receitas-relatorios/receitas-relatorios.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */]])
], ReceitasRelatoriosPage);

//# sourceMappingURL=receitas-relatorios.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArlaRelatoriosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArlaRelatoriosPage = (function () {
    function ArlaRelatoriosPage(navCtrl, navParams, storageProvider) {
        // this.storages = this.storageProvider.listar();
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storageProvider = storageProvider;
    }
    ArlaRelatoriosPage.prototype.ionViewDidEnter = function () {
        this.storages = this.storageProvider.listarArla();
        this.tamanho = this.storageProvider.tamanhoArla();
    };
    return ArlaRelatoriosPage;
}());
ArlaRelatoriosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-arla-relatorios',template:/*ion-inline-start:"/home/fernando/viagensMobile/src/pages/modulo-viagens/relatorios/arla-relatorios/arla-relatorios.html"*/'<ion-content padding>\n\n\n  <span *ngIf= "tamanho < 1" class="vazio"> Nenhum dado encontrado</span>\n\n      <ion-card *ngFor="let storage of storages">\n      <ion-card-header>\n        <span id="titulo">Arla</span>\n        <br>\n\n        </ion-card-header>\n\n\n        <ion-card-content>\n          <span id="local">{{storage.dataArla}}</span>\n          <br>\n          <span id="valor">{{storage.postoArla}} </span>\n          <br>\n          <span id="horario">{{storage.tipoArla}}</span>\n          <br>\n          <span id="local">{{storage.km}}</span>\n          <br>\n          <span id="valor">{{storage.litrosArla}} </span>\n          <br>\n          <span id="horario">{{storage.litrosPrecoArla}}</span>\n          <br>\n          <span id="horario">{{storage.selectArla}}</span>\n          <br>\n        </ion-card-content>\n      </ion-card>\n\n</ion-content>'/*ion-inline-end:"/home/fernando/viagensMobile/src/pages/modulo-viagens/relatorios/arla-relatorios/arla-relatorios.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */]])
], ArlaRelatoriosPage);

//# sourceMappingURL=arla-relatorios.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbastecimentoRelatoriosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AbastecimentoRelatoriosPage = (function () {
    function AbastecimentoRelatoriosPage(navCtrl, navParams, storageProvider) {
        // this.storages = this.storageProvider.listar();
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storageProvider = storageProvider;
    }
    AbastecimentoRelatoriosPage.prototype.ionViewDidEnter = function () {
        this.storages = this.storageProvider.listar();
        this.tamanho = this.storageProvider.tamanhoArla();
    };
    return AbastecimentoRelatoriosPage;
}());
AbastecimentoRelatoriosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-abastecimento-relatorios',template:/*ion-inline-start:"/home/fernando/viagensMobile/src/pages/modulo-viagens/relatorios/abastecimento-relatorios/abastecimento-relatorios.html"*/'<ion-content padding>\n\n\n  <span *ngIf= "tamanho < 1" class="vazio"> Nenhum dado encontrado</span>\n  \n\n  <ion-card *ngFor="let storage of storages">\n      <ion-card-header>\n        <span id="titulo">Abastecimento</span>\n        <br>\n\n      </ion-card-header>\n\n\n      <ion-card-content>\n        <span id="local">{{storage.tipoAbastecimento}}</span>\n        <br>\n        <span id="valor">{{storage.postoAbastecimento}} </span>\n        <br>\n        <span id="horario">{{storage.dataAbastecimento}}</span>\n        <br>\n        <span id="local">{{storage.tipoPagmtAbastecimento}}</span>\n        <br>\n        <span id="valor">{{storage.odometro}} </span>\n        <br>\n        <span id="horario">{{storage.litrosBomb1}}</span>\n        <br>\n        <span id="horario">{{storage.precoBomb1}}</span>\n        <br>\n        <span id="horario">{{storage.litrosBomb2}}</span>\n        <br>\n        <span id="horario">{{storage.precoBomb2}}</span>\n        <br>\n      </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/home/fernando/viagensMobile/src/pages/modulo-viagens/relatorios/abastecimento-relatorios/abastecimento-relatorios.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */]])
], AbastecimentoRelatoriosPage);

//# sourceMappingURL=abastecimento-relatorios.js.map

/***/ }),

/***/ 158:
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
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/inicio/inicio.module": [
		463,
		0
	],
	"../pages/login/login.module": [
		464,
		27
	],
	"../pages/modulo-viagens/abastecimento/abastecimento-bomba-1/abastecimento-bomba-1.module": [
		465,
		26
	],
	"../pages/modulo-viagens/abastecimento/abastecimento-bomba-2/abastecimento-bomba-2.module": [
		466,
		25
	],
	"../pages/modulo-viagens/abastecimento/abastecimento-foto-bomba-1/abastecimento-foto-bomba-1.module": [
		467,
		24
	],
	"../pages/modulo-viagens/abastecimento/abastecimento-foto-bomba-2/abastecimento-foto-bomba-2.module": [
		468,
		23
	],
	"../pages/modulo-viagens/abastecimento/abastecimento-foto-odometro/abastecimento-foto-odometro.module": [
		469,
		22
	],
	"../pages/modulo-viagens/abastecimento/abastecimento-odometro/abastecimento-odometro.module": [
		470,
		21
	],
	"../pages/modulo-viagens/abastecimento/abastecimento-pagamento/abastecimento-pagamento.module": [
		471,
		20
	],
	"../pages/modulo-viagens/abastecimento/rotas-abastecimento/rotas-abastecimento.module": [
		472,
		19
	],
	"../pages/modulo-viagens/arla-32/arla-pag/arla-pag.module": [
		473,
		18
	],
	"../pages/modulo-viagens/arla-32/arla-posto/arla-posto.module": [
		474,
		17
	],
	"../pages/modulo-viagens/arla-32/fotoarla/fotoarla.module": [
		475,
		16
	],
	"../pages/modulo-viagens/arla-32/rotas-arla/rotas-arla.module": [
		476,
		15
	],
	"../pages/modulo-viagens/despesas/despesas/despesas.module": [
		477,
		14
	],
	"../pages/modulo-viagens/geral/geral-dados-motorista/geral-dados-motorista.module": [
		478,
		13
	],
	"../pages/modulo-viagens/geral/geral-dados-viagem/geral-dados-viagem.module": [
		479,
		12
	],
	"../pages/modulo-viagens/geral/geral-page/geral-page.module": [
		480,
		11
	],
	"../pages/modulo-viagens/receitas/receita-fornecedor/receita-fornecedor.module": [
		481,
		10
	],
	"../pages/modulo-viagens/receitas/receitas-foto/receitas-foto.module": [
		482,
		9
	],
	"../pages/modulo-viagens/receitas/rotas-receitas/rotas-receitas.module": [
		483,
		8
	],
	"../pages/modulo-viagens/relatorios/abastecimento-relatorios/abastecimento-relatorios.module": [
		484,
		7
	],
	"../pages/modulo-viagens/relatorios/arla-relatorios/arla-relatorios.module": [
		485,
		6
	],
	"../pages/modulo-viagens/relatorios/despesas-relatorios/despesas-relatorios.module": [
		486,
		5
	],
	"../pages/modulo-viagens/relatorios/receitas-relatorios/receitas-relatorios.module": [
		487,
		4
	],
	"../pages/modulo-viagens/relatorios/relatorios-page/relatorios.module": [
		488,
		3
	],
	"../pages/modulo-viagens/viagens/viagens.module": [
		489,
		2
	],
	"../pages/principal/principal/principal.module": [
		490,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 199;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnviarProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_storage_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dados_dados__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Network } from "@ionic-native/network";



var EnviarProvider = (function () {
    function EnviarProvider(storageProvider, dados, storage) {
        this.storageProvider = storageProvider;
        this.dados = dados;
        this.storage = storage;
        this.despesas = [];
        this.abastecimento = [];
        this.arla = [];
        this.receitas = [];
    }
    EnviarProvider.prototype.enviar = function () {
        if (this.storageProvider.tamanhoDespesas() > 0) {
            this.despesas = this.storageProvider.listaDespesas;
            for (var index = 0; index <= this.storageProvider.tamanhoDespesas(); index++) {
                console.log('enviar arquivos no cache');
                this.despesas = this.storageProvider.listaDespesas;
                this.dados.despesa(this.despesas[index].motorista, this.despesas[index].despesas, this.despesas[index].dataDespesas, this.despesas[index].valorDespesas, true);
            }
        }
        //Abastecimento
        if (this.storageProvider.tamanhoAbastecimento() > 0) {
            this.abastecimento = this.storageProvider.listaAbastecimento;
            for (index = 0; index <= this.storageProvider.tamanhoAbastecimento(); index++) {
                console.log('enviar arquivos no cache');
                this.abastecimento = this.storageProvider.listaAbastecimento;
                this.dados.abastecimento(this.abastecimento[index].motorista, this.abastecimento[index].tipoPosto, this.abastecimento[index].posto, this.abastecimento[index].data, this.abastecimento[index].tipoPagamento, this.abastecimento[index].odometro, this.abastecimento[index].valorLitrosBomba1, this.abastecimento[index].valorPrecoBomba1, this.abastecimento[index].valorPrecoBomba2, this.abastecimento[index].valorLitrosBomba2, true);
            }
        }
        //Arla
        if (this.storageProvider.tamanhoArla() > 0) {
            this.arla = this.storageProvider.listaArla;
            for (index = 0; index <= this.storageProvider.tamanhoArla(); index++) {
                this.abastecimento = this.storageProvider.listaArla;
                this.dados.arla(this.arla[index].motorista, this.arla[index].tipoPosto, this.arla[index].posto, this.arla[index].data, this.arla[index].formaPagamento, this.arla[index].km, this.arla[index].litros, this.arla[index].preco, true);
            }
        }
        //Receitas
        if (this.storageProvider.tamanhoReceitas() > 0) {
            this.arla = this.storageProvider.listaArla;
            for (index = 0; index <= this.storageProvider.tamanhoReceitas(); index++) {
                this.receitas = this.storageProvider.listaReceitas;
                this.dados.receitas(this.receitas[index].motorista, this.receitas[index].fornecedorOrigem, this.receitas[index].fornecedorDestino, this.receitas[index].produto, this.receitas[index].tipoPagment, this.receitas[index].idUnidadeMedida, this.receitas[index].qntFaturado, this.receitas[index].qntDescarregado, this.receitas[index].valorUnitario, this.receitas[index].idSubUnidade, true);
            }
        }
    };
    return EnviarProvider;
}());
EnviarProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_storage_storage__["a" /* StorageProvider */],
        __WEBPACK_IMPORTED_MODULE_2__dados_dados__["a" /* DadosProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], EnviarProvider);

//# sourceMappingURL=enviar.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modulo_viagens_viagens_viagens__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrincipalPage = (function () {
    function PrincipalPage(navCtrl, navParams, storageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storageProvider = storageProvider;
    }
    PrincipalPage.prototype.ionViewDidEnter = function () {
    };
    PrincipalPage.prototype.linkViagens = function () {
        // this.storageProvider.login.isLoggedIn = false;
        // this.storageProvider.atualizar("Auth");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__modulo_viagens_viagens_viagens__["a" /* ViagensPage */]);
    };
    PrincipalPage.prototype.logout = function () {
        this.storageProvider.login.isLoggedIn = false;
        this.storageProvider.atualizar("Auth");
    };
    return PrincipalPage;
}());
PrincipalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-principal',template:/*ion-inline-start:"/home/fernando/viagensMobile/src/pages/principal/principal/principal.html"*/'<!-- <page-login></page-login> -->\n\n<span>\n\n  <ion-header>\n\n    <ion-toolbar color="tijuca">\n      <ion-title style="text-align: center">Principal</ion-title>\n    </ion-toolbar>\n\n  </ion-header>\n  <div class="fixed-content">\n    <ion-content class="card-background-page">\n\n      <div class="grid">\n        <div class="row">\n          <div class="column" (click)="linkViagens()">Viagens\n            <div class="interna">\n              <img src="assets/images/frotas.png" />\n            </div>\n          </div>\n          <div class="column">Caixa\n            <div class="interna">\n              <img src="assets/images/caixa.png" />\n            </div>\n          </div>\n        </div>\n        <div class="row">\n          <div class="column">Vendas\n            <div class="interna">\n              <img class="imagem" src="assets/images/vendas.png" />\n            </div>\n          </div>\n          <div class="column">Cheque\n            <div class="interna">\n              <img class="imagem" src="assets/images/cheque.png" />\n            </div>\n          </div>\n        </div>\n        <div class="row">\n          <div class="column">Fábrica\n            <div class="interna">\n              <img class="imagem" src="assets/images/fabrica.png" />\n            </div>\n          </div>\n          <div class="column">Suporte\n            <div class="interna">\n              <img class="imagem" src="assets/images/suporte.png" />\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <button ion-button color="tijuca" full (click)="logout()">Logout</button>\n    </ion-content>\n  </div>\n\n  Nome: {{name}} Email: {{email}} Family Name: {{familyName}} Given Name: {{givenName}} User ID: {{userId}}\n\n</span>'/*ion-inline-end:"/home/fernando/viagensMobile/src/pages/principal/principal/principal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */]])
], PrincipalPage);

//# sourceMappingURL=principal.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_controller__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage_es2015_storage__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    //http://192.168.10.8/viagensMobile/login.php
    function LoginPage(navParams, navCtrl, storageProvider, storage, http) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.storageProvider = storageProvider;
        this.storage = storage;
        this.http = http;
        this.items = [];
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        this.login();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.http
            .get('http://192.168.10.8/viagensMobile/login.php')
            .subscribe(function (data) {
            console.dir(data);
            _this.items = data;
        }, function (error) {
            console.dir(error);
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"/home/fernando/viagensMobile/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar color="tijuca">\n    <ion-title padding>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  \n  <img src="../assets/images/tijuca-logo.png" class="img">\n  <br>\n  <ion-item>\n    <ion-label stacked><span class="input">Usuário</span></ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked><span class="input">Senha</span></ion-label>\n    <ion-input type="password"></ion-input>\n  </ion-item>\n  <br>\n\n  \n  <button ion-button full color="tijuca">Login</button>\n\n</ion-content>'/*ion-inline-end:"/home/fernando/viagensMobile/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_controller__["a" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_controller__["a" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage_es2015_storage__["a" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage_es2015_storage__["a" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]) === "function" && _e || Object])
], LoginPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbastecimentoFotoBomba_1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AbastecimentoFotoBomba_1Page = (function () {
    function AbastecimentoFotoBomba_1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return AbastecimentoFotoBomba_1Page;
}());
AbastecimentoFotoBomba_1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-abastecimento-foto-bomba-1',template:/*ion-inline-start:"/home/fernando/viagensMobile/src/pages/modulo-viagens/abastecimento/abastecimento-foto-bomba-1/abastecimento-foto-bomba-1.html"*/'<ion-header>\n\n  <ion-toolbar color = "tijuca">\n    <ion-title>Foto</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"/home/fernando/viagensMobile/src/pages/modulo-viagens/abastecimento/abastecimento-foto-bomba-1/abastecimento-foto-bomba-1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], AbastecimentoFotoBomba_1Page);

//# sourceMappingURL=abastecimento-foto-bomba-1.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbastecimentoFotoBomba_2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AbastecimentoFotoBomba_2Page = (function () {
    function AbastecimentoFotoBomba_2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AbastecimentoFotoBomba_2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AbastecimentoFotoBomba_2Page');
    };
    return AbastecimentoFotoBomba_2Page;
}());
AbastecimentoFotoBomba_2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-abastecimento-foto-bomba-2',template:/*ion-inline-start:"/home/fernando/viagensMobile/src/pages/modulo-viagens/abastecimento/abastecimento-foto-bomba-2/abastecimento-foto-bomba-2.html"*/'<ion-header>\n\n  <ion-toolbar color = "tijuca">\n    <ion-title>Foto</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"/home/fernando/viagensMobile/src/pages/modulo-viagens/abastecimento/abastecimento-foto-bomba-2/abastecimento-foto-bomba-2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], AbastecimentoFotoBomba_2Page);

//# sourceMappingURL=abastecimento-foto-bomba-2.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbastecimentoFotoOdometroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AbastecimentoFotoOdometroPage = (function () {
    function AbastecimentoFotoOdometroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AbastecimentoFotoOdometroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AbastecimentoFotoOdometroPage');
    };
    return AbastecimentoFotoOdometroPage;
}());
AbastecimentoFotoOdometroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-abastecimento-foto-odometro',template:/*ion-inline-start:"/home/fernando/viagensMobile/src/pages/modulo-viagens/abastecimento/abastecimento-foto-odometro/abastecimento-foto-odometro.html"*/'<ion-header>\n\n  <ion-toolbar color = "tijuca">\n    <ion-title>Foto</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"/home/fernando/viagensMobile/src/pages/modulo-viagens/abastecimento/abastecimento-foto-odometro/abastecimento-foto-odometro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], AbastecimentoFotoOdometroPage);

//# sourceMappingURL=abastecimento-foto-odometro.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FotoarlaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FotoarlaPage = (function () {
    function FotoarlaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FotoarlaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FotoarlaPage');
    };
    return FotoarlaPage;
}());
FotoarlaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-fotoarla',template:/*ion-inline-start:"/home/fernando/viagensMobile/src/pages/modulo-viagens/arla-32/fotoarla/fotoarla.html"*/'<ion-header>\n\n  <ion-toolbar color = "tijuca">\n    <ion-title padding color = "tijuca">Foto</ion-title>\n</ion-toolbar>\n</ion-header>\n '/*ion-inline-end:"/home/fernando/viagensMobile/src/pages/modulo-viagens/arla-32/fotoarla/fotoarla.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], FotoarlaPage);

//# sourceMappingURL=fotoarla.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(314);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DadosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DadosProvider = (function () {
    function DadosProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.baseURI = "http://192.168.10.160/";
        this.hideForm = false;
        console.log('Hello DadosProvider Provider');
    }
    DadosProvider.prototype.despesa = function (motorista, despesa, data, valor, opcional) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }), options = { "key": "despesa", "despesa": despesa, "motorista": motorista, "data": data, "valor": valor }, url = this.baseURI + "manage-data.php";
        try {
            this.http.post(url, JSON.stringify(options), headers)
                .subscribe(function (data) {
                console.log(data);
                // If the request was successful notify the user
                // console.log(data)
                _this.hideForm = true;
            }, function (error) {
                // console.log(error.statusText);
                if (error.statusText == "OK") {
                    console.log("fazer nada");
                    _this.storage.delete(_this.storage.chaveDespesas);
                    _this.storage.listaDespesas = [];
                }
                else {
                    console.log('tratar erros');
                    if (opcional != true) {
                        _this.storage.adicionarDespesas();
                    }
                }
            });
        }
        catch (error) {
            console.log('catch');
        }
    };
    DadosProvider.prototype.abastecimento = function (motorista, tipoPosto, posto, data, tipoPagamento, odometro, litrosBomba1, precoBomba1, litrosBomba2, precoBomba2, opcional) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }), options = {
            "key": "abastecimento",
            "motorista": motorista,
            "tipoPosto": tipoPosto,
            "data": data,
            "tipoPagamento": tipoPagamento,
            "odometro": odometro,
            "litrosBomba1": litrosBomba1,
            "precoBomba1": precoBomba1,
            "litrosBomba2": litrosBomba2,
            "precoBomba2": precoBomba2
        }, url = this.baseURI + "manage-data.php";
        this.http.post(url, JSON.stringify(options), headers)
            .subscribe(function (data) {
            console.log(data);
            // If the request was successful notify the user
            console.log(data);
            _this.hideForm = true;
        }, function (error) {
            if (error.statusText == "OK") {
                console.log("fazer nada");
                _this.storage.delete(_this.storage.chaveAbastecimento);
                _this.storage.listaAbastecimento = [];
            }
            else {
                console.log('tratar erros');
                if (opcional != true) {
                    _this.storage.adicionarAbastecimento();
                }
            }
        });
    };
    DadosProvider.prototype.arla = function (motorista, tipoPosto, posto, data, formaPagamento, km, litros, preco, opcional) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }), options = {
            "key": "arla",
            "motorista": motorista,
            "tipoPosto": tipoPosto,
            "data": data,
            "formaPagamento": formaPagamento,
            "km": km,
            "litros": litros,
            "preco": preco
        }, url = this.baseURI + "manage-data.php";
        this.http.post(url, JSON.stringify(options), headers)
            .subscribe(function (data) {
            console.log(data);
            // If the request was successful notify the user
            console.log(data);
            _this.hideForm = true;
        }, function (error) {
            if (error.statusText == "OK") {
                console.log("fazer nada");
                _this.storage.delete(_this.storage.chaveArla);
                _this.storage.listaArla = [];
            }
            else {
                if (opcional != true) {
                    _this.storage.adicionarArla();
                }
            }
        });
    };
    DadosProvider.prototype.receitas = function (motorista, fornecedorOrigem, fornecedorDestino, produto, tipoPagmt, idUnidadeMedida, qntFaturado, qntDescarregado, valorUnitario, idSubUnidade, opcional) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }), options = {
            "key": "receitas",
            "motorista": motorista,
            "fornecedorOrigem": fornecedorOrigem,
            "fornecedorDestino": fornecedorDestino,
            "produto": produto,
            "tipoPagmt": tipoPagmt,
            "qntFaturado": qntFaturado,
            "qntDescarregado": qntDescarregado,
            "valorUnitario": valorUnitario,
            "idSubUnidade": idSubUnidade,
            "idUnidadeMedida": idUnidadeMedida
        }, url = this.baseURI + "manage-data.php";
        this.http.post(url, JSON.stringify(options), headers)
            .subscribe(function (data) {
            console.log(data);
            // If the request was successful notify the user
            console.log(data);
            _this.hideForm = true;
        }, function (error) {
            if (error.statusText == "OK") {
                console.log("fazer nada");
                _this.storage.delete(_this.storage.chaveReceitas);
                _this.storage.listaReceitas = [];
            }
            else {
                console.log('tratar erros');
                if (opcional != true) {
                    _this.storage.adicionarReceitas();
                }
            }
        });
    };
    return DadosProvider;
}());
DadosProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */]])
], DadosProvider);

//# sourceMappingURL=dados.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_validation__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_principal_principal_principal__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_modulo_viagens_viagens_viagens__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_modulo_viagens_receitas_receita_fornecedor_receita_fornecedor__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_modulo_viagens_receitas_receitas_foto_receitas_foto__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_modulo_viagens_geral_geral_page_geral_page__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_modulo_viagens_geral_geral_dados_viagem_geral_dados_viagem__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_modulo_viagens_geral_geral_dados_motorista_geral_dados_motorista__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_modulo_viagens_despesas_despesas_despesas__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_modulo_viagens_abastecimento_abastecimento_pagamento_abastecimento_pagamento__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_modulo_viagens_abastecimento_abastecimento_odometro_abastecimento_odometro__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_modulo_viagens_abastecimento_abastecimento_bomba_1_abastecimento_bomba_1__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_modulo_viagens_abastecimento_abastecimento_bomba_2_abastecimento_bomba_2__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_modulo_viagens_abastecimento_rotas_abastecimento_rotas_abastecimento__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_modulo_viagens_abastecimento_abastecimento_foto_bomba_1_abastecimento_foto_bomba_1__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_modulo_viagens_abastecimento_abastecimento_foto_bomba_2_abastecimento_foto_bomba_2__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_modulo_viagens_abastecimento_abastecimento_foto_odometro_abastecimento_foto_odometro__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_modulo_viagens_arla_32_rotas_arla_rotas_arla__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_modulo_viagens_receitas_rotas_receitas_rotas_receitas__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_modulo_viagens_relatorios_relatorios_page_relatorios__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_modulo_viagens_relatorios_receitas_relatorios_receitas_relatorios__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_modulo_viagens_relatorios_despesas_relatorios_despesas_relatorios__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_modulo_viagens_relatorios_abastecimento_relatorios_abastecimento_relatorios__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_modulo_viagens_relatorios_arla_relatorios_arla_relatorios__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_modulo_viagens_arla_32_arla_pag_arla_pag__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_modulo_viagens_arla_32_arla_posto_arla_posto__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_modulo_viagens_arla_32_fotoarla_fotoarla__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_camera__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_foto_servico_foto_servico__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_storage_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_dados_dados__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_common_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_login_login__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_enviar_enviar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_brmasker_ionic_3__ = __webpack_require__(460);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_principal_principal_principal__["a" /* PrincipalPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_modulo_viagens_viagens_viagens__["a" /* ViagensPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_modulo_viagens_receitas_receita_fornecedor_receita_fornecedor__["a" /* ReceitasFornecedorPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_modulo_viagens_receitas_receitas_foto_receitas_foto__["a" /* ReceitasFotoPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_modulo_viagens_despesas_despesas_despesas__["a" /* DespesasPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_modulo_viagens_geral_geral_page_geral_page__["a" /* GeralPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_modulo_viagens_abastecimento_abastecimento_pagamento_abastecimento_pagamento__["a" /* AbastecimentoPagamentoPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_modulo_viagens_abastecimento_abastecimento_odometro_abastecimento_odometro__["a" /* AbastecimentoOdometroPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_modulo_viagens_abastecimento_abastecimento_bomba_1_abastecimento_bomba_1__["a" /* AbastecimentoBomba1Page */],
            __WEBPACK_IMPORTED_MODULE_20__pages_modulo_viagens_abastecimento_abastecimento_bomba_2_abastecimento_bomba_2__["a" /* AbastecimentoBomba2Page */],
            __WEBPACK_IMPORTED_MODULE_21__pages_modulo_viagens_abastecimento_rotas_abastecimento_rotas_abastecimento__["a" /* RotasAbastecimentoPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_modulo_viagens_arla_32_rotas_arla_rotas_arla__["a" /* RotasArlaPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_modulo_viagens_receitas_rotas_receitas_rotas_receitas__["a" /* RotasReceitasPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_modulo_viagens_geral_geral_dados_viagem_geral_dados_viagem__["a" /* GeralDadosViagemPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_modulo_viagens_geral_geral_dados_motorista_geral_dados_motorista__["a" /* GeralDadosMotoristaPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_modulo_viagens_arla_32_arla_pag_arla_pag__["a" /* ArlaPagPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_modulo_viagens_arla_32_arla_posto_arla_posto__["a" /* ArlaPostoPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_modulo_viagens_abastecimento_abastecimento_foto_bomba_1_abastecimento_foto_bomba_1__["a" /* AbastecimentoFotoBomba_1Page */],
            __WEBPACK_IMPORTED_MODULE_23__pages_modulo_viagens_abastecimento_abastecimento_foto_bomba_2_abastecimento_foto_bomba_2__["a" /* AbastecimentoFotoBomba_2Page */],
            __WEBPACK_IMPORTED_MODULE_24__pages_modulo_viagens_abastecimento_abastecimento_foto_odometro_abastecimento_foto_odometro__["a" /* AbastecimentoFotoOdometroPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_modulo_viagens_relatorios_relatorios_page_relatorios__["a" /* RelatoriosPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_modulo_viagens_relatorios_despesas_relatorios_despesas_relatorios__["a" /* DespesasRelatoriosPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_modulo_viagens_relatorios_receitas_relatorios_receitas_relatorios__["a" /* ReceitasRelatoriosPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_modulo_viagens_relatorios_arla_relatorios_arla_relatorios__["a" /* ArlaRelatoriosPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_modulo_viagens_relatorios_abastecimento_relatorios_abastecimento_relatorios__["a" /* AbastecimentoRelatoriosPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_modulo_viagens_arla_32_fotoarla_fotoarla__["a" /* FotoarlaPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_login_login__["a" /* LoginPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulo-viagens/abastecimento/abastecimento-bomba-1/abastecimento-bomba-1.module#AbastecimentoBomba1PageModule', name: 'AbastecimentoBomba1Page', segment: 'abastecimento-bomba-1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulo-viagens/abastecimento/abastecimento-bomba-2/abastecimento-bomba-2.module#AbastecimentoBomba2PageModule', name: 'AbastecimentoBomba2Page', segment: 'abastecimento-bomba-2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulo-viagens/abastecimento/abastecimento-foto-bomba-1/abastecimento-foto-bomba-1.module#AbastecimentoFotoBomba_1PageModule', name: 'AbastecimentoFotoBomba_1Page', segment: 'abastecimento-foto-bomba-1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulo-viagens/abastecimento/abastecimento-foto-bomba-2/abastecimento-foto-bomba-2.module#AbastecimentoFotoBomba_2PageModule', name: 'AbastecimentoFotoBomba_2Page', segment: 'abastecimento-foto-bomba-2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulo-viagens/abastecimento/abastecimento-foto-odometro/abastecimento-foto-odometro.module#AbastecimentoFotoOdometroPageModule', name: 'AbastecimentoFotoOdometroPage', segment: 'abastecimento-foto-odometro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulo-viagens/abastecimento/abastecimento-odometro/abastecimento-odometro.module#AbastecimentoOdometroPageModule', name: 'AbastecimentoOdometroPage', segment: 'abastecimento-odometro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulo-viagens/abastecimento/abastecimento-pagamento/abastecimento-pagamento.module#AbastecimentoPagamentoPageModule', name: 'AbastecimentoPagamentoPage', segment: 'abastecimento-pagamento', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulo-viagens/abastecimento/rotas-abastecimento/rotas-abastecimento.module#RotasAbastecimentoPageModule', name: 'RotasAbastecimentoPage', segment: 'rotas-abastecimento', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulo-viagens/arla-32/arla-pag/arla-pag.module#ArlaPagModule', name: 'ArlaPagPage', segment: 'arla-pag', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulo-viagens/arla-32/arla-posto/arla-posto.module#ArlaPostoModule', name: 'ArlaPostoPage', segment: 'arla-posto', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulo-viagens/arla-32/fotoarla/fotoarla.module#FotoarlaPageModule', name: 'FotoarlaPage', segment: 'fotoarla', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulo-viagens/arla-32/rotas-arla/rotas-arla.module#RotasArlaPageModule', name: 'RotasArlaPage', segment: 'rotas-arla', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulo-viagens/despesas/despesas/despesas.module#DespesasPageModule', name: 'DespesasPage', segment: 'despesas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulo-viagens/geral/geral-dados-motorista/geral-dados-motorista.module#GeralDadosMotoristaModule', name: 'GeralDadosMotoristaPage', segment: 'geral-dados-motorista', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulo-viagens/geral/geral-dados-viagem/geral-dados-viagem.module#GeralDadosViagemModule', name: 'GeralDadosViagemPage', segment: 'geral-dados-viagem', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulo-viagens/geral/geral-page/geral-page.module#GeralPageModule', name: 'GeralPage', segment: 'geral-page', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulo-viagens/receitas/receita-fornecedor/receita-fornecedor.module#ReceitasFornecedorPageModule', name: 'ReceitasFornecedorPage', segment: 'receita-fornecedor', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulo-viagens/receitas/receitas-foto/receitas-foto.module#ReceitasFotoPageModule', name: 'ReceitasFotoPage', segment: 'receitas-foto', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulo-viagens/receitas/rotas-receitas/rotas-receitas.module#RotasReceitasPageModule', name: 'RotasReceitasPage', segment: 'rotas-receitas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulo-viagens/relatorios/abastecimento-relatorios/abastecimento-relatorios.module#AbastecimentoRelatoriosPageModule', name: 'AbastecimentoRelatoriosPage', segment: 'abastecimento-relatorios', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulo-viagens/relatorios/arla-relatorios/arla-relatorios.module#ArlaRelatoriosPageModule', name: 'ArlaRelatoriosPage', segment: 'arla-relatorios', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulo-viagens/relatorios/despesas-relatorios/despesas-relatorios.module#DespesasRelatoriosPageModule', name: 'DespesasRelatoriosPage', segment: 'despesas-relatorios', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulo-viagens/relatorios/receitas-relatorios/receitas-relatorios.module#ReceitasRelatoriosPageModule', name: 'ReceitasRelatoriosPage', segment: 'receitas-relatorios', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulo-viagens/relatorios/relatorios-page/relatorios.module#RelatoriosPageModule', name: 'RelatoriosPage', segment: 'relatorios', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulo-viagens/viagens/viagens.module#ViagensPageModule', name: 'ViagensPage', segment: 'viagens', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/principal/principal/principal.module#PrincipalPageModule', name: 'PrincipalPage', segment: 'principal', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_7_ng2_validation__["CustomFormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_37__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_40__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_43_brmasker_ionic_3__["a" /* BrMaskerModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_principal_principal_principal__["a" /* PrincipalPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_modulo_viagens_viagens_viagens__["a" /* ViagensPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_modulo_viagens_receitas_receita_fornecedor_receita_fornecedor__["a" /* ReceitasFornecedorPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_modulo_viagens_receitas_receitas_foto_receitas_foto__["a" /* ReceitasFotoPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_modulo_viagens_despesas_despesas_despesas__["a" /* DespesasPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_modulo_viagens_geral_geral_page_geral_page__["a" /* GeralPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_modulo_viagens_abastecimento_abastecimento_pagamento_abastecimento_pagamento__["a" /* AbastecimentoPagamentoPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_modulo_viagens_abastecimento_abastecimento_odometro_abastecimento_odometro__["a" /* AbastecimentoOdometroPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_modulo_viagens_abastecimento_abastecimento_bomba_1_abastecimento_bomba_1__["a" /* AbastecimentoBomba1Page */],
            __WEBPACK_IMPORTED_MODULE_21__pages_modulo_viagens_abastecimento_rotas_abastecimento_rotas_abastecimento__["a" /* RotasAbastecimentoPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_modulo_viagens_abastecimento_abastecimento_bomba_2_abastecimento_bomba_2__["a" /* AbastecimentoBomba2Page */],
            __WEBPACK_IMPORTED_MODULE_26__pages_modulo_viagens_receitas_rotas_receitas_rotas_receitas__["a" /* RotasReceitasPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_modulo_viagens_arla_32_rotas_arla_rotas_arla__["a" /* RotasArlaPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_modulo_viagens_geral_geral_dados_viagem_geral_dados_viagem__["a" /* GeralDadosViagemPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_modulo_viagens_geral_geral_dados_motorista_geral_dados_motorista__["a" /* GeralDadosMotoristaPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_modulo_viagens_arla_32_arla_pag_arla_pag__["a" /* ArlaPagPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_modulo_viagens_arla_32_arla_posto_arla_posto__["a" /* ArlaPostoPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_modulo_viagens_abastecimento_abastecimento_foto_bomba_1_abastecimento_foto_bomba_1__["a" /* AbastecimentoFotoBomba_1Page */],
            __WEBPACK_IMPORTED_MODULE_23__pages_modulo_viagens_abastecimento_abastecimento_foto_bomba_2_abastecimento_foto_bomba_2__["a" /* AbastecimentoFotoBomba_2Page */],
            __WEBPACK_IMPORTED_MODULE_24__pages_modulo_viagens_abastecimento_abastecimento_foto_odometro_abastecimento_foto_odometro__["a" /* AbastecimentoFotoOdometroPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_modulo_viagens_relatorios_relatorios_page_relatorios__["a" /* RelatoriosPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_modulo_viagens_relatorios_despesas_relatorios_despesas_relatorios__["a" /* DespesasRelatoriosPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_modulo_viagens_relatorios_receitas_relatorios_receitas_relatorios__["a" /* ReceitasRelatoriosPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_modulo_viagens_relatorios_arla_relatorios_arla_relatorios__["a" /* ArlaRelatoriosPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_modulo_viagens_relatorios_abastecimento_relatorios_abastecimento_relatorios__["a" /* AbastecimentoRelatoriosPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_modulo_viagens_arla_32_fotoarla_fotoarla__["a" /* FotoarlaPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_login_login__["a" /* LoginPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_35__ionic_native_camera__["a" /* Camera */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_36__providers_foto_servico_foto_servico__["a" /* FotoServicoProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_38__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_39__providers_dados_dados__["a" /* DadosProvider */],
            __WEBPACK_IMPORTED_MODULE_40__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_42__providers_enviar_enviar__["a" /* EnviarProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(291);
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
    function MyApp(platform, statusBar, splashScreen, screenOrientation, storageProvider, storage) {
        var _this = this;
        this.screenOrientation = screenOrientation;
        this.storageProvider = storageProvider;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        this.chaveAuth = "Auth";
        this.listaDespesas = {};
        platform.ready().then(function () {
            _this.screenOrientation.lock(screenOrientation.ORIENTATIONS.PORTRAIT);
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/fernando/viagensMobile/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/fernando/viagensMobile/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
        __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViagensPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abastecimento_rotas_abastecimento_rotas_abastecimento__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geral_geral_page_geral_page__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__despesas_despesas_despesas__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__arla_32_rotas_arla_rotas_arla__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__receitas_rotas_receitas_rotas_receitas__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_dados_dados__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_storage_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__relatorios_relatorios_page_relatorios__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_enviar_enviar__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { Network } from "@ionic-native/network";




var ViagensPage = (function () {
    function ViagensPage(navCtrl, navParams, dados, 
        // public network: Network,
        storage, storageProvider, enviar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dados = dados;
        this.storage = storage;
        this.storageProvider = storageProvider;
        this.enviar = enviar;
    }
    ViagensPage.prototype.linkAbastecimento = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__abastecimento_rotas_abastecimento_rotas_abastecimento__["a" /* RotasAbastecimentoPage */]);
    };
    ViagensPage.prototype.linkReceitas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__receitas_rotas_receitas_rotas_receitas__["a" /* RotasReceitasPage */]);
    };
    ViagensPage.prototype.linkDespesas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__despesas_despesas_despesas__["a" /* DespesasPage */]);
    };
    ViagensPage.prototype.linkArla32 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__arla_32_rotas_arla_rotas_arla__["a" /* RotasArlaPage */]);
    };
    ViagensPage.prototype.linkGeral = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__geral_geral_page_geral_page__["a" /* GeralPage */]);
    };
    ViagensPage.prototype.linkRelatorios = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__relatorios_relatorios_page_relatorios__["a" /* RelatoriosPage */]);
    };
    ViagensPage.prototype.ionViewDidEnter = function () {
        // this.naoEnviadas = this.provider.recuperaTamanho();
        // return this.provider.recuperaTamanho();
        this.arlaPendente = this.storageProvider.tamanhoArla();
        this.abastecimentoPendente = this.storageProvider.tamanhoAbastecimento();
        this.despesasPendente = this.storageProvider.tamanhoDespesas();
        this.receitasPendente = this.storageProvider.tamanhoReceitas();
        this.enviar.enviar();
    };
    ViagensPage.prototype.ngAfterViewInit = function () {
        // this.arlaPendente = this.provider.tamanhoArla();
        // this.abastecimentoPendente = this.provider.tamanhoAbastecimento();
        // this.despesasPendente = this.provider.tamanhoDespesas();
        // this.receitasPendente = this.provider.tamanhoReceitas();   
        // this.network.onConnect().subscribe(data => {
        //   console.log(data)
        // }, error => console.error(error));
        // this.network.onDisconnect().subscribe(data => {
        //   console.log(data)
        // }, error => console.error(error));
        // console.log(this.network.type)
    };
    return ViagensPage;
}());
ViagensPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-viagens',template:/*ion-inline-start:"/home/fernando/viagensMobile/src/pages/modulo-viagens/viagens/viagens.html"*/'<ion-header>\n\n  <ion-navbar color="tijuca">\n    <ion-title>Viagens</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<div class="fixed-content">\n\n  <ion-content class="card-background-page">\n    <div class="grid">\n\n      <div class="row">\n        <div class="column" (click)="linkAbastecimento()">Abastecer\n          <button ion-fab class="fab" *ngIf = "abastecimentoPendente > 0">{{abastecimentoPendente}}</button>\n          <img class="imagem" src="assets/images/abastecimento.svg" />\n        </div>\n\n        <div class="column" (click)="linkGeral()">Geral\n          <img class="imagem" src="assets/images/geral.svg" />\n        </div>\n      </div>\n\n      <div class="row">\n        <div class="column" (click)="linkArla32()">Arla 32\n          <button ion-fab class="fab" *ngIf = "arlaPendente > 0">{{arlaPendente}}</button>\n          <img class="imagem" src="assets/images/arla.svg" />\n        </div>\n\n        <div class="column" (click)="linkDespesas()">Gastos\n          <button ion-fab class="fab" *ngIf = "despesasPendente > 0">{{despesasPendente}}</button>\n          <img class="imagem" src="assets/images/gastos.svg" />\n        </div>\n\n      </div>\n\n\n      <div class="row">\n        <div class="column" (click)="linkReceitas()">Receitas\n          <button ion-fab class="fab" *ngIf = "receitasPendente > 0">{{receitasPendente}}</button>\n          <img class="imagem" src="assets/images/receitas.svg" />\n        </div>\n\n        <div class="column" (click)="linkRelatorios()">Relatórios\n          <img class="imagem" src="assets/images/relatorios.svg" />\n        </div>\n\n      </div>\n\n    </div>\n\n\n  </ion-content>\n</div>'/*ion-inline-end:"/home/fernando/viagensMobile/src/pages/modulo-viagens/viagens/viagens.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_7__providers_dados_dados__["a" /* DadosProvider */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_9__providers_storage_storage__["a" /* StorageProvider */],
        __WEBPACK_IMPORTED_MODULE_11__providers_enviar_enviar__["a" /* EnviarProvider */]])
], ViagensPage);

//# sourceMappingURL=viagens.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorageProvider = (function () {
    function StorageProvider(storage) {
        var _this = this;
        this.storage = storage;
        this.arrayAbastecimento = [];
        this.arrayArla = [];
        this.arrayDespesas = [];
        this.arrayReceitas = [];
        this.login = {
            isLoggedIn: false,
            name: "",
        };
        //Dados despesas
        this.despesas = {
            motorista: "bino",
            id: 1,
            despesas: "",
            dataDespesas: "",
            valorDespesas: ""
        };
        //Dados Receitas
        this.receitas = {
            motorista: "bino",
            id: 2,
            fornecedorOrigem: "",
            fornecedorDestino: "",
            produto: "",
            tipoPagmt: "",
            idUnidadeMedida: "",
            idUnidadeBandeja: "",
            caixa: "",
            qntFaturado: "",
            qntDescarregado: "",
            valorUnitario: "",
            idSubUnidade: ""
        };
        //Dados arla
        this.arla = {
            motorista: "bino",
            id: 3,
            dataArla: "",
            postoArla: "",
            tipoArla: "",
            km: "",
            litrosArla: "",
            litrosPrecoArla: "",
            selectArla: "",
        };
        //Dados abastecimento
        this.abastecimento = {
            motorista: "bino",
            id: 4,
            tipoAbastecimento: "",
            postoAbastecimento: "",
            dataAbastecimento: "",
            tipoPagmtAbastecimento: "",
            odometro: "",
            litrosBomb1: "",
            precoBomb1: "",
            litrosBomb2: "",
            precoBomb2: "",
        };
        this.chaveAuth = "Auth";
        this.chaveAbastecimento = "abastecimento";
        this.chaveArla = "arla";
        this.chaveDespesas = "despesas";
        this.chaveReceitas = "receitas";
        this.storage.ready().then(function () {
            _this.storage.get(_this.chaveAbastecimento).then(function (registros) {
                if (registros) {
                    _this.listaAbastecimento = registros;
                }
                else {
                    _this.listaAbastecimento = [];
                }
            });
        });
        this.storage.ready().then(function () {
            _this.storage.get(_this.chaveArla).then(function (registros) {
                if (registros) {
                    _this.listaArla = registros;
                }
                else {
                    _this.listaArla = [];
                }
            });
        });
        this.storage.ready().then(function () {
            _this.storage.get(_this.chaveDespesas).then(function (registros) {
                if (registros) {
                    _this.listaDespesas = registros;
                }
                else {
                    _this.listaDespesas = [];
                }
            });
        });
        this.storage.ready().then(function () {
            _this.storage.get(_this.chaveAuth).then(function (registros) {
                if (registros) {
                    _this.listaAuth = registros;
                }
                else {
                    _this.listaAuth = [];
                }
            });
        });
        this.storage.ready().then(function () {
            _this.storage.get(_this.chaveReceitas).then(function (registros) {
                if (registros) {
                    _this.listaReceitas = registros;
                }
                else {
                    _this.listaReceitas = [];
                }
            });
        });
    }
    StorageProvider.prototype.listarAuth = function () {
        // return new Promise((resolve, reject) => {
        // this.page.rootPage = PrincipalPage
        return this.listaAuth;
        // })
    };
    StorageProvider.prototype.listarArla = function () {
        return this.listaArla;
    };
    StorageProvider.prototype.listarDespesa = function () {
        return this.listaDespesas;
    };
    StorageProvider.prototype.listarReceitas = function () {
        return this.listaReceitas;
    };
    StorageProvider.prototype.tamanhoAbastecimento = function () {
        this.arrayAbastecimento = this.listar();
        return this.arrayAbastecimento.length;
    };
    StorageProvider.prototype.tamanhoArla = function () {
        this.arrayArla = this.listarArla();
        return this.arrayArla.length;
    };
    StorageProvider.prototype.tamanhoDespesas = function () {
        this.arrayDespesas = this.listarDespesa();
        return this.arrayDespesas.length;
    };
    StorageProvider.prototype.tamanhoReceitas = function () {
        this.arrayReceitas = this.listarReceitas();
        return this.arrayReceitas.length;
    };
    //  Vai retornar a lista
    StorageProvider.prototype.listar = function () {
        return this.listaAbastecimento;
    };
    //Verificação Login
    StorageProvider.prototype.loginUser = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.listaAuth.push(_this.login);
            _this.storage.set(_this.chaveAuth, _this.listaAuth);
        });
    };
    StorageProvider.prototype.recuperaTamanho = function () {
        this.storage.length().then(function (result) {
            console.log(result);
            return result;
        });
    };
    //Verificação Login
    // loginUser() {
    //   this.storage.ready().then(() => {
    //     this.lista.push(this.isLoggedIn);
    //     this.storage.set(this.chave, this.lista);
    //   });
    // }
    // Adicionar Despesas
    StorageProvider.prototype.adicionarDespesas = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.listaDespesas.push(_this.despesas);
            _this.storage.set(_this.chaveDespesas, _this.listaDespesas);
        });
    };
    // Adicionar o registro á lista, e persistir ela no BD através do método SET
    StorageProvider.prototype.adicionarReceitas = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.listaReceitas.push(_this.receitas);
            _this.storage.set(_this.chaveReceitas, _this.listaReceitas);
        });
    };
    // Adicionar Arla
    StorageProvider.prototype.adicionarArla = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.listaArla.push(_this.arla);
            //this.storage.set(this.chaveArla, this.listaArla);
        });
    };
    StorageProvider.prototype.adicionarAbastecimento = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.listaAbastecimento.push(_this.abastecimento);
            _this.storage.set(_this.chaveAbastecimento, _this.listaAbastecimento);
        });
    };
    // 1º vai ser o "Storage" que quer atualizar -- 2º os "Dados" que vai chegar do formulário
    // Atualizar determinados registros
    StorageProvider.prototype.atualizar = function (key) {
        // for (let chave in this.listaAuth) {
        //   if (this.listaAuth[chave] == storage) {
        // this.listaAuth[chave] = dados;
        this.storage.set(key, this.login);
        //   }
        // }
    };
    // // Deletar Storage
    // deletar(storage) {
    //   for (let chave in this.listaReceitas) {
    //     if (this.listaReceitas[chave] == storage) {
    //       this.listaReceitas.splice(parseInt(chave), 1);
    //       this.storage.set(this.chaveReceitas, this.listaReceitas);
    //     }
    //   }
    // }
    StorageProvider.prototype.delete = function (id) {
        return this.storage.remove(id).
            then(function () { return true; });
    };
    StorageProvider.prototype.detectAmount = function (v) {
        if (v) {
            this.n = v[v.length - 1];
            if (isNaN(this.n)) {
                v = v.substring(0, v.length - 1);
                console.log(v);
                return v;
            }
            v = this.fixAmount(v);
            return v;
        }
    };
    StorageProvider.prototype.fixAmount = function (a) {
        var period = a.indexOf(".");
        // console.log(a)
        if (period > -1) {
            a = a.substring(0, period) + a.substring(period + 1);
        }
        this.len = a.length;
        while (this.len < 3) {
            a = "0" + a;
            this.len = a.length;
        }
        a = a.substring(0, this.len - 2) + "." + a.substring(this.len - 2, this.len);
        while (a.length > 4 && (a[0] == '0')) {
            a = a.substring(1);
        }
        if (a[0] == ".") {
            a = "0" + a;
        }
        return (a);
    };
    return StorageProvider;
}());
StorageProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], StorageProvider);

//# sourceMappingURL=storage.js.map

/***/ })

},[296]);
//# sourceMappingURL=main.js.map