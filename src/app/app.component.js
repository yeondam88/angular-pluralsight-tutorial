"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = 'ACME product management';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        template: "\n        <div class=\"ui fixed inverted menu\">\n            <div class=\"ui container\">\n                <a href=\"#\" class=\"header item\">\n                    <img class=\"logo\" src=\"../favicon.ico\">\n                    &nbsp; ACME Product Management\n                </a>\n                <a [routerLink]=\"['/welcome']\" class=\"item\">Home</a>\n                <a [routerLink]=\"['/products']\" class=\"item\">Products</a>\n            </div>\n        </div>\n        <div class=\"container\">\n            <h1><i class=\"desktop icon\"></i> {{ pageTitle }}</h1>\n            <router-outlet></router-outlet>\n        </div>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map