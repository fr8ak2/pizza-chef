import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListModel, TitleVariants, TitleSizes, picLoadingState } from '@models/models';
import { PicComponent, TitleComponent, TextComponent, ButtonComponent } from '@shared/shared';
import { ModalComponent } from '@components/components';
import { ModalService } from '@services/services';

@Component({
    selector: 'pizza-products-list',
    standalone: true,
    imports: [CommonModule, PicComponent, TitleComponent, TextComponent, ButtonComponent, ModalComponent],
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

    product?: ProductsListModel;

    constructor(protected modalService: ModalService) {}

    enlargeImage(id: number) {
        this.product = this.products?.find(i => id == i.id);
        this.modalService.open('product');
    }
}
