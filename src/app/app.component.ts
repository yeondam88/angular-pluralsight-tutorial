import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <div class="container">
            <h1><i class="desktop icon"></i> {{ pageTitle }}</h1>
            <pm-products></pm-products>
        </div>
    `
})
export class AppComponent {
    pageTitle: string = 'ACME product management';
}
