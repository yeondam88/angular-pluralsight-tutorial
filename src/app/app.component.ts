import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <div class="ui fixed inverted menu">
            <div class="ui container">
                <a href="#" class="header item">
                    <img class="logo" src="../favicon.ico">
                    &nbsp; ACME Product Management
                </a>
                <a [routerLink]="['/welcome']" class="item">Home</a>
                <a [routerLink]="['/products']" class="item">Products</a>
            </div>
        </div>
        <div class="container">
            <h1><i class="desktop icon"></i> {{ pageTitle }}</h1>
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent {
    pageTitle: string = 'ACME product management';
}
