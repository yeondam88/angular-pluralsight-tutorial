import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    listFilter: string = '';
    showImage: boolean = false;
    pageTitle: string = 'Product List';
    products: IProduct[];
    errorMessage: string;
    isLoaded: boolean = false;

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        setTimeout(() => {
            this.productService.getProducts()
                .subscribe(
                    products => this.products = products,
                    error => this.errorMessage = <any>error);
            this.isLoaded = true;
        }, 500);
    }

    onClickHandler(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}
