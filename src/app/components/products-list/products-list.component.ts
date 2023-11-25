import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListModel, TitleVariants, TitleSizes, picLoadingState } from '@models/models';
import { PicComponent, TitleComponent, TextComponent, ButtonComponent } from '@shared/shared';

@Component({
    selector: 'pizza-products-list',
    standalone: true,
    imports: [CommonModule, PicComponent, TitleComponent, TextComponent, ButtonComponent],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.scss',
    encapsulation: ViewEncapsulation.None,
})
export class ProductsListComponent {
    @Input() products?: ProductsListModel[] = [];
    @Input() headingVariants?: TitleVariants;
    @Input() headingSizes?: TitleSizes;
    @Input() headingCustomClass?: string = '';
    @Input() picLoadingState?: picLoadingState;
}
