import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent, TitleComponent } from '@shared/shared';
import { ProductsListComponent } from '@components/components';
import { ProductsListModel } from '@models/products-list.model';
import { DataService } from '@services/data.service';

@Component({
    selector: 'pizza-products',
    standalone: true,
    imports: [CommonModule, WrapperComponent, TitleComponent, ProductsListComponent],
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss',
    encapsulation: ViewEncapsulation.None,
})
export class ProductsComponent implements OnInit {
    products: ProductsListModel[] = [];

    constructor(private dataService: DataService) {}
    ngOnInit() {
        this.loadProducts();
    }

    loadProducts() {
        this.dataService.fetchProducts().subscribe(data => (this.products = data));
    }
}
